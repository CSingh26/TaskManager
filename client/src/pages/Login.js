import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './LoginPage.css'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import LoginImg from '/Users/chaitanyasingh/Documents/Project/7/client/src/assests/team-checklist-concept-illustration/7495401.jpg'
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const navigate = useNavigate()

    const loginUser = (event) => {
        event.preventDefault();
        axios.get('/')
        navigate('/');
      };

    return (
        <div>
            <Navbar />
            <div className="main-content">
                <div className="login-form">
                    <div className="headings">
                        <h2>Login</h2>
                        <h3>Dosen't Have an Account? <Link to='/signup' className="signup-link">Sign up</Link></h3>
                    </div>
                    <form onSubmit={loginUser}>
                        <div className="username">
                            <div className="label">
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="form-input">
                                <input 
                                    className="user"
                                    type="text"
                                    placeholder="Username"
                                    value={data.username}
                                    onChange={(e) => setData({...data, username: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="pwd">
                            <div className="label">
                                <label htmlFor="password">Password</label>
                                <Link to='/' className="forgot-pwd">Forgotten Password?</Link>
                            </div>
                            <div className="form-input">
                                <input 
                                    className="password"
                                    type="password"
                                    placeholder="Password"
                                    value={data.password}
                                    onChange={(e) => setData({...data, password: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="remember-me">
                            <input 
                                className="remember"
                                type="checkbox"
                            />
                            <label className="check">Remember me?</label>
                        </div>
                        <div className="btn">
                            <button type="submit" className="submit-btn">Login</button>
                        </div>
                    </form>
                </div>
                <div className="login-img">
                    <img src={LoginImg}></img>
                </div>
            </div>
        </div>
    )
}

export default Login