import "./ResumeProgress.css";

function ResumeProgress() {
  return (
    <div className="resume-progress-card">
      <h2>Resume Progress</h2>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <h3>80% Completed</h3>

      <div className="progress-info">
        <p>✅ Personal Details</p>
        <p>✅ Education</p>
        <p>✅ Experience</p>
        <p>✅ Projects</p>
        <p>⬜ Certifications</p>
        <p>⬜ Achievements</p>
      </div>
    </div>
  );
}

export default ResumeProgress;