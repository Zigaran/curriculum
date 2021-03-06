import React, { Component } from 'react';
import './Portfolio.css';
import Tasks from '../images/Task-Manager.png';
import Simon from '../images/SimonSays.png';
import Thai from '../images/Thailand.png';
import ThaiSquare from '../images/thai-square.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="row-or-column">

                    <div className="box-image m-right" data-aos="zoom-in" data-aos-offset="150" data-aos-duration="1000">
                        <img className="image" src={Tasks} alt="" />

                        <div className="overlay">
                            <div className="text">
                                <h5 className="title">TASK MANAGER</h5>
                                <h6 className="">Click <a href="https://zigaran.github.io/reactJS/">here</a> to view on github</h6>
                            </div>
                        </div>
                    </div>

                    <div className="box-image" data-aos="zoom-in" data-aos-offset="150" data-aos-duration="1000">
                        <img className="image" src={Simon} alt="" />
                        <div className="overlay">
                            <div className="text">
                                <h5 className="title">SIMON SAYS</h5>
                                <h6 className="">Click <a href="https://zigaran.github.io/SimonDice/">here</a> to view on github</h6>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="box-image m-top" data-aos="zoom-in" data-aos-offset="150" data-aos-duration="1000">
                    <img className="image display-rectangle" src={Thai} alt="" />
                    <img className="image display-square" src={ThaiSquare} alt="" />
                    <div className="overlay over-width" >
                        <div className="text">
                            <h5 className="title">THAILAND TOURISM</h5>
                            <h6 className="">Click <a href="https://zigaran.github.io/TailandiaProject/">here</a> to view on github</h6>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Portfolio;