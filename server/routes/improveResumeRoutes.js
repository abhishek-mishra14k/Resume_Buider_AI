import express from "express";
import { improveResumeController } from "../controllers/improveResumeController.js";

const router = express.Router();

router.post("/", improveResumeController);

export default router;