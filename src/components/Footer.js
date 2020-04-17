import React, { Component } from 'react';
import NodeImg from '../images/node.png';
import ReactImg from '../images/React.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h6 className="">Made with</h6>
                <img className="footer-img2" src={ReactImg} alt="ReactJS" />
                <img className="footer-img3" src={NodeImg} alt="NodeJs" />
            </div>
        );
    }
}

export default Footer;