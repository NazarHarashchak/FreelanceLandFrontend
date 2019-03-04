import React from 'react';
import ControlledCarousel from './Carousel';
import AboutUs from './AboutUs';
import Gallery from './TopUsers';
import { Component } from 'react';
import { connect } from 'react-redux';
import { } from 'react-bootstrap';
import '../mainPage.css';

class MainPage extends Component {
    render() {
        return (
            <div class="container">
                <div className="MainPage">
                    <ControlledCarousel />
                    <Gallery />
                    <AboutUs />
                </div>
            </div>
            );
    }
}


export default connect(
)(MainPage);
