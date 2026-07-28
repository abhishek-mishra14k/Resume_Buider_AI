import Resume from "../models/Resume.js";
import { analyzeResumeWithAI } from "../services/analyzerService.js";

import { createRequire } from "module";
import mammoth from "mammoth";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export const analyzeResume = async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await Resume.findById(resumeId);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found.",
      });
    }

    const analysis = await analyzeResumeWithAI(
      JSON.stringify(resume, null, 2)
    );

    resume.atsScore = analysis.score;
    resume.atsAnalysis = analysis;
    resume.lastAnalyzed = new Date();

    await resume.save();

    res.status(200).json({
      success: true,
      analysis,
    });

  } catch (error) {
    console.error("Analyze Resume Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze resume.",
      error: error.message,
    });
  }
};

export const analyzeUploadedResume = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a resume.",
      });
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "Only PDF, DOC and DOCX files are allowed.",
      });
    }

    let resumeText = "";

    switch (req.file.mimetype) {

      case "application/pdf": {
        const pdf = await pdfParse(req.file.buffer);
        resumeText = pdf.text;
        break;
      }

      case "application/msword":
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        const result = await mammoth.extractRawText({
          buffer: req.file.buffer,
        });

        resumeText = result.value;
        break;
      }

      default:
        break;
    }

    if (!resumeText || !resumeText.trim()) {
      return res.status(400).json({
        success: false,
        message: "Unable to extract text from the uploaded resume.",
      });
    }

    const analysis = await analyzeResumeWithAI(resumeText);

    res.status(200).json({
      success: true,
      analysis,
    });

  } catch (error) {
    console.error("Upload Resume Analysis Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to analyze uploaded resume.",
      error: error.message,
    });
  }
};