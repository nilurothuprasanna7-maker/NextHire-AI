import "./ProjectsForm.css";

function ProjectsForm({
  projects,
  handleProjectChange,
  addProject,
}) {
  return (
    <div className="projects-section">
      <h3>Projects</h3>

      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="input-group">
            <label>Project Name</label>
            <input
              type="text"
              placeholder="NextHire AI"
              value={project.name}
              onChange={(e) =>
                handleProjectChange(index, "name", e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea
              rows="4"
              placeholder="Describe your project..."
              value={project.description}
              onChange={(e) =>
                handleProjectChange(index, "description", e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <label>Technologies</label>
            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              value={project.tech}
              onChange={(e) =>
                handleProjectChange(index, "tech", e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <label>GitHub Link</label>
            <input
              type="text"
              placeholder="https://github.com/..."
              value={project.github}
              onChange={(e) =>
                handleProjectChange(index, "github", e.target.value)
              }
            />
          </div>

          <div className="input-group">
            <label>Live Demo Link</label>
            <input
              type="text"
              placeholder="https://..."
              value={project.demo}
              onChange={(e) =>
                handleProjectChange(index, "demo", e.target.value)
              }
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        className="add-btn"
        onClick={addProject}
      >
        + Add Project
      </button>
    </div>
  );
}

export default ProjectsForm;