import React, { Component } from 'react';
import logo from './Logo-adalab.png';
import './Footer.css';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <p className="name" href="">
                    Olatz Aranzabe© 2018
                </p>
                <a className="footer__link-img-adalab" href="">
                    <img className="footer__img-adalab" src={logo} alt="Logo adalab" />
                </a>
            </footer>
        );
    }
}

export default Footer;