import React from 'react';
import "./App.css";
import NavBar from './components/NavBar.js';
import Perfil from './components/Perfil';
import About from './components/About';


function App() {
  return (
    <div className="App">

      <div className="stickyNavbar">
        <NavBar />
      </div>

      <div className="profile">
        <Perfil />
      </div>

      <div className="aboutContainer">
        <div className="aboutDescription" id="about">
          <About />
        </div>
      </div>

      <div className="">
        <div className="aboutDescription">
          <About />
        </div>
      </div>

    </div >
  );
}

export default App;
