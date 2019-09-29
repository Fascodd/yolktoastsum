import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <div className="navbar">
          <Navbar />
        </div>
      </div>

      <div className="central-container">
        <div className="l-nav-bar"></div>
        <div className="main-show"></div>
      </div>

      <div className="bottom-container">
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
}

export default App;
