import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './SignUp.css'
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar"
import axios from 'axios'
import {toast} from 'react-hot-toast'

const SignUp = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const registerUser = async (event) => {
        event.preventDefault();
        const {username, email, password} = data
        try {
            const {data} = await axios.post('/register', {
                username, email, password
            })
            if (data.error) {
                toast.error(data.error)
            } else {
                setData()
                toast.success('Registration Successful. Welcome!')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
        
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
                    <form onSubmit={registerUser}>
                        <div className="signup-username">
                            <div className="signup-label">
                                <label htmlFor="username">Username</label>
                            </div>
                            <div className="signup-input">
                                <input 
                                    className="signup-user"
                                    type="text"
                                    placeholder="Username"
                                    value={data.username}
                                    onChange={(e) => setData({...data, username: e.target.value})}
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
                                    type="email"
                                    placeholder="Email Address"
                                    value={data.email}
                                    onChange={(e) => setData({...data, email: e.target.value})}
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
                                    value={data.password}
                                    onChange={(e) => setData({...data, password: e.target.value})}
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