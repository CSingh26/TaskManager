import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { UserContext } from '../context/userContext';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, isAuth, logout } = useContext(UserContext)
  const navigate = useNavigate()

  const handleToggle = () => {
    setIsActive(!isActive);
  }

  const handleLogout = () => {
    logout()
    navigate('/')
    
  }

  return (
    <nav className="navbar">
      {isAuth() ? (
        <>
          <Link to="/dashboard" className="logo">Taskify</Link>
          <ul className={`nav-menu${isActive ? ' active' : ''}`}>
            <li className='nav-item'>
                <Link to='/user-profile' className='nav-link'>{user.userName}</Link>
            </li>
            <li className='nav-item'>
                <Link to='/dashboard' className='nav-link'>Dashboard</Link>
            </li>
            <li className='nav-item'>
              <Link to='/logout' onClick={handleLogout} className='nav-link'>Logout</Link>
            </li>
          </ul>
          <div className={`hamburger${isActive ? ' active' : ''}`} onClick={handleToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </>
      ) : (

      <>
      <Link to="/" className="logo">Taskify</Link>
      <ul className={`nav-menu${isActive ? ' active' : ''}`}>
        <li className="nav-item">
          <Link to="/login" className="nav-link" onClick={handleToggle}>Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link" onClick={handleToggle}>SignUp</Link>
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
      </>
      )}
    </nav>
  );
};

export default Navbar;
