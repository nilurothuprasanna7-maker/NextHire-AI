import "./AchievementCard.css";

const achievements = [
  "🏆 Resume Completed",
  "⭐ ATS Score above 80",
  "💻 Solved 50 Coding Problems",
  "🧠 Completed Aptitude Test",
  "🎤 Mock Interview Completed",
];

function AchievementCard() {
  return (
    <div className="achievement-card">

      <h2>Achievements</h2>

      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>

    </div>
  );
}

export default AchievementCard;