import React, { Component } from 'react';
import '/home/natan/Documentos/repositorios/mycv/node_modules/aos/dist/aos.css';
import './About.css';

const age = 23;


class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutDesc paddingDescBlock">
                    <h4 className="title">
                        About
                    </h4>
                    <a>
                        Hello! I am Elias. Engineering student, Frontend Developer and Pianist in free times. <br /> <br />

                        Currently i'm in the 4th year of my career. <br />
                        I consider myself a responsible, proactive, and self-taught person. <br />
                        I like the team work because it's a source to learn fast about multiple aspects.
                    </a></div>
                <div className="basicInfo paddingDescBlock">
                    <h4 className="title">Basic Information</h4>

                    <div className="descBasicInfo">

                        <div className="descripciones margin-rght">
                            <a className="title pad-btm">AGE:</a>
                            <a className="title pad-btm">EMAIL:</a>
                            <a className="title pad-btm responsive-pad">ADRESS:</a>
                            <a className="title">LANGUAGE:</a>
                        </div>

                        <div className="descripciones">
                            <a className="pad-btm">{age}</a>
                            <a className="pad-btm">zigaraneliasnatan@gmail.com</a>
                            <a className="pad-btm">Saavedra 656, Resistencia, Arg.</a>
                            <a className="pad-btm">Spanish, English</a>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default About;