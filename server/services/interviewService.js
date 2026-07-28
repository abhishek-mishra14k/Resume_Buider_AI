import genAI from "../config/gemini.js";

const cleanJSON = (text) => {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};

export const createInterviewQuestions = async (
  resumeData,
  jobDescription
) => {
  const prompt = `
You are a senior technical interviewer.

Using the candidate's resume and the job description, generate interview questions.

Resume:
${JSON.stringify(resumeData, null, 2)}

Job Description:
${jobDescription}

Generate:

- 5 Technical Questions
- 5 HR Questions
- 5 Project-Based Questions

Return ONLY valid JSON.

{
  "technicalQuestions": [],
  "hrQuestions": [],
  "projectQuestions": []
}
`;

  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return JSON.parse(cleanJSON(response.text));
};