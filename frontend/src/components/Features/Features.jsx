import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaCode,
  FaMicrophone,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

import "./Features.css";

const features = [
  {
    icon: <FaRobot />,
    title: "AI Resume Builder",
    desc: "Create professional ATS-friendly resumes in minutes with AI."
  },
  {
    icon: <FaFileAlt />,
    title: "ATS Scanner",
    desc: "Analyze your resume and improve your ATS score."
  },
  {
    icon: <FaCode />,
    title: "Coding Practice",
    desc: "Solve coding challenges from beginner to advanced."
  },
  {
    icon: <FaMicrophone />,
    title: "AI Mock Interview",
    desc: "Practice HR & technical interviews with AI."
  },
  {
    icon: <FaBrain />,
    title: "Aptitude Tests",
    desc: "Improve logical reasoning and quantitative skills."
  },
  {
    icon: <FaChartLine />,
    title: "Career Dashboard",
    desc: "Track your preparation progress with analytics."
  }
];

function Features() {
  return (
    <section className="features" id="features">

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose NextHire AI?</h2>

        <p>
          Everything you need to crack placements in one intelligent platform.
        </p>
      </motion.div>

      <div className="features-grid">

        {features.map((item, index) => (

          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03
            }}
          >

            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Features;