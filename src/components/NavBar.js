import React, { Component } from "react";
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md navbar-dark">
        <a class="navbar-brand" href="#">ZIGARAN ELIAS</a>

        <button class="btn btn-sm btn-outline-secondary navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
