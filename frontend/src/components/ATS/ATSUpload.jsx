import "./ATSUpload.css";
import { useState } from "react";

function ATSUpload({ setResumeFile }) {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFileName(file.name);
      setResumeFile(file);
    }
  };

  return (
    <div className="ats-upload">

      <h1>🤖 AI ATS Resume Scanner</h1>

      <p>
        Upload your resume to receive an AI-powered ATS analysis,
        resume score, strengths, weaknesses, and improvement suggestions.
      </p>

      <label className="upload-box">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          hidden
        />

        <div className="upload-content">
          <h2>📄 Upload Resume</h2>
          <span>Click here to choose a PDF or DOCX file</span>
        </div>

      </label>

      {fileName && (
        <div className="selected-file">
          ✅ {fileName}
        </div>
      )}

    </div>
  );
}

export default ATSUpload;