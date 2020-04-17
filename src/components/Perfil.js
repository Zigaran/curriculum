import React, { Component } from "react";
import "./Perfil.css";
import profilePic from '../images/ProfileImg.png';
import linkedinPic from '../images/signo-linkedin.png';
import gitPic from '../images/logotipo-de-github.png';
import instaPic from '../images/instagram.png';
import cv from '../images/Zigaran_Elias-CV.pdf';

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


                <a href={cv} className="download" download>
                    <button type="button" className="mybtn btn btn-lg">Download CV</button>
                </a>

                <div className="socialNetworks">
                    <a href="https://www.linkedin.com/in/zigaran/" target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src={linkedinPic} alt="LinkedIn" />
                    </a>

                    <a href="https://github.com/Zigaran" target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src={gitPic} alt="Github" />
                    </a>

                    <a href="https://www.instagram.com/eliasnziga/" target="_blank" rel="noopener noreferrer">
                        <img className="social-icons" src={instaPic} alt="Instagram" />
                    </a>

                </div>

                <div className="caja">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </div>
        );
    }
}

export default Perfil;