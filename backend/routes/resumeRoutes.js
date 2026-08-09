const express = require("express");
const router = express.Router();

const {
  saveResume,
  getResume,
} = require("../controllers/resumeController");

// Save or Update Resume
router.post("/save", saveResume);

// Get Resume by User ID
router.get("/:userId", getResume);

module.exports = router;