import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { theme } = useContext(AppContext);

  return (
    <nav className={theme}>
      <h2>My Website</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;