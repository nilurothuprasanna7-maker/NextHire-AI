import "./AchievementCard.css";

const achievements = [
  {
    title: "Resume Completed",
    icon: "🏆",
  },
  {
    title: "ATS Score Above 80%",
    icon: "⭐",
  },
  {
    title: "Solved 50 Coding Problems",
    icon: "💻",
  },
  {
    title: "Completed Aptitude Test",
    icon: "🧠",
  },
  {
    title: "Mock Interview Completed",
    icon: "🎤",
  },
];

function AchievementCard() {
  return (
    <div className="achievement-card">

      <h2>🏅 Achievements</h2>

      <div className="achievement-list">

        {achievements.map((item, index) => (
          <div
            className="achievement-item"
            key={index}
          >
            <span className="achievement-icon">
              {item.icon}
            </span>

            <span className="achievement-title">
              {item.title}
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default AchievementCard;