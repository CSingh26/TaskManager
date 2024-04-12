import { useState } from "react"
import { UseAuth } from "../context/AuthContext.jsx"
import { message } from 'antd'

const useLogin = () => {
    const { login } = UseAuth()

    const loginUser = async (values) => {
        try {
            const res = await fetch('http://localhost:2300/api/auth/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            })

            const data = await res.json()
            if (res.status === 201) {
                message.success(data.message)
                login(data.token, data.user)
            } else if(res.status === 400) {
                message.error(data.message)
            } else {
                message.error('Login failed')
            }
        } catch (error) {
            message.error(error)
        } 
    }

    return { loginUser }
}

export default useLogin