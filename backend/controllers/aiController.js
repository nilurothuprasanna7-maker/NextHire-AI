const Resume = require("../models/Resume");
const { analyzeResume } = require("../services/geminiService");

const analyzeUserResume = async (req, res) => {
  try {
    const { userId } = req.params;

    const resume = await Resume.findOne({ userId });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    const analysis = await analyzeResume(resume);

    res.status(200).json({
      success: true,
      analysis: JSON.parse(analysis),
    });

  } catch (error) {
    console.error("AI Controller Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  analyzeUserResume,
};