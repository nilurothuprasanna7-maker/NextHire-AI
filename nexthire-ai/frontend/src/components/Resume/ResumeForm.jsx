import PersonalInfo from "./PersonalInfo";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";

import "./ResumeForm.css";

function ResumeForm({
  formData,
  setFormData,
  education,
  handleEducationChange,
  addEducation,
  experience,
  handleExperienceChange,
  addExperience,
  projects,
  handleProjectChange,
  addProject,
}) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="resume-form">
      <h2>Resume Builder</h2>

      <PersonalInfo
        formData={formData}
        handleChange={handleChange}
      />

      <div className="input-group">
        <label>College</label>

        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
          placeholder="Enter your college"
        />
      </div>

      <div className="input-group">
        <label>Degree</label>

        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          placeholder="Enter your degree"
        />
      </div>

      <div className="input-group">
        <label>Skills</label>

        <textarea
          rows="4"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          placeholder="React, Java, Python..."
        />
      </div>

      <EducationForm
        education={education}
        handleEducationChange={handleEducationChange}
        addEducation={addEducation}
      />

      <ExperienceForm
        experience={experience}
        handleExperienceChange={handleExperienceChange}
        addExperience={addExperience}
      />

      <ProjectsForm
        projects={projects}
        handleProjectChange={handleProjectChange}
        addProject={addProject}
      />

      <button className="save-btn">
        Save Resume
      </button>
    </div>
  );
}

export default ResumeForm;