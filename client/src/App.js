import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import UserProfile from './pages/userprofile';
import './App.css';
import axios from 'axios'
import  { Toaster } from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';

axios.defaults.baseURL = "http://localhost:2000"
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}}></Toaster>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/user-profile" element={<UserProfile />}></Route>
          </Routes>
        </div>
      </Router>
    </UserContextProvider>
  );
}

export default App;
