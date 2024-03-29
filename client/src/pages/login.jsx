import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import './login.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from "react";
import Lottie from "lottie-react"
import animationData from '../assets/Animation - 1711631808560.json'

const LoginPage = () => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);

    const ToggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
        <Navbar />
        <div className="main-body">
            <div className="login-form">
                <div className="img-area">
                    <Lottie animationData={animationData}/>
                </div>
                <div className="form-area">
                    <div className="form-headings">
                        <h1 className="main-heading">Hello Again!</h1>
                        <br />
                        <h3 className="sub-heading">Welcome Back you've been missed!</h3>
                        <form action="" className="login">
                            <div className="username">
                                <input 
                                type="text" 
                                placeholder="Enter Username"/>
                            </div>
                            <div className="pwd">
                                <input 
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                />
                                {/* <span className="toggle-password" onClick={ToggleShowPassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span> */}
                            </div>
                            <div className="forgort-password">
                                <Link to="/">Forgot Password</Link>
                            </div>
                            <div className="submit-btn">
                                <button className="login-submit" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginPage