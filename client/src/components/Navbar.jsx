import {Link} from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleOn = () => {
        setIsActive(!isActive)
    }
    
    return (
            <nav className='navbar'>
                <Link to="/" className='branding'>Produly</Link>
                <ul className={`nav-menu${isActive ? ' active' : ''}`}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login" onClick={toggleOn}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup" onClick={toggleOn}>Register</Link>
                    </li>
                </ul>
                <div className={`ham-menu${isActive ? ' active' : ''}`} onClick={toggleOn}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
    )
}

export default Navbar