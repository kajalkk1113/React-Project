import "./Feature.css";

function Feature() {
  return (
    <section className="features">

      <h2>Why Choose Career Compass?</h2>

      <div className="feature-container">

        <div className="card">
          <h1>📚</h1>
          <h3>Learning Tracker</h3>
          <p>Track your React, JavaScript, DSA and other learning progress.</p>
        </div>

        <div className="card">
          <h1>💼</h1>
          <h3>Job Tracker</h3>
          <p>Manage your job applications and interview status.</p>
        </div>

        <div className="card">
          <h1>🎯</h1>
          <h3>Career Roadmap</h3>
          <p>Set goals and stay focused on your career journey.</p>
        </div>

      </div>

    </section>
  );
}

export default Feature;