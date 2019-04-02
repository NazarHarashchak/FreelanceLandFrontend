import React from 'react';
import Footer from './Footer';
import './main.css';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './NavMenu';

export default props => (
    <Grid fluid>
        <Row>
            <Col >
                <NavMenu />
            </Col>
        </Row>
        <Row className="body-height">
            <Col>
                <div id="push50"></div>
            </Col>
            <Col>
                {props.children}
            </Col>
        </Row>
        
        <Row>
            <Col>
               <Footer />
            </Col>
        </Row>
  </Grid>
);
