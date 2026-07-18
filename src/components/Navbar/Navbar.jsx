import { NavLink } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <nav>

      <div className="logo">
        <NavLink to="/">Career Compass</NavLink>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/learning">Learning</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;