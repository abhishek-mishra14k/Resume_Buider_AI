import genAI from "../config/gemini.js";

const cleanJSON = (text) =>
  text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

export const analyzeResumeWithAI = async (resume) => {

  const prompt = `
You are an expert ATS (Applicant Tracking System) Resume Reviewer.

Analyze the following resume and provide a realistic ATS evaluation.

Resume:

${resume}

Return ONLY valid JSON.

{
  "score":84,

  "rating":"Good",

  "sectionScores":{
      "contact":10,
      "education":9,
      "skills":8,
      "projects":9,
      "experience":7
  },

  "keywordMatch":[
      "React",
      "Node.js",
      "MongoDB",
      "Express"
  ],

  "missingKeywords":[
      "Docker",
      "AWS",
      "CI/CD"
  ],

  "strengths":[
      "Strong MERN stack",
      "Good Projects"
  ],

  "suggestions":[
      "Add measurable achievements",
      "Improve summary"
  ]
}
`;

  const response =
    await genAI.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

  return JSON.parse(cleanJSON(response.text));
};