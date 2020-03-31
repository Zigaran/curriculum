import React, { Component } from "react";
import "./App.css";
import NavBar from './components/NavBar.js';
import Perfil from './components/Perfil';
import About from './components/About';
import Education from './components/Education';
import AOS from 'aos';


class App extends Component {
  constructor(props, context) {
    super();
    AOS.init();
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

  render() {
    return (
      <div className="App">

        <div className="stickyNavbar">
          <NavBar />
        </div>

        <div className="profile" id="perfil">
          <Perfil />
        </div>


        <div className="bloque" id="about" data-aos="fade-up" data-aos-offset="300" data-aos-duration="500">
          <About />
        </div>

        <div className="" id="education" data-aos="fade-up" data-aos-offset="190" data-aos-duration="500">

          <div className="" id="education">
            <h4 className="section">Education</h4>
          </div>

          <div className="bloque-education">
            <Education />
          </div>

        </div>

      </div >
    );
  }
}

export default App;
