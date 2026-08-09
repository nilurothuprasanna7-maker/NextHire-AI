import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";

import "./LoginForm.css";

function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      // Save Token
      localStorage.setItem("token", res.data.token);

      // Save Logged-in User
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert(res.data.message);

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

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

      <form onSubmit={handleLogin}>

        <div className="input-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>

          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
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