import React from "react";
import { Col, Grid, Nav, NavItem, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Grid>
                <Nav>
                    <Row>
                        <Col sm={2}>
                            <NavItem>
                                <h3>Freelance Land</h3>
                            </NavItem>
                        </Col>
                        <Col sm={2}>
                        </Col>
                        <Col sm={2}>
                            <NavItem>
                                <strong>Service rules</strong>
                            </NavItem>
                        </Col>
                        <Col sm={2}>
                            <NavItem>
                                <strong>Help</strong>
                            </NavItem>
                        </Col>
                        <Col sm={2}>
                            <NavItem>
                                <strong>Support</strong>
                            </NavItem>
                        </Col>
                        <Col sm={2}>
                            <a href="#" className="fa fa-facebook-square"></a>
                            <a href="#" className="fa fa-twitter-square"></a>
                            <a href="#" className="fa fa-google-plus-square"></a>
                            <a href="#" className="fa fa-linkedin-square"></a>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                            <p className="copyright">&copy; 2019 - Freelance Land</p>
                        </Col>
                    </Row>
                </Nav>
            </Grid>
        </footer>
    );
}

export default Footer;