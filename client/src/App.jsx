import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home';
import LoginPage from './pages/login';
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import  { UseAuth } from './context/AuthContext'

function App() {

  const {isAuthenticated} = UseAuth()
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home />
              } 
              />
            <Route 
              path="/login" 
              element={
                !isAuthenticated ? <LoginPage /> : <Navigate to="/dashboard" />
              } 
              />
            <Route 
              path='/signup' 
              element={
                !isAuthenticated ? <Signup /> : <Navigate to="/dashboard" />
              }>
            </Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;