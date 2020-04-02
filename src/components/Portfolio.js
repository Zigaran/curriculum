import React, { Component } from 'react';
import './Portfolio.css';
import Tasks from '../images/Task-Manager.png';
import Simon from '../images/SimonSays.png';
import Thai from '../images/Thailand.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="row-or-column">

                    <div className="box-image m-right">
                        <img className="image" src={Tasks} />
                    </div>

                    <div className="box-image">
                        <img className="image" src={Simon} />
                    </div>

                </div>

                <div className="box-image m-top">
                    <img className="image" src={Thai} />
                </div>


            </div>
        );
    }
}

export default Portfolio;