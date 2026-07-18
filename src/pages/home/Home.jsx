import "./Home.css";
import hero from "../../assets/hero.jpeg";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-left">

          <h1>
            Build Your <span>Dream Career</span>
          </h1>

          <p>
            Career Compass helps you track learning,
            explore jobs, prepare for interviews and
            achieve your career goals.
          </p>

          <div className="hero-buttons">

            <NavLink to="/jobs">
              <button className="primary-btn">
                Explore Jobs
              </button>
            </NavLink>

            <NavLink to="/learning">
              <button className="secondary-btn">
                Start Learning
              </button>
            </NavLink>

          </div>

        </div>

        <div className="hero-right">
          <img src={hero} alt="Career" />
        </div>

      </section>

      <section className="features">

        <h2>Why Choose Career Compass?</h2>

        <div className="feature-container">

          <div className="feature-card">
            <h3>💼 Jobs</h3>
            <p>
              Find the latest internships and full-time opportunities.
            </p>
          </div>

          <div className="feature-card">
            <h3>📚 Learning</h3>
            <p>
              Track your learning progress and improve your skills.
            </p>
          </div>

          <div className="feature-card">
            <h3>🎯 Dashboard</h3>
            <p>
              View all your career progress in one place.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default Home;