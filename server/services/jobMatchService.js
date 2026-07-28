import genAI from "../config/gemini.js";

const cleanJSON = (text) => {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};

// Saved Resume (MongoDB)
export const jobMatch = async (resumeData, jobDescription) => {
  const prompt = `
You are an expert ATS Resume Analyzer.

Compare the following resume with the job description.

Resume:
${JSON.stringify(resumeData, null, 2)}

Job Description:
${jobDescription}

Return ONLY valid JSON.

{
  "matchScore": 85,
  "matchingSkills": [],
  "missingSkills": [],
  "suggestions": []
}
`;

  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return JSON.parse(cleanJSON(response.text));
};

// Uploaded Resume (PDF/DOCX)
export const jobMatchUploadedResume = async (
  file,
  jobDescription
) => {
  const prompt = `
You are an ATS Resume Expert.

Read the uploaded resume carefully.

Compare it with this Job Description:

${jobDescription}

Return ONLY valid JSON.

{
  "matchScore": 85,
  "matchingSkills": [],
  "missingSkills": [],
  "suggestions": []
}
`;

  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: [
      {
        inlineData: {
          mimeType: file.mimetype,
          data: file.buffer.toString("base64"),
        },
      },
      {
        text: prompt,
      },
    ],
  });

  return JSON.parse(cleanJSON(response.text));
};