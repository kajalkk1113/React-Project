import "./JobCard.css";

function JobCard({ title, company, location, salary, type }) {

  return (

    <div className="job-card">

      <div className="job-header">

        <h2>{title}</h2>

        <span>{type}</span>

      </div>

      <h3>{company}</h3>

      <p>📍 {location}</p>

      <p>💰 {salary}</p>

      <div className="job-buttons">

        <button className="apply-btn">
          Apply
        </button>

        <button className="save-btn">
          Save
        </button>

      </div>

    </div>

  );
}

export default JobCard;