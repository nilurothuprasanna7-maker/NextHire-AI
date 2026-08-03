import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-bg"></div>

      <div className="hero-container">

        {/* LEFT */}

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
            crack aptitude tests, prepare for interviews,
            and land your dream job—all in one platform.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
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
              <span>Success</span>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="hero-card card1">
            <h3>ATS Score</h3>
            <h1>96%</h1>
          </div>

          <div className="hero-card card2">
            <h3>Interview Ready</h3>
            <p>AI Mock Interview</p>
          </div>

          <div className="hero-card card3">
            <h3>Companies</h3>
            <p>Google • Amazon • Microsoft</p>
          </div>

          <div className="circle"></div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;