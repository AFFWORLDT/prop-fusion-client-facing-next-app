import mongoose, { Mongoose } from "mongoose";
import { inspect } from "util";

const MONGO_URI = process.env.MONGODB_URL;
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
  console.log("Creating new database connection");
  chasedMongooseConn = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function dbConnect() {
  if (chasedMongooseConn.conn) {
    console.log("Using existing database connection", inspect({
      dbName: chasedMongooseConn.conn?.connections[0].name,
      host: chasedMongooseConn.conn?.connections[0].host,
      port: chasedMongooseConn.conn?.connections[0].port,
      readyState: chasedMongooseConn.conn?.connections[0].readyState,
    }, { depth: 1 }));
    return chasedMongooseConn.conn;
  }

  chasedMongooseConn.promise =
    chasedMongooseConn.promise ||
    mongoose.connect(MONGO_URI as string, {
      dbName: "prop-fusion",
      bufferCommands: true,
      connectTimeoutMS: 30000,
    });
    console.log("Database connected:");
  chasedMongooseConn.conn = await chasedMongooseConn.promise;
  return chasedMongooseConn.conn;
}
