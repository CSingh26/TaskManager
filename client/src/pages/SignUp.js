import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import '/Users/chaitanyasingh/Documents/Project/7/client/src/HomePage.css'

const SignUp = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [emailId, setEmailid] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/')
    }

    return (
        <div className="signup">
            
        </div>
    )
}