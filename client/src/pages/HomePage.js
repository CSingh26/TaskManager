import React from "react";
import Navbar from '../components/Navbar'
import '/Users/chaitanyasingh/Documents/Project/7/client/src/HomePage.css'

const HomePage = () => { 
    return (
      <div className="homepage">
        <Navbar />
        <main className="main-content">
          <h1>Welcome to Our Task Manager</h1>
          <p>Some image or video of working of this webapp.</p>
          {/* Replace with actual image or video */}
          <div className="media-placeholder">Media placeholder</div>
        </main>
      </div>
    );
  };
  
  export default HomePage;