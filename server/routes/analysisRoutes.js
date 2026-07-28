import express from "express";
import { analyzeResumeController } from "../controllers/analysisController.js";

const router = express.Router();

router.post("/", analyzeResumeController);

export default router;