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
                        About Me
                    </h4>
                    <h6 className="h6">
                        Hello! I am Elias. Engineering student, Frontend Developer and Pianist in free times. <br /> <br />

                        Currently i'm in the 4th year of my career. <br />
                        I consider myself a responsible, proactive, and self-taught person. <br />
                        I like the team work because it's a source to learn fast about multiple aspects.
                    </h6></div>
                <div className="basicInfo paddingDescBlock">
                    <h4 className="title">Basic Information</h4>

                    <div className="descBasicInfo">

                        <div className="box-data">
                            <h6 className="title padding h6">AGE:</h6>
                            <h6 className="h6">{age}</h6>
                        </div>

                        <div className="box-data">
                            <h6 className="title padding h6">EMAIL:</h6>
                            <h6 className="h6">{email}</h6>
                        </div>

                        <div className="box-data">
                            <h6 className="title padding h6">ADRESS:</h6>
                            <h6 className="h6">{adress}</h6>
                        </div>

                        <div className="box-data-whitout-pad">
                            <h6 className="title padding h6">LANGUAGE:</h6>
                            <h6 className="h6">{language}</h6>
                        </div>

                    </div>

                </div>
            </div >
        );
    }
}

export default About;