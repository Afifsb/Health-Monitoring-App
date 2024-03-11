import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions
    // ...

    // Redirect to the login page
    navigate('/');
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      <FaSignOutAlt />
      Logout
    </button>
  );
};

export default LogoutButton;