import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI);
    if (connection.readyState === 1) {
      console.log("Connected to the database!");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
