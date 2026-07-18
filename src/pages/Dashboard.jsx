import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard</h1>
      <p className="dashboard-subtitle">
        Welcome back! Here's your career progress.
      </p>

      {/* Statistics */}
      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Jobs</h3>
          <h2>120</h2>
        </div>

        <div className="stat-card">
          <h3>Applied Jobs</h3>
          <h2>15</h2>
        </div>

        <div className="stat-card">
          <h3>Learning Progress</h3>
          <h2>80%</h2>
        </div>

        <div className="stat-card">
          <h3>Interviews</h3>
          <h2>4</h2>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="dashboard-grid">

        <div className="dashboard-box">
          <h2>Recent Applications</h2>

          <ul>
            <li>Frontend Developer - Google</li>
            <li>React Developer - Microsoft</li>
            <li>UI Developer - Infosys</li>
            <li>JavaScript Developer - TCS</li>
          </ul>
        </div>

        <div className="dashboard-box">
          <h2>Upcoming Interviews</h2>

          <ul>
            <li>Google - 20 July</li>
            <li>Microsoft - 23 July</li>
            <li>Infosys - 26 July</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;