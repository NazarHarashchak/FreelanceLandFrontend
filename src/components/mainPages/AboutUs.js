import React from 'react';
import { } from 'react-bootstrap';
import './HowItWork.css';

class AboutUs extends React.Component {
    render() {
        return (
        <div class="container">
            <div class="row timeline">
            <div class="col timeline">
            Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.
            </div>
            <div class="col timeline-6">
            <img
        className="rounded-circle"
        src={require('../../img/HowItWork/4.PNG')}
    alt="Third slide" />
        </div>
    <div class="col timeline">
    3 of 3
    </div>
    </div>
    <div class="row timeline">
    <div class="col timeline">
    1 of 3
    </div>
    <div class="col timeline-5">
    <img
    className="rounded-circle"
    src={require('../../img/HowItWork/4.PNG')}
alt="Third slide" />
    </div>
    <div class="col timeline">
    Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.
    </div>
    </div>
    <div class="row timeline">
    <div class="col timeline">
    Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.
    </div>
    <div class="col timeline-6">
    <img
className="rounded-circle"
src={require('../../img/HowItWork/4.PNG')}
alt="Third slide" />
    </div>
    <div class="col timeline">
    3 of 3
    </div>
    </div>
    <div class="row timeline">
    <div class="col timeline">
    1 of 3
    </div>
    <div class="col timeline-5">
    <img
className="rounded-circle"
src={require('../../img/HowItWork/4.PNG')}
alt="Third slide" />
    </div>
    <div class="col timeline">
    Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.
    </div>
    </div>
    </div>
        );
    }
}

export default AboutUs;