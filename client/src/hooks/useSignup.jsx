import { useState } from "react"
import { UseAuth } from "../context/AuthContext"
import { message } from 'antd'

const useSignup = () => {
    const { login } = UseAuth()

    const registerUser = async (values) => {
        try {
            const res = await fetch('http://localhost:2300/api/auth/signup', {
                method: 'POST', 
                body: JSON.stringify(values),
            })

            const data = await res.json()
            if (res.status == 201) {
                message.success(data.message)
                login(data.token, data.user)
            } else if(res.status === 400) {
                message.error(data.message)
            } else {
                message.error('Registration failed')
            }
        } catch (error) {
            message.error(error)
        } 
    }

    return { registerUser }
}

export default useSignup