import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>My Website</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#222",
    color: "white",
  },
  link: {
    margin: "10px",
    color: "white",
    textDecoration: "none",
  },
};

export default Navbar;
