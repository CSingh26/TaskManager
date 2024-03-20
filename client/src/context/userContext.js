// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get('/profile').then(response => {
            setUser(response.data.user); // Adjust according to the response structure
        }).catch(error => {
            console.log(error);
            setUser(null);
        });
    }, []);

    const logout = () => {
        // Implement logout functionality
        axios.post('/logout').then(() => {
            setUser(null);
            // Redirect or perform additional actions as needed
        });
    };

    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};
