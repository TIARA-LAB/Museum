import React, { useState } from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", formData);
      alert("Registration successful!");
   navigate("/login");
    } catch {
      alert("Error registering user");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
        <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
        <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
        <button type="submit">Create Account</button>
        <p style={{ textAlign: "center" }}>
          Already have an account? <Link to="/login">Login</Link> 
        </p>
      </form>
    </div>
  );
};

export default Register;
