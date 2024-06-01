// lib/mongoose.ts
import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL as string;
if (!DATABASE_URL) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env.local",
  );
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(DATABASE_URL)
      .then((mongoose) => {
        console.log("Connected to MongoDB");
        return mongoose;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
