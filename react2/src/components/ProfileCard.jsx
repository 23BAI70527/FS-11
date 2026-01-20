import React from "react";

function ProfileCard() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Header Image */}
        <div style={styles.header}></div>

        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/150?img=32"
          alt="Prema Gupta"
          style={styles.avatar}
        />

        {/* Name */}
        <h3 style={styles.name}>Prema</h3>

        {/* Description */}
        <p style={styles.text}>
          Prema Gupta is a software engineer who recently got a job at Uber.
          She has strong problem-solving skills and contributes to open-source
          community at GeeksforGeeks.
        </p>

        {/* Social Icons */}
        <div style={styles.icons}>
          <span>📘</span>
          <span>📷</span>
          <span>🐦</span>
          <span>💼</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "280px",
    background: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    paddingBottom: "15px",
  },

  header: {
    height: "100px",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1523413651479-597eb2da0ad6')",
    backgroundSize: "cover",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    border: "3px solid white",
    marginTop: "-40px",
  },

  name: {
    margin: "10px 0",
    color: "#000",
  },

  text: {
    fontSize: "13px",
    padding: "0 15px",
    color: "#000",
  },

  icons: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    fontSize: "16px",
  },
};

export default ProfileCard;
