const express = require("express");

const router = express.Router();

const {
  analyzeUserResume,
} = require("../controllers/aiController");

router.get("/analyze/:userId", analyzeUserResume);

module.exports = router;