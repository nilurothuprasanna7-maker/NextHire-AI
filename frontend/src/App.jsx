import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import Resume from "./pages/Resume";
import ATS from "./pages/ATS";
import Coding from "./pages/Coding";
import Aptitude from "./pages/Aptitude";
import Interview from "./pages/Interview";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import "./App.css";

function App() {
  return (
    <Routes>

      {/* ========================= */}
      {/* PUBLIC PAGES */}
      {/* ========================= */}

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />


      {/* ========================= */}
      {/* DASHBOARD */}
      {/* ========================= */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />


      {/* ========================= */}
      {/* PLACEMENT FEATURES */}
      {/* ========================= */}

      <Route
        path="/resume"
        element={<Resume />}
      />

      <Route
        path="/ats"
        element={<ATS />}
      />

      <Route
        path="/coding"
        element={<Coding />}
      />

      <Route
        path="/aptitude"
        element={<Aptitude />}
      />

      <Route
        path="/interview"
        element={<Interview />}
      />

      <Route
        path="/jobs"
        element={<Jobs />}
      />


      {/* ========================= */}
      {/* USER */}
      {/* ========================= */}

      <Route
        path="/profile"
        element={<Profile />}
      />

      <Route
        path="/settings"
        element={<Settings />}
      />


      {/* ========================= */}
      {/* 404 PAGE */}
      {/* ========================= */}

      <Route
        path="*"
        element={
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#050816",
              color: "#ffffff",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <div>
              <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>
                404
              </h1>

              <h2>
                Page Not Found
              </h2>

              <p style={{ color: "#aeb7d0" }}>
                The page you're looking for doesn't exist.
              </p>
            </div>
          </div>
        }
      />

    </Routes>
  );
}

export default App;