import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>NextHire AI</h2>

          <p>
            Your AI Career Companion. Build ATS-friendly resumes,
            practice coding, prepare for interviews, and land
            your dream job.
          </p>
        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#stats">Statistics</a>
          <a href="#workflow">Workflow</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 support@nexthireai.com</p>

          <p>📍 Hyderabad, India</p>

          <div className="socials">

            <FaGithub />

            <FaLinkedin />

            <FaInstagram />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 NextHire AI. All Rights Reserved.
        </p>

        <button
          className="top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}

export default Footer;