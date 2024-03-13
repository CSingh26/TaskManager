import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import '/Users/chaitanyasingh/Documents/Project/7/client/src/HomePage.css'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailId, setEmailid] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/')
    }

    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="logo">Taskify</Link>
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/features">Features</Link>
                </div>
            </nav>
        <div className="signup">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="emailId">Email-ID</label>
                    <input
                        id="emailid"
                        type="text"
                        value={emailId}
                        onChange={(e) => setEmailid(e.target.value)}
                    />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                    <input 
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">
                    SignUp
                </button>
            </form>
        </div>
        </div>
        
    )
}

export default SignUp