import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopollogy: true
    // });
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Successfully Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Connection Error: ${error.message}`);
    process.exit(1);
  }
}