import mongoose, { Mongoose } from 'mongoose';

interface GlobalMongoose {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongooseConnection: GlobalMongoose | undefined;
}

let cached: GlobalMongoose = global.mongooseConnection || { conn: null, promise: null };

if (!cached) {
  cached = global.mongooseConnection = { conn: null, promise: null };
}

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/fizztrade';

    cached.promise = mongoose.connect(mongoUrl, opts).then(mongoose => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
