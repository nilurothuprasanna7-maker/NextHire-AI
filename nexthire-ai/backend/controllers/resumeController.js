const Resume = require("../models/Resume");

// Save Resume
const saveResume = async (req, res) => {
  try {
    const {
      userId,
      fullName,
      email,
      phone,
      college,
      degree,
      skills,
      education,
      experience,
      projects,
    } = req.body;

    const existingResume = await Resume.findOne({ userId });

    if (existingResume) {
      existingResume.fullName = fullName;
      existingResume.email = email;
      existingResume.phone = phone;
      existingResume.college = college;
      existingResume.degree = degree;
      existingResume.skills = skills;
      existingResume.education = education;
      existingResume.experience = experience;
      existingResume.projects = projects;

      await existingResume.save();

      return res.status(200).json({
        success: true,
        message: "Resume Updated Successfully",
        resume: existingResume,
      });
    }

    const resume = await Resume.create({
      userId,
      fullName,
      email,
      phone,
      college,
      degree,
      skills,
      education,
      experience,
      projects,
    });

    res.status(201).json({
      success: true,
      message: "Resume Saved Successfully",
      resume,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get Resume
const getResume = async (req, res) => {
  try {
    const { userId } = req.params;

    const resume = await Resume.findOne({ userId });

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume Not Found",
      });
    }

    res.json({
      success: true,
      resume,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  saveResume,
  getResume,
};