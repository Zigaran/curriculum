import React, { Component } from "react";
import './NavBar.css'
import { Link } from "react-scroll";

class NavBar extends Component {

  // const navBtn = document.getElementById('nav');

  handleClick = e => {
    const navBtn = document.getElementById('nav')
    if (navBtn.classList.contains('navbarBg')) {
      navBtn.classList.remove('navbarBg')
    } else { navBtn.classList.add('navbarBg') }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
        <ul className="navbar-nav">
          <li className="navbar-nav">
            <Link activeClass="active" to="perfil" spy={true} smooth={true} offset={-60} duration={1500} className="navbar-brand nav-link" >ZIGARAN ELIAS</Link>
          </li>
        </ul>

        <button className="btn btn-sm btn-outline-secondary navbar-toggler" type="button" onClick={this.handleClick} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link activeClass="active" to="about" spy={true} smooth={true} offset={-180} duration={1500} className="nav-link" >About</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="education" spy={true} smooth={true} offset={-180} duration={1400} className="nav-link" >Education</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={1000} className="nav-link" >Skills</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-70} duration={1000} className="nav-link" >Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="offTopic" spy={true} smooth={true} offset={-70} duration={1000} className="nav-link" >Off-Topic</Link>
            </li>
            <li className="nav-item">
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={1000} className="nav-link" >Contact</Link>
            </li>


          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
