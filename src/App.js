import React from 'react';
import "./App.css";
import NavBar from './components/NavBar.js';
import Perfil from './components/Perfil';

function App() {
  return (
    <div className="App">

      <div className="">
        <NavBar />
      </div>

      <div className="profile">
        <Perfil />
      </div>

    </div >
  );
}

export default App;
