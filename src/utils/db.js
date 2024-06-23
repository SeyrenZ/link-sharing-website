import mongoose from "mongoose";

const connect = async () => {
  // Check if we're already connected or connecting (readyState 1 or 2)
  if (
    mongoose.connection.readyState === 1 ||
    mongoose.connection.readyState === 2
  ) {
    console.log("Already connected or connecting to the database.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    throw new Error("Database connection failed");
  }
};

export default connect;
