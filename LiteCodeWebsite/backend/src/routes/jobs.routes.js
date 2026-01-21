import express from "express";
import Job from "../models/job.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const jobs = await Job.find({ status: "Open" });
  res.json(jobs);
});

export default router;
