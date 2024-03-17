import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Taskify</Link>
      <ul className={`nav-menu${isActive ? ' active' : ''}`}>
        <li className="nav-item">
          <Link to="/login" className="nav-link" onClick={handleToggle}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link" onClick={handleToggle}>SignUp</Link>
        </li>
        <li className="nav-item">
          <Link to="/features" className="nav-link" onClick={handleToggle}>Features</Link>
        </li>
      </ul>
      <div className={`hamburger${isActive ? ' active' : ''}`} onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
