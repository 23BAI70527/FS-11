import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app"}>
        
        {/* Navbar */}
        <nav className="navbar">
          <h2 className="logo">My Website</h2>

          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          <button 
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </nav>

        {/* Page Content */}
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

/* Pages */

function Home() {
  return (
    <div className="page">
      <h1>Welcome to My Website</h1>
      <p>This is the home page of our React Router application.</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <p>Here you can explore the projects I have built using modern technologies.</p>
    </div>
  );
}

function Analytics() {
  return (
    <div className="page">
      <h1>Analytics Dashboard</h1>
      <p>This page displays insights and performance analysis of the application.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>
      <p>You can reach out for collaborations or project discussions.</p>
    </div>
  );
}

export default App;