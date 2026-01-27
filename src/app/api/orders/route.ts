import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Order, { OrderStatus } from '@/models/Order';
import { Types } from 'mongoose';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { items, totalAmount, shippingAddress, paymentMethod } = await request.json();

    // TODO: Get userId from JWT token/session
    const buyerId = request.headers.get('x-user-id') || new Types.ObjectId().toString();

    // Validation
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please provide at least one item' },
        { status: 400 }
      );
    }

    if (!totalAmount || typeof totalAmount !== 'number' || totalAmount <= 0) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid total amount' },
        { status: 400 }
      );
    }

    // Validate items structure
    for (const item of items) {
      if (!item.product || !item.quantity || !item.price) {
        return NextResponse.json(
          { success: false, message: 'Each item must have product, quantity, and price' },
          { status: 400 }
        );
      }

      if (typeof item.quantity !== 'number' || item.quantity < 1) {
        return NextResponse.json(
          { success: false, message: 'Quantity must be a positive number' },
          { status: 400 }
        );
      }
    }

    // Create new order
    const newOrder = new Order({
      buyer: new Types.ObjectId(buyerId),
      items: items.map((item: any) => ({
        product: new Types.ObjectId(item.product),
        quantity: item.quantity,
        price: item.price,
        subtotal: item.quantity * item.price,
      })),
      totalAmount,
      status: OrderStatus.PENDING,
      paymentStatus: 'pending',
      shippingAddress: shippingAddress || {},
      paymentMethod: paymentMethod || 'credit-card',
    });

    // Save order
    await newOrder.save();

    // Populate product and buyer info
    await newOrder.populate([
      { path: 'buyer', select: 'name email phone' },
      { path: 'items.product', select: 'title price' },
    ]);

    return NextResponse.json(
      {
        success: true,
        message: 'Order created successfully',
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create order error:', error);

    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors)
        .map((err: any) => err.message)
        .join(', ');
      return NextResponse.json(
        { success: false, message: messages },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET orders with filtering
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const buyerId = searchParams.get('buyerId');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Build filter
    const filter: any = {};
    if (buyerId) filter.buyer = new Types.ObjectId(buyerId);
    if (status && Object.values(OrderStatus).includes(status as OrderStatus))
      filter.status = status;

    // Get orders
    const orders = await Order.find(filter)
      .populate('buyer', 'name email phone')
      .populate('items.product', 'title price images')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // Get total count
    const total = await Order.countDocuments(filter);

    return NextResponse.json(
      {
        success: true,
        orders,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Get orders error:', error);

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
