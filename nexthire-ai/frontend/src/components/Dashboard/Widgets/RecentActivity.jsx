import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaCode,
  FaBrain,
  FaMicrophone,
  FaChartLine,
} from "react-icons/fa";

import "./RecentActivity.css";

const activities = [
  {
    icon: <FaFileAlt />,
    title: "Resume Updated",
    time: "Today • 10:30 AM",
  },
  {
    icon: <FaCode />,
    title: "Completed Coding Challenge",
    time: "Yesterday • 5:20 PM",
  },
  {
    icon: <FaBrain />,
    title: "Finished Aptitude Test",
    time: "Yesterday • 2:15 PM",
  },
  {
    icon: <FaMicrophone />,
    title: "Mock Interview Completed",
    time: "2 Days Ago",
  },
  {
    icon: <FaChartLine />,
    title: "ATS Score Improved",
    time: "3 Days Ago",
  },
];

function RecentActivity() {
  return (
    <motion.div
      className="activity-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Recent Activity</h2>

      <div className="activity-list">
        {activities.map((item, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-icon">
              {item.icon}
            </div>

            <div className="activity-info">
              <h4>{item.title}</h4>
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default RecentActivity;