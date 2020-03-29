import React, { Component } from 'react';
import '../node_modules/aos/dist/aos.css';
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="about" data-aos="fade-up">
                <div className="aboutDesc paddingDescBlock">
                    <h4 className="title">
                        About
                    </h4>
                    <h6>
                        Hello! I am Elias. Engineering student, Frontend Developer and Pianist in free times. <br /> <br />

                        Currently i'm in the 4th year of my career. <br />
                        I consider myself a responsible, proactive, and self-taught person. <br />
                        I like the team work because it's a source to learn fast about multiple aspects.
                    </h6></div>
                <div className="basicInfo paddingDescBlock">BASICINFO Aaasdasdasdasdasdasdas asdasdasdasdasda asd asd asd assd asdasdasdasda assd asdasdasd</div>
            </div >
        );
    }
}

export default About;