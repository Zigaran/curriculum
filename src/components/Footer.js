import React, { Component } from 'react';
import HtmlImg from '../images/html.png';
import CssImg from '../images/css.png';
import ReactImg from '../images/React.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h6 className="">Made with</h6>
                <img className="footer-img1" src={HtmlImg} />
                <img className="footer-img2" src={CssImg} />
                <img className="footer-img3" src={ReactImg} />
            </div>
        );
    }
}

export default Footer;