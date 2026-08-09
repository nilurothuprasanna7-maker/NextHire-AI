import { useNavigate } from "react-router-dom";
import "./InterviewResult.css";

function InterviewResult() {
  const navigate = useNavigate();

  return (
    <div className="interview-result">

      <h1>🎉 Interview Completed Successfully</h1>

      <div className="overall-score">
        <h2>Overall Score</h2>
        <span>84%</span>
      </div>

      <div className="result-grid">

        <div className="result-card">
          <h3>Communication</h3>
          <p>⭐⭐⭐⭐☆</p>
        </div>

        <div className="result-card">
          <h3>Confidence</h3>
          <p>⭐⭐⭐⭐☆</p>
        </div>

        <div className="result-card">
          <h3>Technical Skills</h3>
          <p>⭐⭐⭐☆☆</p>
        </div>

        <div className="result-card">
          <h3>Grammar</h3>
          <p>⭐⭐⭐⭐☆</p>
        </div>

      </div>

      <button
        className="dashboard-btn"
        onClick={() => navigate("/dashboard")}
      >
        Back to Dashboard
      </button>

    </div>
  );
}

export default InterviewResult;