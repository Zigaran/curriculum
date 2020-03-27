import React, { Component } from "react";
import "./Perfil.css";
import profilePic from '../images/profilePic.png';

class Perfil extends Component {
    render() {
        return (
            <div className="container">
                <div className="">
                    <img src={profilePic} className="picSize" alt="Foto de perfil"></img>
                </div>

                <div className="profileDesc">
                    <h1 className="desc">Zigaran Elias</h1>
                    <h6 className="desc">ENGINEERING STUDENT, FRONTEND DEVELOPER, PIANIST</h6>
                </div>

                <div className="">
                    <button type="button" className="btn-dark btn-lg">Download CV</button>
                </div>
            </div>
        );
    }
}

export default Perfil;