import genAI from "../config/gemini.js";

export const analyzeResume = async (resumeData) => {
  const prompt = `
You are an expert ATS Resume Reviewer.

Analyze the following resume.

Return ONLY valid JSON in this format:

{
  "resumeScore": 0,
  "atsScore": 0,
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "missingKeywords": []
}

Resume:
${JSON.stringify(resumeData, null, 2)}
`;

  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
};