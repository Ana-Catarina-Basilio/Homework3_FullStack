// src/components/LogoutButton.js
import React from 'react';
import './LogoutButton.css'; 

const LogoutButton = ({ onClick }) => {
  return (
    <button className="logout-button" onClick={onClick}>
      Log Out
    </button>
  );
};

export default LogoutButton;
