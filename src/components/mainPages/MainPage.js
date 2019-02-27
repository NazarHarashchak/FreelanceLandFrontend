import React from 'react';
import headerimg from './headerImg.jpeg';
import ControlledCarousel from './Carousel';
import { Component } from 'react';
import { connect } from 'react-redux';
import { } from 'react-bootstrap';


class MainPage extends Component {
    render() {
        return (
        <div className="MainPage">
            <ControlledCarousel />
        </div>
            );
    }
}


export default connect(
)(MainPage);
