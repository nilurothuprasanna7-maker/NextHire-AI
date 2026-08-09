import { useNavigate } from "react-router-dom";
import "./ResultCard.css";

function ResultCard({ score, total, onRestart }) {
  const navigate = useNavigate();

  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-card-container">

      <h1>🎉 Aptitude Test Completed</h1>

      <div className="score-circle">
        {percentage}%
      </div>

      <h2>
        Score : {score} / {total}
      </h2>

      <div className="feedback">

        {percentage >= 80 && (
          <p>🌟 Excellent! You are placement ready.</p>
        )}

        {percentage >= 60 && percentage < 80 && (
          <p>👍 Good Job! Keep practicing to improve.</p>
        )}

        {percentage < 60 && (
          <p>📚 Practice more aptitude questions.</p>
        )}

      </div>

      <div className="result-buttons">

        <button
          className="restart-btn"
          onClick={onRestart}
        >
          Take Another Test
        </button>

        <button
          className="dashboard-btn"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>

    </div>
  );
}

export default ResultCard;