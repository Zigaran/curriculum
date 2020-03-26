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
      <nav class="navbar navbar-expand-md navbar-dark" id="nav">
        <a class="navbar-brand" href="#">ZIGARAN ELIAS</a>

        <button class="btn btn-sm btn-outline-secondary navbar-toggler" type="button" onClick={this.handleClick} data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">

            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Off-Topic</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>


          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
