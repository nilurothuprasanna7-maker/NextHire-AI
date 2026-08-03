import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "active" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">

        <Link to="/" className="logo">
          <span className="logo-ai">NextHire</span>
          <span className="logo-dot">AI</span>
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>
          </li>

          <li>
            <a href="#stats" onClick={() => setMenuOpen(false)}>
              Statistics
            </a>
          </li>

          <li>
            <a href="#workflow" onClick={() => setMenuOpen(false)}>
              Workflow
            </a>
          </li>

          <li>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              className="start-btn"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </Link>
          </li>
        </ul>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;