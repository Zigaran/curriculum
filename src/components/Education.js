import React, { Component } from 'react';
import '/home/natan/Documentos/repositorios/mycv/node_modules/aos/dist/aos.css';
import './Education.css';

const age = 23;


class Education extends Component {
    render() {
        return (
            <div className="about">
                <div className="rspnsv width">
                    <a className="bold">High School - Polymodal</a>
                    <a className="bold">Humanities and Social Science Modality</a>
                    <a className="">Private Educational Establishment</a>
                    <a className="">Juan Enrique Dring - Formosa, Argentina 2014</a>
                </div>

                <div className="rspnsv width">
                    <a className="bold">Information System Engineering</a>
                    <a className="">Universidad Tecnologica Nacional - FRRe</a>
                    <a className="">Resistencia, Chaco 2015 - Present</a>
                </div>
            </div >
        );
    }
}

export default Education;