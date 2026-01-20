import React, { useState } from "react";

function ProfileScrollSelect() {
  const profiles = [
    {
      id: 1,
      name: "Prema",
      desc:
        "Prema Gupta is a software engineer who recently got a job at Uber. She has strong problem-solving skills and contributes to open-source community at GeeksforGeeks.",
      img: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 2,
      name: "Ananya",
      desc:
        "Ananya is a frontend developer passionate about clean UI and accessibility.",
      img: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 3,
      name: "Riya",
      desc:
        "Riya is a backend engineer working with Node.js and databases.",
      img: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 4,
      name: "Sneha",
      desc:
        "Sneha loves problem solving and competitive programming.",
      img: "https://i.pravatar.cc/150?img=21",
    },
  ];

  const [selected, setSelected] = useState(profiles[0]);

  return (
    <div style={styles.page}>
      {/* Profile Card */}
      <div style={styles.card}>
        <div style={styles.header}></div>

        <img src={selected.img} alt={selected.name} style={styles.avatar} />

        <h3>{selected.name}</h3>

        <p style={styles.text}>{selected.desc}</p>

        <div style={styles.icons}>
          <span>📘</span>
          <span>📷</span>
          <span>🐦</span>
          <span>💼</span>
        </div>
      </div>

      {/* Scrollable Profile List */}
      <div style={styles.list}>
        {profiles.map((profile) => (
          <div
            key={profile.id}
            style={styles.listItem}
            onClick={() => setSelected(profile)}
          >
            {profile.name}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    gap: "20px",
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

  text: {
    fontSize: "13px",
    padding: "0 15px",
  },

  icons: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },

  list: {
    width: "150px",
    height: "260px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflowY: "auto",
    padding: "10px",
  },

  listItem: {
    padding: "8px",
    cursor: "pointer",
    borderBottom: "1px solid #ddd",
  },
};

export default ProfileScrollSelect;
