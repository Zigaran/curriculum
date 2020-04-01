import React, { Component } from 'react';
import './Skills.css';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

class Skills extends Component {
    render() {
        return (
            <div className="about">
                <div className="aboutDesc paddingDescBlock">
                    <div className="box-progress" data-aos="zoom-in" data-aos-offset="125" data-aos-duration="1000">
                        <h5>HTML</h5>
                        <Progress className="opacity" percent={70} status="active"
                            theme={{

                                active: {
                                    symbol: [],
                                    trailColor: 'rgba(0, 2, 107, 0.315)',
                                    color: 'blue'
                                },


                            }}
                        />
                    </div>

                    <div className="box-progress" data-aos="zoom-in" data-aos-offset="125" data-aos-duration="1100">
                        <h5>CSS</h5>
                        <Progress className="opacity" percent={75} status="active"
                            theme={{

                                active: {
                                    symbol: [],
                                    trailColor: 'rgba(0, 2, 107, 0.315)',
                                    color: 'blue'
                                },


                            }}
                        />
                    </div>

                    <div className="" data-aos="zoom-in" data-aos-offset="125" data-aos-duration="1200">
                        <h5>JAVASCRIPT</h5>
                        <Progress className="opacity" percent={80} status="active"
                            theme={{

                                active: {
                                    symbol: [],
                                    trailColor: 'rgba(0, 2, 107, 0.315)',
                                    color: 'blue'
                                },


                            }}
                        />
                    </div>

                </div>



                <div className="aboutDesc paddingDescBlock">

                    <div className="box-progress" data-aos="zoom-in" data-aos-offset="125" data-aos-duration="1050">
                        <h5>REACT.JS</h5>
                        <Progress className="opacity" percent={70} status="active"
                            theme={{

                                active: {
                                    symbol: [],
                                    trailColor: 'rgba(0, 2, 107, 0.315)',
                                    color: 'blue'
                                },


                            }}
                        />
                    </div>

                    <div className="box-progress" data-aos="zoom-in" data-aos-offset="125" data-aos-duration="1150">
                        <h5>UI/UX DESIGN</h5>
                        <Progress className="opacity" percent={65} status="active"
                            theme={{

                                active: {
                                    symbol: [],
                                    trailColor: 'rgba(0, 2, 107, 0.315)',
                                    color: 'blue'
                                },


                            }}
                        />
                    </div>

                    <div className="box-progress" data-aos="zoom-in" data-aos-offset="125" data-aos-duration="1250">
                        <h5>AMBITION TO LEARN</h5>
                        <Progress className="opacity" percent={100} status="active"
                            theme={{

                                active: {
                                    symbol: [],
                                    trailColor: 'rgba(0, 2, 107, 0.315)',
                                    color: 'blue'
                                },


                            }}
                        />
                    </div>

                </div>
            </div >
        );
    }

}

export default Skills;