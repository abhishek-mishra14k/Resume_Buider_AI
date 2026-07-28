import {
  jobMatch,
  jobMatchUploadedResume,
} from "../services/jobMatchService.js";

export const analyzeJobMatch = async (req, res) => {
  try {
    const { resumeData, jobDescription } = req.body;

    if (!resumeData || !jobDescription) {
      return res.status(400).json({
        success: false,
        message: "Resume data and Job Description are required.",
      });
    }

    const result = await jobMatch(
      resumeData,
      jobDescription
    );

    res.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Job Match Failed",
    });
  }
};

export const analyzeUploadedResume = async (req, res) => {
  try {
    const { jobDescription } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required.",
      });
    }

    const result =
      await jobMatchUploadedResume(
        req.file,
        jobDescription
      );

    res.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};