import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import CenterShow from './Components/CenterShow'


class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <div className="top-container">
          <div className="navbar">
            <Navbar />
          </div>
        </div>

        <div className="central-container">
          <div className="main-show">
            <CenterShow/>
          </div>
        </div>

        <div className="bottom-container">
          <div className="bottom-bar">
          </div>
        </div>
      </div>
    );
  }

}

export default App;
