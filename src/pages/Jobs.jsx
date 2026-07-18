import { jobData } from "../data/dummyData";
import JobCard from "../components/JobCard/JobCard";
import "./Jobs.css";

function Jobs() {
  return (
    <div className="jobs-page">

      <h1>Available Jobs</h1>

      <div className="job-container">

        {jobData.map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
          />
        ))}

      </div>

    </div>
  );
}

export default Jobs;