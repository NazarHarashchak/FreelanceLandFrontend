import React from "react";
import { Col, Grid, Nav, NavItem, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer-size">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-text">
                            <h3>Freelance Land</h3>
                        </div>
                        <div className="col-md-2 footer-text">
                            <h4>Service rules</h4>
                        </div>
                        <div className="col-md-2 footer-text">
                            <h4>Help</h4>
                        </div>
                        <div className="col-md-2 footer-text">
                            <h4>Support</h4>
                        </div>
                        <div className="col-md-3">
                            <a href="#" className="fa fa-facebook-square"></a>
                            <a href="#" className="fa fa-twitter-square"></a>
                            <a href="#" className="fa fa-google-plus-square"></a>
                            <a href="#" className="fa fa-linkedin-square"></a>

                        </div>
                    </div>
                    <div>
                        <p className="copyright">&copy; 2019 - Freelance Land</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;