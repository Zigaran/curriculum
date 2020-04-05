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
        console.log(obj.top);

        let scrollPos = obj.top;
        var posicion = scrollPos * 2;
        elemento.style.backgroundPosition = posicion + 'px' + ' ' + posicion + 'px';

        // console.log(elemento);
    }



    render() {
        return (
            <div className="parallax" id="este" onScroll={this.handleScroll}>
                {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
                <script src="parallax.js"> </script> */}
                <div className="bg-plane">
                    <h1 className="centerText">OffTopic</h1>
                </div>
            </div>
        );
    }
}

export default Offtopic;