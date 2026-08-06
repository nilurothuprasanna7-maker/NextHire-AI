import "./ResultCard.css";

function ResultCard({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-card">

      <h1>Test Completed 🎉</h1>

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
          <p>👍 Good job! Practice a little more.</p>
        )}

        {percentage < 60 && (
          <p>📚 Keep practicing. You can improve!</p>
        )}

      </div>

      <button onClick={onRestart}>
        Take Another Test
      </button>

    </div>
  );
}

export default ResultCard;