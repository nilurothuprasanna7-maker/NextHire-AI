import { useState } from "react";
import "./InterviewStart.css";

function InterviewStart({ onStart }) {
  const [role, setRole] = useState("Software Engineer");

  return (
    <div className="interview-start">

      <h1>AI Mock Interview</h1>

      <p>Select your preferred job role.</p>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option>Software Engineer</option>
        <option>Frontend Developer</option>
        <option>Java Developer</option>
        <option>Python Developer</option>
        <option>Full Stack Developer</option>
      </select>

      <button onClick={() => onStart(role)}>
        Start Interview
      </button>

    </div>
  );
}

export default InterviewStart;