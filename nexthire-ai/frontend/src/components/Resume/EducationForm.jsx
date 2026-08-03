import "./EducationForm.css";

function EducationForm({
  education,
  handleEducationChange,
  addEducation,
}) {
  return (
    <div className="education-section">
      <h3>Education</h3>

      {education.map((item, index) => (
        <div className="education-card" key={index}>
          <div className="input-group">
            <label>Degree</label>

            <input
              type="text"
              value={item.degree}
              onChange={(e) =>
                handleEducationChange(
                  index,
                  "degree",
                  e.target.value
                )
              }
              placeholder="B.Tech"
            />
          </div>

          <div className="input-group">
            <label>College</label>

            <input
              type="text"
              value={item.college}
              onChange={(e) =>
                handleEducationChange(
                  index,
                  "college",
                  e.target.value
                )
              }
              placeholder="College Name"
            />
          </div>

          <div className="input-group">
            <label>Year</label>

            <input
              type="text"
              value={item.year}
              onChange={(e) =>
                handleEducationChange(
                  index,
                  "year",
                  e.target.value
                )
              }
              placeholder="2026"
            />
          </div>
        </div>
      ))}

      <button
        className="add-btn"
        onClick={addEducation}
      >
        + Add Education
      </button>
    </div>
  );
}

export default EducationForm;