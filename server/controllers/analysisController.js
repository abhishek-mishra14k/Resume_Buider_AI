import { analyzeResume } from "../services/geminiService.js";

export const analyzeResumeController = async (req, res) => {
  try {
    const response = await analyzeResume(req.body);

    console.log("Gemini Response:", response);

    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const analysis = JSON.parse(cleaned);

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("========== GEMINI ERROR ==========");
    console.error(error);
    console.error("==================================");

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};