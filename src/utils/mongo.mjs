import mongoose from "mongoose";

const connectToDatabase = async (uri) => {
  try {
    await mongoose.connect(uri)
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};


export default connectToDatabase
