import express from "express";
import Job from "../models/job.js";
import Application from "../models/Application.js";

const router = express.Router();

// Add Job
router.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// View Applications
router.get("/applications", async (req, res) => {
  const apps = await Application.find().populate("jobId");
  res.json(apps);
});

export default router;
