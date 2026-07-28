import { createInterviewQuestions } from "../services/interviewService.js";

export const generateInterviewQuestions = async (req, res) => {
  try {
    const { resumeData, jobDescription } = req.body;

    if (!resumeData || !jobDescription) {
      return res.status(400).json({
        message: "Resume and Job Description are required.",
      });
    }

    const result = await createInterviewQuestions(
      resumeData,
      jobDescription
    );

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
};