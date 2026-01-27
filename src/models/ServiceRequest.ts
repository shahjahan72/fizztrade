import mongoose, { Schema, Document, Types } from 'mongoose';

export enum ServiceType {
  BRANDING = 'branding',
  PRODUCT_SOURCING = 'product-sourcing',
  LEGAL_REGISTRATION = 'legal-registration',
  BUYER_MATCHING = 'buyer-matching',
  ONLINE_STORE = 'online-store',
  PHYSICAL_BRANDING = 'physical-branding',
}

export enum RequestStatus {
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}

export interface IServiceRequest extends Document {
  user: Types.ObjectId;
  serviceType: ServiceType;
  status: RequestStatus;
  title: string;
  description: string;
  details: Record<string, any>;
  attachments?: string[];
  assignedTo?: Types.ObjectId;
  estimatedCost?: number;
  actualCost?: number;
  notes?: string;
  completedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceRequestSchema = new Schema<IServiceRequest>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide a user ID'],
    },
    serviceType: {
      type: String,
      enum: Object.values(ServiceType),
      required: [true, 'Please specify a service type'],
    },
    status: {
      type: String,
      enum: Object.values(RequestStatus),
      default: RequestStatus.PENDING,
    },
    title: {
      type: String,
      required: [true, 'Please provide a title for the service request'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    details: {
      type: Schema.Types.Mixed,
      default: {},
    },
    attachments: {
      type: [String],
      default: [],
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    estimatedCost: {
      type: Number,
      default: null,
      min: [0, 'Cost cannot be negative'],
    },
    actualCost: {
      type: Number,
      default: null,
      min: [0, 'Cost cannot be negative'],
    },
    notes: {
      type: String,
      maxlength: [1000, 'Notes cannot exceed 1000 characters'],
    },
    completedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
ServiceRequestSchema.index({ user: 1, status: 1 });
ServiceRequestSchema.index({ serviceType: 1 });
ServiceRequestSchema.index({ createdAt: -1 });

export default mongoose.models.ServiceRequest ||
  mongoose.model<IServiceRequest>('ServiceRequest', ServiceRequestSchema);
