import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import Product, { ProductCategory } from '@/models/Product';
import { Types } from 'mongoose';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { title, description, price, images, category, stock } = await request.json();

    // TODO: Get userId from JWT token/session
    // For now, we'll accept it from request or use a test ID
    const userId = request.headers.get('x-user-id') || new Types.ObjectId().toString();

    // Validation
    if (!title || !description || !price || !images || !category) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide all required fields: title, description, price, images, category',
        },
        { status: 400 }
      );
    }

    if (typeof price !== 'number' || price < 0) {
      return NextResponse.json(
        { success: false, message: 'Price must be a positive number' },
        { status: 400 }
      );
    }

    if (!Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please provide at least one image' },
        { status: 400 }
      );
    }

    if (!Object.values(ProductCategory).includes(category)) {
      return NextResponse.json(
        { success: false, message: `Invalid category. Must be one of: ${Object.values(ProductCategory).join(', ')}` },
        { status: 400 }
      );
    }

    // Create new product
    const newProduct = new Product({
      title: title.trim(),
      description: description.trim(),
      price,
      images,
      category,
      stock: stock || 0,
      seller: new Types.ObjectId(userId),
      status: 'draft', // Products start as draft
    });

    // Save product
    await newProduct.save();

    // Populate seller info
    await newProduct.populate('seller', 'name email');

    return NextResponse.json(
      {
        success: true,
        message: 'Product created successfully',
        product: newProduct,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create product error:', error);

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

// GET all products with filtering and pagination
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const seller = searchParams.get('seller');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Build filter
    const filter: any = { status: 'active' };
    if (category) filter.category = category;
    if (seller) filter.seller = new Types.ObjectId(seller);

    // Get products
    const products = await Product.find(filter)
      .populate('seller', 'name email avatar')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // Get total count
    const total = await Product.countDocuments(filter);

    return NextResponse.json(
      {
        success: true,
        products,
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
    console.error('Get products error:', error);

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
