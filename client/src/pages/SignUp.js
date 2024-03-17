import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './SignUp.css'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailId, setEmailid] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/login')
    }

    return (
        <div>
            <Navbar />
            <div className="signup-page">
                <div className="signup-form">
                    <div className="signup-heading">
                        <h2>Register</h2>
                        <h3>Already Have an Account? <Link to='/login' className="login-link">Login</Link></h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-username">
                            <div className="signup-label">
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="signup-input">
                                <input 
                                    className="signup-user"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="email">
                            <div className="signup-label">
                                <label htmlFor="emailid">Email-Id</label>
                            </div>
                            <div className="signup-input">
                                <input 
                                    className="signup-email"
                                    type="text"
                                    placeholder="Email Address"
                                    value={emailId}
                                    onChange={(e) => setEmailid(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="singup-pwd">
                            <div className="signup-label">
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="signup-input">
                                <input 
                                    className="signup-password"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="btn">
                            <button type="submit" className="submit-btn">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>   
        </div>
        
    )
}

export default SignUp