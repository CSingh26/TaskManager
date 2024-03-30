import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import './signup.css'
import Lottie from "lottie-react"
import animationData from '../assets/Animation - 1711715666158.json'
import useSignup from "../hooks/useSignup";

const Signup = () => {

    const { registerUser } = useSignup()

    const navigate = useNavigate()

    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        await registerUser(data)
        navigate('/login')
    }

    return (
        <>
        <Navbar />
        <div className="main-body">
            <div className="signup-form">
                <div className="img-area" id="img-area">
                    <Lottie animationData={animationData}/>
                </div>
                <div className="form-area">
                    <div className="form-headings">
                        <h1 className="main-heading">Hey There!</h1>
                        <br />
                        <h3 className="sub-heading">Signup to expand your horizon</h3>
                        <form onSubmit={handleRegister()} className="signup">
                            {/* form inputs */}
                            <div className="email-id">
                                <input 
                                type="email" 
                                placeholder="Enter your Email-Id"
                                value={data.email}
                                onChange={(e) => setData({...data, email: e.target.value})}
                                />
                            </div>
                            <div className="username">
                                <input 
                                type="text" 
                                placeholder="Enter Username"
                                value={data.username}
                                onChange={(e) => setData({...data, username:e.target.value})}
                                />
                            </div>
                            <div className="pwd">
                                <input 
                                type='password'
                                placeholder="Enter Your Password"
                                value={data.password}
                                onChange={(e) => setData({...data, password:e.target.value})}
                                />
                                {/* <span className="toggle-password" onClick={ToggleShowPassword}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span> */}
                            </div>

                            <div className="submit-btn">
                                <button className="signup-submit" type="submit">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signup