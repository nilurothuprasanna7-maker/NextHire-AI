import "./ResumeProgress.css";

function ResumeProgress() {
  return (
    <div className="resume-progress">

      <h2>📄 Resume Progress</h2>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>

      <h3>80% Completed</h3>

      <div className="progress-info">

        <div className="progress-item completed">
          ✅ Personal Details
        </div>

        <div className="progress-item completed">
          ✅ Education
        </div>

        <div className="progress-item completed">
          ✅ Experience
        </div>

        <div className="progress-item completed">
          ✅ Projects
        </div>

        <div className="progress-item pending">
          ⬜ Certifications
        </div>

        <div className="progress-item pending">
          ⬜ Achievements
        </div>

      </div>

    </div>
  );
}

export default ResumeProgress;