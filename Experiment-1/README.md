📌 EXPERIMENT TITLE:
Implementation of a Single Page Application (SPA) using React State and Conditional Rendering

🎯AIM:
To design and implement a Single Page Application (SPA) using React by creating multiple pages (Home, About, Contact) and navigating between them using state and conditional rendering instead of routing libraries.

🧠 OBJECTIVE:
To understand the concept of SPA.
To use React state for page navigation.
To apply conditional rendering.
To create reusable components.

🛠️ APPARATUS / REQUIREMENTS:
Computer system
Node.js & npm installed
React.js
Code editor (VS Code / WebStorm / etc.)

📂 PROJECT STRUCTURE:
src/
│
├── components/
│   └── Navbar.js
│
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
│
├── App.js
└── index.js

💻 CODE IMPLEMENTATION:

🔹 HOME COMPONENT

function Home() {
  return (
    <div style={styles.container}>
      <h1>Home</h1>
      <p>Welcome to our Single Page Application.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
};

export default Home;

🔹 ABOUT COMPONENT

function About() {
  return (
    <div style={styles.container}>
      <h1>About</h1>
      <p>This app demonstrates SPA using React state and conditional rendering.</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
};

export default About;

🔹 CONTACT COMPONENT

function Contact() {
  return (
    <div style={styles.container}>
      <h1>Contact</h1>
      <p>Email: contact@example.com</p>
      <p>Phone: +91 9876543210</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "40px",
  },
};

export default Contact;

🔹 NAVBAR COMPONENT

import React from "react";

function Navbar({ setPage }) {
  return (
    <nav style={styles.nav}>
      <button style={styles.btn} onClick={() => setPage("home")}>Home</button>
      <button style={styles.btn} onClick={() => setPage("about")}>About</button>
      <button style={styles.btn} onClick={() => setPage("contact")}>Contact</button>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#222",
  },
  btn: {
    padding: "10px 18px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#444",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Navbar;

🔹 APP COMPONENT (Main Controller)

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
    </>
  );
}

export default App;

⚙️ Important Commands
🔹 1. Create React App:
npx create-react-app spa-app

🔹 2. Navigate to Project Folder:
cd spa-app

🔹 3. Start Development Server:
npm start

🔹 4. Stop the Server:
Ctrl + C

🔹 5. Install Dependencies (if required):
npm install

✅ Output:
The application successfully displays different page content (Home, About, Contact) without reloading the page, demonstrating the behavior of a Single Page Application.

🧾 Conclusion:
This experiment demonstrates how React’s state and conditional rendering can be used to build a basic SPA without external routing libraries. It reinforces component-based design and dynamic UI rendering.