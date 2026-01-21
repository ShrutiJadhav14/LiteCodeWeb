import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  department: String,
  location: String,
  type: String,
  description: String,
  skills: [String],
  status: { type: String, default: "Open" },
}, { timestamps: true });

export default mongoose.model("Job", JobSchema);
