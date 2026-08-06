import "./DailyGoals.css";

const goals = [
  { task: "Improve Resume Score", done: true },
  { task: "Solve 2 Coding Problems", done: false },
  { task: "Practice Aptitude", done: false },
  { task: "Complete Mock Interview", done: false },
];

function DailyGoals() {
  return (
    <div className="daily-goals">
      <h2>🎯 Today's Goals</h2>

      {goals.map((goal, index) => (
        <div className="goal-item" key={index}>
          <input type="checkbox" checked={goal.done} readOnly />
          <span>{goal.task}</span>
        </div>
      ))}
    </div>
  );
}

export default DailyGoals;