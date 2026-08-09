const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeResume = async (resumeData) => {
  const prompt = `
You are an expert ATS Resume Analyzer.

Analyze this resume and return ONLY valid JSON.

Resume:
${JSON.stringify(resumeData, null, 2)}

Return this format:

{
  "atsScore": 85,
  "strengths": [
    "Strong React skills",
    "Good academic background"
  ],
  "improvements": [
    "Add certifications",
    "Improve professional summary",
    "Include internship experience"
  ],
  "summary": "A professional summary for this candidate."
}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

module.exports = {
  analyzeResume,
};