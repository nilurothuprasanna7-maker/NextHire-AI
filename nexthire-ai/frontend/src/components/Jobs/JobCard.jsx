import "./JobCard.css";

function JobCard({
  company,
  role,
  location,
  packageOffered,
}) {
  return (
    <div className="job-card">

      <h2>{company}</h2>

      <h3>{role}</h3>

      <p>📍 {location}</p>

      <p>💰 {packageOffered}</p>

      <button>View Details</button>

    </div>
  );
}

export default JobCard;