import React from "react";
import axios from "axios";

function Dashboard() {
  const token = sessionStorage.getItem("token");

  const getData = async () => {
    const res = await axios.get("http://localhost:8081/api/protected", {
      headers: {
        Authorization: "Bearer " + token
      }
    });
    alert(res.data);
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>

      <button className="btn btn-success" onClick={getData}>
        Fetch Data
      </button>

      <button className="btn btn-danger ms-2" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;