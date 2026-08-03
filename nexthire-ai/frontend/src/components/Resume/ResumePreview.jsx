import "./ResumePreview.css";

function ResumePreview({
  formData,
  education,
  experience,
  projects,
}) {
  return (
    <div className="resume-preview">
      <div id="resume-paper" className="resume-paper">

        {/* Header */}
        <div className="resume-header">
          <h1>{formData.fullName || "Your Name"}</h1>

          <p>{formData.email || "your@email.com"}</p>

          <p>{formData.phone || "+91 XXXXX XXXXX"}</p>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h2>Education</h2>

          {education.map((item, index) => (
            <div key={index} className="resume-item">
              <h3>{item.degree || "Degree"}</h3>

              <p>{item.college || "College Name"}</p>

              <span>{item.year || "Year"}</span>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="resume-section">
          <h2>Experience</h2>

          {experience.map((item, index) => (
            <div key={index} className="resume-item">
              <h3>{item.role || "Job Title"}</h3>

              <p>
                <strong>{item.company || "Company Name"}</strong>
              </p>

              <span>
                {item.startDate || "Start Date"} -{" "}
                {item.endDate || "Present"}
              </span>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="resume-section">
          <h2>Projects</h2>

          {projects.map((project, index) => (
            <div key={index} className="resume-item">
              <h3>{project.name || "Project Name"}</h3>

              <p>{project.description}</p>

              <p>
                <strong>Technologies:</strong>{" "}
                {project.tech || "-"}
              </p>

              {project.github && (
                <p>
                  <strong>GitHub:</strong> {project.github}
                </p>
              )}

              {project.demo && (
                <p>
                  <strong>Live Demo:</strong> {project.demo}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="resume-section">
          <h2>Skills</h2>

          <div className="skills-container">
            {(formData.skills || "")
              .split(",")
              .filter((skill) => skill.trim() !== "")
              .map((skill, index) => (
                <span key={index} className="skill-chip">
                  {skill.trim()}
                </span>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResumePreview;