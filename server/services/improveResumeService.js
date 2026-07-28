import genAI from "../config/gemini.js";

export const improveResume = async (text, type) => {
  let prompt = "";

  if (type === "Technical Skills") {
    prompt = `
You are an ATS resume expert.

The user currently has these technical skills:

${text}

Suggest additional relevant technical skills.

Rules:
- Return ONLY a comma-separated list of skills.
- Do NOT use numbering or bullet points.
- Do NOT include explanations.
- Remove duplicate skills.
- Include modern technologies if appropriate.
`;
  } else {
    prompt = `
You are an expert resume writer.

Improve the following ${type}.

Rules:
- Keep it ATS friendly.
- Use professional language.
- Use strong action verbs.
- Keep it concise.
- Return ONLY the improved text.

Text:

${text}
`;
  }

  const response = await genAI.models.generateContent({
    model: "gemini-3.6-flash",
    contents: prompt,
  });

  return response.text;
};