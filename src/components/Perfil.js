import React, { Component } from "react";
import "./Perfil.css";
import profilePic from '../images/profilePic.png';

class Perfil extends Component {
    render() {
        return (
            <div>
                <div className="">
                    <img src={profilePic} className="profilePic" ></img>
                </div>
            </div>
        );
    }
}

export default Perfil;