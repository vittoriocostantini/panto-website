import "dotenv/config";
import express from "express";
import { connectDB } from "./config/index.js";
import morgan from "morgan";
import { productRoutes, orderRoutes } from "./routes/index.js";
import cors from "cors";
// Connect to MongoDB
connectDB();
const app = express();
const port = process.env.PORT || 5000;
// Middleware to parse JSON bodies
app.use(express.json());
app.use(morgan("dev"));

const allowedOrigins = [
  "http://localhost:5000",
  "http://localhost:3001",
  "http://localhost:5173",
  "http://localhost:3000",
];

const corsOptions: cors.CorsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
