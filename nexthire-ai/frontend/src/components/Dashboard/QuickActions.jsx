import { Link } from "react-router-dom";
import "./QuickActions.css";

function QuickActions() {
  return (
    <div className="quick-actions">

      <h2>⚡ Quick Actions</h2>

      <div className="action-grid">

        <Link to="/resume">Resume</Link>

        <Link to="/ats">ATS</Link>

        <Link to="/coding">Coding</Link>

        <Link to="/interview">Interview</Link>

        <Link to="/aptitude">Aptitude</Link>

        <Link to="/jobs">Jobs</Link>

      </div>

    </div>
  );
}

export default QuickActions;