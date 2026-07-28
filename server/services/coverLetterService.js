import genAI from "../config/gemini.js";

export const createCoverLetter = async (
  resumeData,
  jobDescription
) => {
  const prompt = `
You are a professional HR expert.

Using the resume below and the given job description,
write a professional one-page cover letter.

Resume:
${JSON.stringify(resumeData, null, 2)}

Job Description:
${jobDescription}

Rules:

- Professional tone
- Mention relevant skills
- Mention projects if relevant
- Mention education
- End with a thank-you paragraph
- Do NOT use placeholders
- Return ONLY the cover letter text.
`;

  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
};