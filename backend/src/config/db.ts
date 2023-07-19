import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string;
    await mongoose.connect(uri);
    console.log("Connected to db");
  } catch (error) {
    console.log("Error connecting to: ", error);
  }
};

export default connectDB;
