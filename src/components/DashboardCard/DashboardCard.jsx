import "./DashboardCard.css";

function DashboardCard() {
  return (
    <section className="dashboard-preview">

      <h2>Your Career Dashboard</h2>

      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>📚 Learning Progress</h3>
          <p>React Course</p>

          <div className="progress-bar">
            <div className="progress"></div>
          </div>

          <span>80% Completed</span>
        </div>

        <div className="dashboard-card">
          <h3>💼 Jobs Applied</h3>
          <h1>12</h1>
          <p>Applications Submitted</p>
        </div>

        <div className="dashboard-card">
          <h3>🎤 Interviews</h3>
          <h1>4</h1>
          <p>Upcoming Interviews</p>
        </div>

      </div>

    </section>
  );
}

export default DashboardCard;