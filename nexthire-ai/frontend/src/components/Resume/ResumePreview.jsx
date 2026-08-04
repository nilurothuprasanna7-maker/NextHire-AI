import "./ResumePreview.css";

function ResumePreview({
  formData,
  education,
  experience,
  projects,
  photo,
}) {
  return (
    <div className="resume-preview" id="resume-preview">

      <div className="resume-header">

        {photo && (
          <img
            src={photo}
            alt="Profile"
            className="resume-photo"
          />
        )}

        <h1>{formData.fullName || "Your Name"}</h1>

        <p>{formData.email}</p>

        <p>{formData.phone}</p>

      </div>

      <hr />

      <section>

        <h2>Education</h2>

        {education.map((item, index) => (
          <div key={index} className="resume-item">

            <h3>{item.degree}</h3>

            <p>{item.college}</p>

            <span>{item.year}</span>

          </div>
        ))}

      </section>

      <section>

        <h2>Experience</h2>

        {experience.map((item, index) => (
          <div key={index} className="resume-item">

            <h3>{item.role}</h3>

            <p>{item.company}</p>

            <span>
              {item.startDate} - {item.endDate}
            </span>

            <p>{item.description}</p>

          </div>
        ))}

      </section>

      <section>

        <h2>Projects</h2>

        {projects.map((item, index) => (
          <div key={index} className="resume-item">

            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <p>
              <strong>Tech:</strong> {item.tech}
            </p>

            <p>{item.github}</p>

            <p>{item.demo}</p>

          </div>
        ))}

      </section>

      <section>

        <h2>Skills</h2>

        <p>{formData.skills}</p>

      </section>

    </div>
  );
}

export default ResumePreview;