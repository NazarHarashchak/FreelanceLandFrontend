import React from "react";
import './Footer.css';
import { Icon } from "semantic-ui-react";

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid footer-size">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 footer-text">
                            <h4>Freelance Land</h4>
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
                            <Icon href="#" className="fa fa-facebook-square"></Icon>
                            <Icon href="#" className="fa fa-twitter-square"></Icon>
                            <Icon href="#"className="fa fa-google-plus-square"></Icon>
                            <Icon href="#" className="fa fa-linkedin-square"></Icon>

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