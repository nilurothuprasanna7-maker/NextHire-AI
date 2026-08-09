import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  return (
    <section className="hero">

      <div className="hero-bg"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="tag">
            🚀 AI Powered Placement Platform
          </span>

          <h1>
            Ace Your
            <span> Dream Job </span>
            with AI
          </h1>

          <p>
            Build an ATS-friendly resume, practice coding,
            solve aptitude questions, prepare for AI mock
            interviews, improve your coding skills and
            land your dream job—all in one platform.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={handleGetStarted}
            >
              Get Started
              <FaArrowRight />
            </button>

            <button className="secondary-btn">
              <FaPlayCircle />
              Watch Demo
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <h2>50K+</h2>
              <span>Students</span>
            </div>

            <div>
              <h2>200+</h2>
              <span>Companies</span>
            </div>

            <div>
              <h2>98%</h2>
              <span>Success Rate</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <img
            src="/robot.png"
            alt="NextHire AI Mentor"
            className="mentor-image"
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;