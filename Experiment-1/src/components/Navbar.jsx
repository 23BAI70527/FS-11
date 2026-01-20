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
