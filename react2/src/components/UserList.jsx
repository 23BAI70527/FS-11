import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.title}>👥 User Directory</h2>

        {error && <p style={styles.error}>{error}</p>}

        <div style={styles.grid}>
          {users.map((user) => (
            <div style={styles.card} key={user.id}>
              <h3 style={styles.name}>{user.name}</h3>
              <p style={styles.email}>{user.email}</p>
              <span style={styles.company}>{user.company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "30px",
  },
  container: {
    maxWidth: "1100px",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#343a40",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },
  name: {
    marginBottom: "8px",
    color: "#212529",
  },
  email: {
    fontSize: "14px",
    color: "#495057",
  },
  company: {
    fontSize: "13px",
    color: "#868e96",
  },
};

export default UserList;
