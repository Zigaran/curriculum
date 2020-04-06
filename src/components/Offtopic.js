import React, { Component } from 'react';
import './Offtopic.css';


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
        var posicion = scrollPos * 3;
        // elemento.style.backgroundPosition = posicion + 'px' + ' ' + posicion + 'px'; 
        elemento.style.backgroundPosition = '0 ' + posicion + 'px';
    }



    render() {
        return (
            <div className="parallax" id="este" onScroll={this.handleScroll}>
                <div className="bg-plane">
                    <h1 className="centerText">OffTopic</h1>
                </div>
            </div>
        );
    }
}

export default Offtopic;