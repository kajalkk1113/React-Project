import { useState } from "react";
import "./Jobs.css";
import JobCard from "../components/JobCard/JobCard";
import { jobData } from "../data/dummyData";

function Jobs() {

  const [search, setSearch] = useState("");

  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobs-page">

      <h1>Find Your Dream Job</h1>

      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <div className="job-grid">

        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
            type={job.type}
          />
        ))}

      </div>

    </div>
  );
}

export default Jobs;