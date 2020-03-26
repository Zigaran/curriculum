import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a href="#" className="navbar-brand">ZIGARAN ELIAS</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link">About </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Education</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Skills </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Off-Topic</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
