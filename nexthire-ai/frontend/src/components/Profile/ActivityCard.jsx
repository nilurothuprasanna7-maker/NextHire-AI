import "./ActivityCard.css";

const activities = [
  {
    title: "Resume Updated",
    time: "Today • 10:30 AM",
  },
  {
    title: "Completed Mock Interview",
    time: "Yesterday",
  },
  {
    title: "Solved Coding Problem",
    time: "Yesterday",
  },
  {
    title: "Finished Aptitude Test",
    time: "2 Days Ago",
  },
];

function ActivityCard() {
  return (
    <div className="activity-card">

      <h2>Recent Activity</h2>

      {activities.map((activity, index) => (
        <div
          className="activity-item"
          key={index}
        >
          <h3>{activity.title}</h3>

          <p>{activity.time}</p>
        </div>
      ))}

    </div>
  );
}

export default ActivityCard;