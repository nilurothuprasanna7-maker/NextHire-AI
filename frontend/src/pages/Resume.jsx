import { useState, useEffect } from "react";

import DashboardLayout from "../layouts/DashboardLayout";
import ResumeForm from "../components/Resume/ResumeForm";
import ResumePreview from "../components/Resume/ResumePreview";

import { getResume } from "../api/resumeApi";

import "./Resume.css";

function Resume() {
  const [photo, setPhoto] = useState(null);

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

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) return;

        const payload = JSON.parse(atob(token.split(".")[1]));
        const userId = payload.id;

        const data = await getResume(userId);

        if (!data.success || !data.resume) return;

        const resume = data.resume;

        setFormData({
          fullName: resume.fullName || "",
          email: resume.email || "",
          phone: resume.phone || "",
          college: resume.college || "",
          degree: resume.degree || "",
          skills: resume.skills || "",
        });

        setEducation(
          resume.education && resume.education.length
            ? resume.education
            : [
                {
                  degree: "",
                  college: "",
                  year: "",
                },
              ]
        );

        setExperience(
          resume.experience && resume.experience.length
            ? resume.experience
            : [
                {
                  company: "",
                  role: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                },
              ]
        );

        setProjects(
          resume.projects && resume.projects.length
            ? resume.projects
            : [
                {
                  name: "",
                  description: "",
                  tech: "",
                  github: "",
                  demo: "",
                },
              ]
        );

      } catch (error) {
        console.error("Load Resume Error:", error);
      }
    };

    fetchResume();
  }, []);

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
          photo={photo}
          setPhoto={setPhoto}
        />

        <ResumePreview
          formData={formData}
          education={education}
          experience={experience}
          projects={projects}
          photo={photo}
        />

      </div>
    </DashboardLayout>
  );
}

export default Resume;