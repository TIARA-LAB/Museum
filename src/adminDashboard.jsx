import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("/api/admin/stats", { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setStats(res.data))
      .catch(() => alert("Unauthorized or server error"));
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <div style={{ textAlign: "center" }}>
        <p>Total Users: {stats.userCount || 0}</p>
        <p>Total Artifacts: {stats.artifactCount || 0}</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
