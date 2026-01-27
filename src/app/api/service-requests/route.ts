import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongoose';
import ServiceRequest, { ServiceType, RequestStatus } from '@/models/ServiceRequest';
import { Types } from 'mongoose';

export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const { serviceType, title, description, details } = await request.json();

    // TODO: Get userId from JWT token/session
    // For now, we'll accept it from request header or use a test ID
    const userId = request.headers.get('x-user-id') || new Types.ObjectId().toString();

    // Validation
    if (!serviceType || !title || !description) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please provide all required fields: serviceType, title, description',
        },
        { status: 400 }
      );
    }

    if (!Object.values(ServiceType).includes(serviceType)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid service type. Must be one of: ${Object.values(ServiceType).join(', ')}`,
        },
        { status: 400 }
      );
    }

    if (title.length < 5) {
      return NextResponse.json(
        { success: false, message: 'Title must be at least 5 characters' },
        { status: 400 }
      );
    }

    if (description.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Description must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Create new service request
    const newServiceRequest = new ServiceRequest({
      user: new Types.ObjectId(userId),
      serviceType,
      title: title.trim(),
      description: description.trim(),
      details: details || {},
      status: RequestStatus.PENDING,
    });

    // Save service request
    await newServiceRequest.save();

    // Populate user info
    await newServiceRequest.populate('user', 'name email phone');

    return NextResponse.json(
      {
        success: true,
        message: 'Service request submitted successfully',
        serviceRequest: newServiceRequest,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create service request error:', error);

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

// GET service requests with filtering
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const status = searchParams.get('status');
    const serviceType = searchParams.get('serviceType');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Build filter
    const filter: any = {};
    if (userId) filter.user = new Types.ObjectId(userId);
    if (status && Object.values(RequestStatus).includes(status))
      filter.status = status;
    if (serviceType && Object.values(ServiceType).includes(serviceType))
      filter.serviceType = serviceType;

    // Get service requests
    const requests = await ServiceRequest.find(filter)
      .populate('user', 'name email phone')
      .populate('assignedTo', 'name email')
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    // Get total count
    const total = await ServiceRequest.countDocuments(filter);

    return NextResponse.json(
      {
        success: true,
        requests,
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
    console.error('Get service requests error:', error);

    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
