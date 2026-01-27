import mongoose, { Schema, Document, Types } from 'mongoose';

export enum ProductCategory {
  ELECTRONICS = 'electronics',
  FASHION = 'fashion',
  HOME = 'home',
  SPORTS = 'sports',
  BOOKS = 'books',
  BEAUTY = 'beauty',
  TOYS = 'toys',
  OTHER = 'other',
}

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  images: string[];
  seller: Types.ObjectId;
  category: ProductCategory;
  stock: number;
  rating?: number;
  reviews?: number;
  status: 'active' | 'inactive' | 'draft';
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    title: {
      type: String,
      required: [true, 'Please provide a product title'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a product description'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
      min: [0, 'Price cannot be negative'],
      max: [1000000, 'Price is too large'],
    },
    images: {
      type: [String],
      required: [true, 'Please provide at least one image'],
      validate: {
        validator: function (arr: string[]) {
          return arr.length > 0 && arr.length <= 10;
        },
        message: 'Product must have between 1 and 10 images',
      },
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Product must have a seller'],
    },
    category: {
      type: String,
      enum: Object.values(ProductCategory),
      required: [true, 'Please provide a category'],
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, 'Stock cannot be negative'],
    },
    rating: {
      type: Number,
      default: 0,
      min: [0, 'Rating cannot be less than 0'],
      max: [5, 'Rating cannot exceed 5'],
    },
    reviews: {
      type: Number,
      default: 0,
      min: [0, 'Reviews cannot be negative'],
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'draft'],
      default: 'draft',
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Index for better query performance
ProductSchema.index({ seller: 1, status: 1 });
ProductSchema.index({ category: 1 });
ProductSchema.index({ title: 'text', description: 'text' });

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);
