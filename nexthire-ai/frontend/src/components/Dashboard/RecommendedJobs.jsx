import "./RecommendedJobs.css";

const jobs = [
  {
    company: "Amazon",
    role: "SDE Intern",
    package: "₹12 LPA",
  },
  {
    company: "Microsoft",
    role: "Software Engineer",
    package: "₹18 LPA",
  },
  {
    company: "Google",
    role: "Associate Engineer",
    package: "₹24 LPA",
  },
];

function RecommendedJobs() {
  return (
    <div className="recommended-jobs">

      <h2>💼 Recommended Jobs</h2>

      {jobs.map((job, index) => (
        <div className="job-box" key={index}>

          <h3>{job.company}</h3>

          <p>{job.role}</p>

          <span>{job.package}</span>

        </div>
      ))}

    </div>
  );
}

export default RecommendedJobs;