import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  username: string;
  password: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser: User | null = JSON.parse(
      localStorage.getItem("loggedInUser") || "null"
    );
    if (!loggedInUser) {
      navigate("/");
    } else {
      setUser(loggedInUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user && <p>Welcome, {user.username}!</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard; 