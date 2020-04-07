import React, { Component } from 'react';
import '/home/natan/Documentos/repositorios/mycv/node_modules/aos/dist/aos.css';
import './Education.css';

class Education extends Component {
    render() {
        return (
            <div className="about">
                <div className="rspnsv width">
                    <h6 className="bold">High School - Polymodal</h6>
                    <h6 className="bold">Humanities and Social Science Modality</h6>
                    <h6 className="">Private Educational Establishment</h6>
                    <h6 className="">Juan Enrique Dring - Formosa, Argentina 2014</h6>
                </div>

                <div className="rspnsv width">
                    <h6 className="bold">Information System Engineering</h6>
                    <h6 className="">Universidad Tecnologica Nacional - FRRe</h6>
                    <h6 className="">Resistencia, Chaco 2015 - Present</h6>
                </div>
            </div >
        );
    }
}

export default Education;