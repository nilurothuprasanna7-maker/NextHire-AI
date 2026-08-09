import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";

import PersonalInfo from "./PersonalInfo";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import PhotoUpload from "./PhotoUpload";

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
  photo,
  setPhoto,
}) {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Resume to MongoDB
  const saveResume = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        return;
      }

      const payload = JSON.parse(atob(token.split(".")[1]));
      const userId = payload.id;

      const response = await axios.post(
        "http://localhost:5000/api/resume/save",
        {
          userId,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          degree: formData.degree,
          skills: formData.skills,
          education,
          experience,
          projects,
        }
      );

      alert(response.data.message);

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to Save Resume"
      );
    }
  };

  // Download Resume PDF
  const downloadResume = async () => {
    const resume = document.getElementById("resume-preview");

    if (!resume) return;

    const canvas = await html2canvas(resume, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );

    pdf.save("NextHireAI_Resume.pdf");
  };

  return (
    <div className="resume-form">

      <h2>AI Resume Builder</h2>

      <PhotoUpload
        photo={photo}
        setPhoto={setPhoto}
      />

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
          placeholder="React, Java, Python, SQL..."
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

      <div className="resume-buttons">

        <button
          className="save-btn"
          onClick={saveResume}
        >
          Save Resume
        </button>

        <button
          className="download-btn"
          onClick={downloadResume}
        >
          Download PDF
        </button>

      </div>

    </div>
  );
}

export default ResumeForm;