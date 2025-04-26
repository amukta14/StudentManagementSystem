import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1>Welcome to Student Management System</h1>
      <button className="btn" onClick={() => navigate('/students')}>
        View Students
      </button>
    </div>
  );
};

export default LandingPage;

