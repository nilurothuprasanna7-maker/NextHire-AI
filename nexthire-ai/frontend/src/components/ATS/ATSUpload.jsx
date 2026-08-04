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

      <h2>ATS Resume Scanner</h2>

      <p>
        Upload your resume and check your ATS Score.
      </p>

      <label className="upload-box">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          hidden
        />

        <span>📄 Choose Resume</span>

      </label>

      {fileName && (
        <p className="file-name">
          {fileName}
        </p>
      )}

    </div>
  );
}

export default ATSUpload;