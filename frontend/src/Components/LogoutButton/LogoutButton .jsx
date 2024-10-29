import React, { useContext } from "react";
import { EnrollmentContext } from "../../context/EnrollmentContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const { logout } = useContext(EnrollmentContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="logout-button icon">
      Logout
    </button>
  );
};

export default LogoutButton;
