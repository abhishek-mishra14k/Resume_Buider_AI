import { improveResume } from "../services/improveResumeService.js";

export const improveResumeController = async (req, res) => {
  try {
    const { text, type } = req.body;

    const improved = await improveResume(text, type);

    res.json({
      success: true,
      improved,
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to improve text",
    });
  }
};