import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>My Website</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/reports">Reports</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;