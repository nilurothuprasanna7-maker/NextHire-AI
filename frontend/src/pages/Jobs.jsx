import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import JobSearch from "../components/Jobs/JobSearch";
import JobCard from "../components/Jobs/JobCard";
import "./Jobs.css";

const jobs = [
  {
    id: 1,
    company: "TCS",
    role: "Java Developer",
    location: "Hyderabad",
    packageOffered: "₹7 LPA",
  },
  {
    id: 2,
    company: "Infosys",
    role: "Frontend Developer",
    location: "Bangalore",
    packageOffered: "₹8 LPA",
  },
  {
    id: 3,
    company: "Accenture",
    role: "Python Developer",
    location: "Chennai",
    packageOffered: "₹6.5 LPA",
  },
  {
    id: 4,
    company: "Capgemini",
    role: "Full Stack Developer",
    location: "Pune",
    packageOffered: "₹9 LPA",
  },
  {
    id: 5,
    company: "Wipro",
    role: "Software Engineer",
    location: "Hyderabad",
    packageOffered: "₹6 LPA",
  },
  {
    id: 6,
    company: "Cognizant",
    role: "React Developer",
    location: "Bangalore",
    packageOffered: "₹8.5 LPA",
  },
];

function Jobs() {
  const [search, setSearch] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="jobs-page">

        <h1>💼 Job Portal</h1>

        <p className="jobs-subtitle">
          Search and explore placement opportunities.
        </p>

        <JobSearch onSearch={setSearch} />

        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              role={job.role}
              location={job.location}
              packageOffered={job.packageOffered}
            />
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}

export default Jobs;