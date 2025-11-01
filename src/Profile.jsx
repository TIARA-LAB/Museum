import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container">
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <p>Role: {user?.role}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
