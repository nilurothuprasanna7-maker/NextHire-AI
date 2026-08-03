import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaChartLine,
  FaCode,
  FaMicrophone,
} from "react-icons/fa";

import "./StatsCards.css";

const stats = [
  {
    title: "Resume Score",
    value: "92%",
    icon: <FaFileAlt />,
  },
  {
    title: "ATS Score",
    value: "88%",
    icon: <FaChartLine />,
  },
  {
    title: "Coding Progress",
    value: "67%",
    icon: <FaCode />,
  },
  {
    title: "Interview Ready",
    value: "74%",
    icon: <FaMicrophone />,
  },
];

function StatsCards() {
  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          className="stats-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
        >
          <div className="stats-icon">
            {item.icon}
          </div>

          <div>
            <h4>{item.title}</h4>
            <h2>{item.value}</h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default StatsCards;