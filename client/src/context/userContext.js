import axios from "axios"
import { createContext, useState, useEffect } from "react"

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    const isAuth = () => {
        return !!user
    }
    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }
    }, [])

    const logout = async () => {
        try {
            await axios.post('/logout');
            setUser(null);


        } catch (error) {
            console.error("Logout failed", error);
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, isAuth, logout}}>
            {children}
        </UserContext.Provider>
    )
}