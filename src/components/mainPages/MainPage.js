import React from 'react';
import ControlledCarousel from './Carousel';
import Gallery from './TopUsers';
import { Component } from 'react';
import { connect } from 'react-redux';
import { } from 'react-bootstrap';


class MainPage extends Component {
    render() {
        return (
        <div className="MainPage">
                <ControlledCarousel />
                <Gallery />
        </div>
            );
    }
}


export default connect(
)(MainPage);
