import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import './App.css';
import axios from 'axios'
import  { Toaster } from 'react-hot-toast'

axios.defaults.baseURL = "http://localhost:3000"
axios.defaults.withCredentials = true

function App() {
  return (
    <>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}}></Toaster><Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </div>
    </Router></>
  );
}

export default App;
