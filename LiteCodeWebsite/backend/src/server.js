import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import jobRoutes from "./routes/jobs.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import applyRoutes from "./routes/apply.routes.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/jobs", jobRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/apply", applyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Backend running on port ${PORT}`)
);
