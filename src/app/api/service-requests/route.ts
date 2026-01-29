import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { serviceType, title, description, details } = await request.json();
    const userId = request.headers.get('x-user-id');
    if (!userId) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });

    if (!serviceType || !title || !description) {
      return NextResponse.json({ success: false, message: 'Please provide all required fields: serviceType, title, description' }, { status: 400 });
    }

    if (title.length < 5) return NextResponse.json({ success: false, message: 'Title must be at least 5 characters' }, { status: 400 });
    if (description.length < 10) return NextResponse.json({ success: false, message: 'Description must be at least 10 characters' }, { status: 400 });

    const newRequest = await prisma.serviceRequest.create({
      data: {
        user: { connect: { id: userId } },
        serviceType,
        title: title.trim(),
        description: description.trim(),
        details: details || {},
        status: 'PENDING',
      },
      include: { user: { select: { id: true, name: true, email: true } }, assignedTo: { select: { id: true, name: true, email: true } } },
    });

    return NextResponse.json({ success: true, message: 'Service request submitted successfully', serviceRequest: newRequest }, { status: 201 });
  } catch (error: any) {
    console.error('Create service request error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');
    const serviceType = searchParams.get('serviceType');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    const where: any = {};
    if (userId) where.userId = userId;
    if (status) where.status = status;
    if (serviceType) where.serviceType = serviceType;

    const [requests, total] = await Promise.all([
      prisma.serviceRequest.findMany({
        where,
        include: { user: { select: { id: true, name: true, email: true } }, assignedTo: { select: { id: true, name: true, email: true } } },
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.serviceRequest.count({ where }),
    ]);

    return NextResponse.json({ success: true, requests, pagination: { page, limit, total, pages: Math.ceil(total / limit) } }, { status: 200 });
  } catch (error: any) {
    console.error('Get service requests error:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
