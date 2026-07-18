import "./JobCard.css";

function JobCard({ title, company, location, salary }) {
  return (
    <div className="job-card">

      <h2>{title}</h2>

      <p><strong>Company:</strong> {company}</p>

      <p><strong>Location:</strong> {location}</p>

      <p><strong>Salary:</strong> {salary}</p>

      <button>Apply</button>

    </div>
  );
}

export default JobCard;