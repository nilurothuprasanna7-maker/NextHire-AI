import "./CertificationsForm.css";

function CertificationsForm({
  certifications,
  handleCertificationChange,
  addCertification,
}) {
  return (
    <div className="certifications-section">
      <h3>Certifications</h3>

      {certifications.map((certificate, index) => (
        <div className="certification-card" key={index}>
          <div className="input-group">
            <label>Certificate Name</label>

            <input
              type="text"
              placeholder="AWS Cloud Practitioner"
              value={certificate.name}
              onChange={(e) =>
                handleCertificationChange(
                  index,
                  "name",
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <label>Organization</label>

            <input
              type="text"
              placeholder="Amazon Web Services"
              value={certificate.organization}
              onChange={(e) =>
                handleCertificationChange(
                  index,
                  "organization",
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <label>Year</label>

            <input
              type="text"
              placeholder="2026"
              value={certificate.year}
              onChange={(e) =>
                handleCertificationChange(
                  index,
                  "year",
                  e.target.value
                )
              }
            />
          </div>

          <div className="input-group">
            <label>Certificate Link</label>

            <input
              type="text"
              placeholder="https://..."
              value={certificate.link}
              onChange={(e) =>
                handleCertificationChange(
                  index,
                  "link",
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
        onClick={addCertification}
      >
        + Add Certification
      </button>
    </div>
  );
}

export default CertificationsForm;