import express from "express";
import multer from "multer";
import Application from "../models/Application.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("resume"), async (req, res) => {
  const app = new Application({
    ...req.body,
    resume: req.file.path,
  });

  await app.save();
  res.json({ message: "Application submitted" });
});

export default router;
