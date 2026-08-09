import "./ExperienceForm.css";

function ExperienceForm({
  experience,
  handleExperienceChange,
  addExperience,
}) {
  return (
    <div className="experience-section">
      <h3>Experience</h3>

      {experience.map((item, index) => (
        <div className="experience-card" key={index}>
          <div className="input-group">
            <label>Company</label>

            <input
              type="text"
              placeholder="Google"
              value={item.company}
              onChange={(e) =>
                handleExperienceChange(
                  index,
                  "company",
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <label>Job Title</label>

            <input
              type="text"
              placeholder="Frontend Developer"
              value={item.role}
              onChange={(e) =>
                handleExperienceChange(
                  index,
                  "role",
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <label>Start Date</label>

            <input
              type="text"
              placeholder="Jan 2025"
              value={item.startDate}
              onChange={(e) =>
                handleExperienceChange(
                  index,
                  "startDate",
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <label>End Date</label>

            <input
              type="text"
              placeholder="Present"
              value={item.endDate}
              onChange={(e) =>
                handleExperienceChange(
                  index,
                  "endDate",
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <label>Description</label>

            <textarea
              rows="4"
              placeholder="Describe your responsibilities..."
              value={item.description}
              onChange={(e) =>
                handleExperienceChange(
                  index,
                  "description",
                  e.target.value
                )
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="add-btn"
        onClick={addExperience}
      >
        + Add Experience
      </button>
    </div>
  );
}

export default ExperienceForm;