import React, { Component } from 'react';
import './Offtopic.css';
import topicImg from '../images/Off-Topic1.jpg';
import paralax from '/home/natan/Documentos/repositorios/mycv/node_modules/jquery-parallax.js/parallax.js';


class Offtopic extends Component {

    componentDidMount = () => paralax;

    render() {
        return (
            <div className="parallax" data-parallax="scroll" data-speed="0.2" data-z-index="1" data-image-src={topicImg}>
                <h1 className="centerText">UNO DOS TRES CUATRO CINCO SEIS SIETE OCHO NUEVE DIEZ ONCE DOCE TRECE CATORCE QUINSE DIECISEIS DIECISIETE</h1>
            </div>
        );
    }
}

export default Offtopic;