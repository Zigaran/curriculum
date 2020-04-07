import React, { Component } from 'react';
import './Offtopic.css';
import ReactPlayer from "react-player";


class Offtopic extends Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
    };


    handleScroll = e => {
        var elemento = document.getElementById('este');
        var obj = elemento.getBoundingClientRect();

        let scrollPos = obj.top;
        var posicion = scrollPos * 1.5;
        // elemento.style.backgroundPosition = posicion + 'px' + ' ' + posicion + 'px'; 
        elemento.style.backgroundPosition = '0 ' + posicion + 'px';
    }



    render() {
        return (
            <div className="parallax" id="este" onScroll={this.handleScroll}>
                <div className="offtopic-container">
                    <div className="offtopic-desc pad-block">
                        <h4 className="title">Little story</h4>
                        <h6 className="h6">In my childhood i liked videogames, photo and video editing. So i decided combine them.
                            <br />
                            <br />
                            Let me show you a little video so you know what i'm talking about.
                            <br />
                            <br />
                            My nickname was or is 'Simetrik'.
                            <br />
                            <br />
                            I chose that name because i consider myself an orderer person, and 'Simetrik'
                            is an allusion of simetric. Just child stuff haha.
                        </h6>
                    </div>
                    <ReactPlayer className="youtubeVideo" url="https://www.youtube.com/watch?v=q6yRA6U0Y_0" controls={true} />
                </div>
            </div >
        );
    }
}

export default Offtopic;