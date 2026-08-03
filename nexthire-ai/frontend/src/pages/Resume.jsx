import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ResumeForm from "../components/Resume/ResumeForm";
import ResumePreview from "../components/Resume/ResumePreview";

import "./Resume.css";

function Resume() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    skills: "",
  });

  const [education, setEducation] = useState([
    {
      degree: "",
      college: "",
      year: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const [projects, setProjects] = useState([
    {
      name: "",
      description: "",
      tech: "",
      github: "",
      demo: "",
    },
  ]);

  // Education
  const handleEducationChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        college: "",
        year: "",
      },
    ]);
  };

  // Experience
  const handleExperienceChange = (index, field, value) => {
    const updated = [...experience];
    updated[index][field] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        company: "",
        role: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  // Projects
  const handleProjectChange = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      {
        name: "",
        description: "",
        tech: "",
        github: "",
        demo: "",
      },
    ]);
  };

  return (
    <DashboardLayout>
      <div className="resume-page">
        <ResumeForm
          formData={formData}
          setFormData={setFormData}
          education={education}
          handleEducationChange={handleEducationChange}
          addEducation={addEducation}
          experience={experience}
          handleExperienceChange={handleExperienceChange}
          addExperience={addExperience}
          projects={projects}
          handleProjectChange={handleProjectChange}
          addProject={addProject}
        />

        <ResumePreview
          formData={formData}
          education={education}
          experience={experience}
          projects={projects}
        />
      </div>
    </DashboardLayout>
  );
}

export default Resume;