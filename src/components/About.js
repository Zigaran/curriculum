import React, { Component } from 'react';
import '/home/natan/Documentos/repositorios/mycv/node_modules/aos/dist/aos.css';
import './About.css';

const age = 23;
const email = "zigaraneliasnatan@gmail.com";
const adress = "Saavedra 656, Resistencia, Arg.";
const language = "Spanish, English";

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

                        <div className="box-data">
                            <a className="title padding">AGE:</a>
                            <a>{age}</a>
                        </div>

                        <div className="box-data">
                            <a className="title padding">EMAIL:</a>
                            <a>{email}</a>
                        </div>

                        <div className="box-data">
                            <a className="title padding">ADRESS:</a>
                            <a>{adress}</a>
                        </div>

                        <div className="box-data-whitout-pad">
                            <a className="title padding">LANGUAGE:</a>
                            <a>{language}</a>
                        </div>

                    </div>

                </div>
            </div >
        );
    }
}

export default About;