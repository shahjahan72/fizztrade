import mongoose, { Schema, Document, Types } from 'mongoose';

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  REFUNDED = 'refunded',
}

export interface OrderItem {
  product: Types.ObjectId;
  quantity: number;
  price: number;
  subtotal: number;
}

export interface IOrder extends Document {
  buyer: Types.ObjectId;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  shippingAddress?: {
    street?: string;
    city?: string;
    country?: string;
    postalCode?: string;
  };
  trackingNumber?: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  paymentMethod?: string;
  notes?: string;
  shippedAt?: Date;
  deliveredAt?: Date;
  cancelledAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide a buyer ID'],
    },
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: [true, 'Please provide a product ID'],
        },
        quantity: {
          type: Number,
          required: [true, 'Please provide a quantity'],
          min: [1, 'Quantity must be at least 1'],
        },
        price: {
          type: Number,
          required: [true, 'Please provide a price'],
          min: [0, 'Price cannot be negative'],
        },
        subtotal: {
          type: Number,
          required: [true, 'Subtotal must be provided'],
          min: [0, 'Subtotal cannot be negative'],
        },
      },
    ],
    totalAmount: {
      type: Number,
      required: [true, 'Please provide a total amount'],
      min: [0, 'Total amount cannot be negative'],
    },
    status: {
      type: String,
      enum: Object.values(OrderStatus),
      default: OrderStatus.PENDING,
    },
    shippingAddress: {
      street: String,
      city: String,
      country: String,
      postalCode: String,
    },
    trackingNumber: {
      type: String,
      default: null,
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    paymentMethod: {
      type: String,
      enum: ['credit-card', 'bank-transfer', 'wallet', 'other'],
      default: null,
    },
    notes: {
      type: String,
      maxlength: [500, 'Notes cannot exceed 500 characters'],
    },
    shippedAt: {
      type: Date,
      default: null,
    },
    deliveredAt: {
      type: Date,
      default: null,
    },
    cancelledAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
OrderSchema.index({ buyer: 1, status: 1 });
OrderSchema.index({ createdAt: -1 });

export default mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);
