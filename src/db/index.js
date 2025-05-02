import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // Optional, if you're still using it

const connectDB = async () => {
  try {
    // Use MONGODB_URI directly, no need to append DB_NAME
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: DB_NAME  // Explicitly set the database name if needed
    });
    console.log(`MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
