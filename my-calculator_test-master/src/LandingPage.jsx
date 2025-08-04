import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to My App</h1>
      <div className="options-container">
        <Link to="/calculator" className="option-card">
          <div className="option-icon">🧮</div>
          <h2>Calculator</h2>
          <p>Perform basic mathematical calculations</p>
        </Link>
        <Link to="/notepad" className="option-card">
          <div className="option-icon">📝</div>
          <h2>Notepad</h2>
          <p>Create, save, and search notes</p>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;