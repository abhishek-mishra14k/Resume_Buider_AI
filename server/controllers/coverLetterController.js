import { createCoverLetter } from "../services/coverLetterService.js";

export const generateCoverLetter = async (req, res) => {
  try {
    const { resumeData, jobDescription } = req.body;

    if (!resumeData || !jobDescription) {
      return res.status(400).json({
        message: "Resume and Job Description are required.",
      });
    }

    const coverLetter = await createCoverLetter(
      resumeData,
      jobDescription
    );

    res.json({
      success: true,
      coverLetter,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};