import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  analyzeJobMatch,
  analyzeUploadedResume,
} from "../controllers/jobMatchController.js";

const router = express.Router();

router.post("/", analyzeJobMatch);

router.post(
  "/upload",
  upload.single("resume"),
  analyzeUploadedResume
);

export default router;