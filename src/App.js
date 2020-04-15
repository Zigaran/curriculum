import React, { Component } from "react";
import "./App.css";
import NavBar from './components/NavBar.js';
import Perfil from './components/Perfil.js';
import About from './components/About.js';
import Education from './components/Education.js';
import Skills from './components/Skills.js';
import Portfolio from './components/Portfolio.js';
import Offtopic from './components/Offtopic.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import AOS from 'aos';




export default class YourApp extends Component {
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



        {/* INICIO BARRA DE NAVEGACION */}
        <div className="stickyNavbar">
          <NavBar />
        </div>
        {/* FIN BARRA DE NAVEGACION */}





        {/* INICIO PERFIL PRINCIPAL */}
        <div className="profile" id="perfil">
          <Perfil />
        </div>
        {/* FIN PERFIL PRINCIPAL */}




        {/* INICIO SECCIÓN "ABOUT" */}
        <div className="bloque" id="about" data-aos="fade-up" data-aos-offset="230" data-aos-duration="500">
          <About />
        </div>
        {/* FIN SECCION "ABOUT" */}





        {/* INICIO SECCION "EDUCACIÓN" */}
        <div className="" id="education" data-aos="fade-up" data-aos-offset="190" data-aos-duration="500">
          <h4 className="section">Education</h4>
          <div className="bloque-standard">
            <Education />
          </div>
        </div>
        {/* FIN SECCION "EDUCACIÓN" */}





        {/* INICIO SECCION "SKILLS" */}
        <div className="" id="skills" data-aos="fade-up" data-aos-offset="190" data-aos-duration="500" >
          <h4 className="section">Skills</h4>
          <div className="bloque-standard">
            <Skills />
          </div>
        </div>
        {/* FIN SECCION "SKILLS" */}





        {/* INICIO SECCION "PORTFOLIO" */}
        <div className="" id="portfolio" data-aos="fade-up" data-aos-offset="190" data-aos-duration="500" >
          <h4 className="section">Portfolio</h4>
          <div className="bloque-standard">
            <Portfolio />
          </div>
        </div>
        {/* FIN SECCION "PORTFOLIO" */}




        {/* INICIO SECCION "OFFTOPIC" */}
        <div className="" id="offTopic" data-aos="fade-up" data-aos-offset="190" data-aos-duration="500">
          <h4 className="section">Off-Topic</h4>
          <Offtopic />
        </div>
        {/* FIN SECCION "OFFTOPIC" */}



        {/* INICIO SECCION "CONTACT" */}
        <div className="contact-container" id="contact" data-aos="fade-up" data-aos-offset="100" data-aos-duration="500" >
          <h4 className="section">Contact</h4>
          <div className="contact-div">
            <div className="contact-section">
            </div>

            <div className="arriba">
              <Contact className="" />
            </div>
          </div>
        </div>



        {/* INICIO SECCION "FOOTER" */}
        <div className="">
          <Footer />
        </div>

      </div>
    );
  }
}


