import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { title, description, price, images, category, stock } = await request.json();

    // TODO: replace with real auth session
    const userId = request.headers.get('x-user-id');

    if (!userId) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    // Validation
    if (!title || !description || price === undefined || !images || !category) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields: title, description, price, images, category' },
        { status: 400 }
      );
    }

    if (typeof price !== 'number' || price < 0) {
      return NextResponse.json({ success: false, message: 'Price must be a positive number' }, { status: 400 });
    }

    if (!Array.isArray(images) || images.length === 0) {
      return NextResponse.json({ success: false, message: 'Please provide at least one image' }, { status: 400 });
    }

    const newProduct = await prisma.product.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        price,
        images,
        category,
        stock: stock ?? 0,
        status: 'DRAFT',
        user: { connect: { id: userId } },
      },
      include: { user: { select: { id: true, name: true, email: true, image: true } } },
    });

    return NextResponse.json({ success: true, message: 'Product created successfully', product: newProduct }, { status: 201 });
  } catch (error: any) {
    console.error('Create product error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const seller = searchParams.get('seller');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;
    const search = searchParams.get('search');

    const where: any = { status: 'ACTIVE' };
    if (category) where.category = category;
    if (seller) where.userId = seller;
    if (search) where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { description: { contains: search, mode: 'insensitive' } },
    ];

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        include: { user: { select: { id: true, name: true, email: true, image: true } } },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.product.count({ where }),
    ]);

    return NextResponse.json(
      {
        success: true,
        products,
        pagination: { page, limit, total, pages: Math.ceil(total / limit) },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Get products error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
