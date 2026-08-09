import { motion } from "framer-motion";
import {
  FaFileUpload,
  FaSearch,
  FaBrain,
  FaCode,
  FaMicrophone,
  FaBriefcase,
} from "react-icons/fa";

import "./Workflow.css";

const steps = [
  {
    icon: <FaFileUpload />,
    title: "Upload Resume",
    desc: "Upload your existing resume or create a new one with AI."
  },
  {
    icon: <FaSearch />,
    title: "ATS Analysis",
    desc: "Get instant ATS score and improvement suggestions."
  },
  {
    icon: <FaBrain />,
    title: "Practice Aptitude",
    desc: "Solve aptitude and reasoning questions."
  },
  {
    icon: <FaCode />,
    title: "Coding Challenges",
    desc: "Practice coding questions from top companies."
  },
  {
    icon: <FaMicrophone />,
    title: "AI Mock Interview",
    desc: "Improve confidence with AI-powered interviews."
  },
  {
    icon: <FaBriefcase />,
    title: "Get Hired",
    desc: "Apply confidently with improved skills and resume."
  },
];

function Workflow() {
  return (
    <section className="workflow" id="workflow">

      <motion.div
        className="workflow-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Your Journey with NextHire AI</h2>
        <p>
          From resume creation to landing your dream job — everything in one platform.
        </p>
      </motion.div>

      <div className="workflow-grid">

        {steps.map((step, index) => (
          <motion.div
            className="workflow-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="workflow-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Workflow;