import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

import "./LoginForm.css";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="login-card"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Welcome Back 👋</h1>

      <p>
        Continue your placement journey with NextHire AI
      </p>

      <form>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">

          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              type="button"
              className="eye-btn"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>

          </div>

        </div>

        <div className="login-options">

          <label>

            <input type="checkbox" />

            Remember me

          </label>

          <Link to="#">
            Forgot Password?
          </Link>

        </div>

        <button
          className="login-btn"
          type="submit"
        >
          Login
        </button>

      </form>

      <div className="divider">
        <span>OR</span>
      </div>

      <button className="google-btn">
        <FaGoogle />
        Continue with Google
      </button>

      <button className="github-btn">
        <FaGithub />
        Continue with GitHub
      </button>

      <div className="register-link">

        Don't have an account?

        <Link to="/register">
          Register
        </Link>

      </div>

    </motion.div>
  );
}

export default LoginForm;