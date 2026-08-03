import { motion } from "framer-motion";
import "./ProgressWidgets.css";

const progressData = [
  {
    title: "Resume Completion",
    value: 92,
    color: "#6d5dfc",
  },
  {
    title: "Coding Practice",
    value: 67,
    color: "#00d4ff",
  },
  {
    title: "Aptitude Progress",
    value: 74,
    color: "#14c38e",
  },
  {
    title: "Interview Readiness",
    value: 58,
    color: "#ff9f43",
  },
];

function ProgressWidgets() {
  return (
    <div className="progress-grid">
      {progressData.map((item, index) => (
        <motion.div
          key={index}
          className="progress-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
        >
          <div className="progress-header">
            <h3>{item.title}</h3>
            <span>{item.value}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${item.value}%`,
                background: item.color,
              }}
            ></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProgressWidgets;