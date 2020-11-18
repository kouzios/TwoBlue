import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Logo from '../assets/images/logo.png';
import GitHub from '../assets/images/github.png';

const Footer = ({ ...props }) => {
    return (
        <div>
            <hr/>
            <Row id="header" className="d-flex justify-content-center">
                <Col className="d-flex justify-content-center">
                    <img className="footer-logo" src={Logo} alt="logo"/>
                    <span id="footer-sitename">TwoBlue</span>
                </Col>
                <Col className="d-flex justify-content-center">
                    <img className="clickable github" src={GitHub} alt="Github Link" onClick={()=>window.location.replace("https://github.com/kouzios")}/>
                    <span id="footer-name">Matthew Kouzios</span>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;