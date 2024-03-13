import React from "react";
import { Link } from 'react-router-dom'
import '/Users/chaitanyasingh/Documents/Project/7/client/src/HomePage.css'

const HomePage = () => { 
    return (
      <div className="homepage">
        <nav className="navbar">
          <Link to="/" className="logo">Taskify</Link>
          <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/features">Features</Link>
          </div>
        </nav>
        <main className="main-content">
          <h1>Welcome to Our Task Manager</h1>
          <p>Some image or video of working of this webapp.</p>
          {/* Replace with actual image or video */}
          <div className="media-placeholder">Media placeholder</div>
        </main>
      </div>
    );
  };
  
  export default HomePage;