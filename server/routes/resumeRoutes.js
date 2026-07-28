import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
    createResume,
    getUserResumes,
    getResumeById,
    updateResume,
    deleteResume,
} from "../controllers/resumeController.js";
const router = express.Router();

// Create Resume
router.post("/", protect, createResume);

// Get All Resumes
router.get("/", protect, getUserResumes);

// Get Resume by ID
router.get("/:id", protect, getResumeById);

// Update Resume
router.put("/:id", protect, updateResume);

// Delete Resume
router.delete("/:id", protect, deleteResume);

export default router;
