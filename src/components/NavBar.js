import React, { Component } from "react";
import './NavBar.css'

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
      <nav className="navbar navbar-expand-md navbar-dark" id="nav">
        <a className="navbar-brand" href="#">ZIGARAN ELIAS</a>

        <button className="btn btn-sm btn-outline-secondary navbar-toggler" type="button" onClick={this.handleClick} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Off-Topic</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>


          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
