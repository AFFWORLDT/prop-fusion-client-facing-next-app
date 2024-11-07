import mongoose, { Mongoose } from "mongoose";

const MONGO_URI = process.env.MONGODB_URI;
if (!MONGO_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}
let chasedMongooseConn: MongooseConn = (global as any).mongoose;

if (!chasedMongooseConn) {
  chasedMongooseConn = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function dbConnect() {
  if (chasedMongooseConn.conn) {
    return chasedMongooseConn.conn;
  }

  chasedMongooseConn.promise =
    chasedMongooseConn.promise ||
    mongoose.connect(MONGO_URI as string, {
      dbName: "prop-fusion",
      bufferCommands: true,
      connectTimeoutMS: 30000,
    });

  chasedMongooseConn.conn = await chasedMongooseConn.promise;
  return chasedMongooseConn.conn;
}
