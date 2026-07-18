import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound">

      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you're looking for doesn't exist.
      </p>

      <NavLink to="/">
        <button>Go Back Home</button>
      </NavLink>

    </div>
  );
}

export default NotFound;