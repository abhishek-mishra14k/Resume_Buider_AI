import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  analyzeResume,
  analyzeUploadedResume,
} from "../controllers/analyzerController.js";

const router = express.Router();

// Upload Resume
router.post(
  "/upload",
  upload.single("resume"),
  analyzeUploadedResume
);

// Analyze Saved Resume
router.post("/:resumeId", analyzeResume);

export default router;