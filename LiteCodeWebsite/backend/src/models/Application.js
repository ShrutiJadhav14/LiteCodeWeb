import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  name: String,
  email: String,
  phone: String,
  resume: String,
}, { timestamps: true });

export default mongoose.model("Application", ApplicationSchema);
