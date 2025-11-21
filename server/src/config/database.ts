import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL || process.env.MONGODB_URI;

    if (!mongoUrl) {
      throw new Error("MONGO_URL or MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(mongoUrl);

    console.log("✅ Connected to MongoDB");

    // Manejar eventos de conexión
    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️  MongoDB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("✅ MongoDB reconnected");
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
