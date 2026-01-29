import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { items, totalAmount, shippingAddress, paymentMethod } = await request.json();

    const buyerId = request.headers.get('x-user-id');
    if (!buyerId) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ success: false, message: 'Please provide at least one item' }, { status: 400 });
    }

    if (!totalAmount || typeof totalAmount !== 'number' || totalAmount <= 0) {
      return NextResponse.json({ success: false, message: 'Please provide a valid total amount' }, { status: 400 });
    }

    for (const item of items) {
      if (!item.product || !item.quantity || !item.price) {
        return NextResponse.json({ success: false, message: 'Each item must have product, quantity, and price' }, { status: 400 });
      }
      if (typeof item.quantity !== 'number' || item.quantity < 1) {
        return NextResponse.json({ success: false, message: 'Quantity must be a positive number' }, { status: 400 });
      }
    }

    const createdOrder = await prisma.order.create({
      data: {
        buyer: { connect: { id: buyerId } },
        totalAmount,
        status: 'PENDING',
        paymentStatus: 'pending',
        paymentMethod: paymentMethod || 'credit-card',
        shippingAddress: shippingAddress || {},
        items: {
          create: items.map((it: any) => ({
            product: { connect: { id: it.product } },
            quantity: it.quantity,
            price: it.price,
            subtotal: it.quantity * it.price,
          })),
        },
      },
      include: {
        buyer: { select: { id: true, name: true, email: true } },
        items: { include: { product: { select: { id: true, title: true, price: true, image: true } } } },
      },
    });

    return NextResponse.json({ success: true, message: 'Order created successfully', order: createdOrder }, { status: 201 });
  } catch (error: any) {
    console.error('Create order error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const buyerId = searchParams.get('buyerId');
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const where: any = {};
    if (buyerId) where.buyerId = buyerId;
    if (status) where.status = status;

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        include: { buyer: { select: { id: true, name: true, email: true } }, items: { include: { product: true } } },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.order.count({ where }),
    ]);

    return NextResponse.json({ success: true, orders, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }, { status: 200 });
  } catch (error: any) {
    console.error('Get orders error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
