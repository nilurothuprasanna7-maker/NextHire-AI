import {
  FaBuilding,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

import "./JobCard.css";

function JobCard({
  company,
  role,
  location,
  packageOffered,
}) {
  return (
    <div className="job-card">

      <div className="job-header">
        <FaBuilding className="company-icon" />

        <div>
          <h2>{company}</h2>
          <h3>{role}</h3>
        </div>
      </div>

      <div className="job-info">
        <p>
          <FaMapMarkerAlt />
          {location}
        </p>

        <p>
          <FaMoneyBillWave />
          {packageOffered}
        </p>

        <p>
          <FaBriefcase />
          Full Time
        </p>
      </div>

      <button className="apply-btn">
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;