import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { } from 'react-bootstrap';
import '../HowItWork.css';

class HowItWork extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <br/>
                            <h2 className="section-heading text-uppercase">How it works</h2>
                        <br/>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-registered fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Register on our website</h4>
                        <p className="text-muted">Create personal cabinet and order or execute work.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-edit fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Post a job (it’s free)</h4>
                        <p className="text-muted">Tell us about your project. Upwork connects you with top talent around the world, or near you.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="far fa-address-card fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Freelancers come to you</h4>
                        <p className="text-muted">Get qualified proposals within 24 hours. Compare bids, reviews, and prior work. Interview favorites and hire the best fit.</p>
                    </div>
                    <div className="col-md-3">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fas fa-comments fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Collaborate easily</h4>
                        <p className="text-muted">Use Upwork to chat or video call, share files, and track project milestones from your desktop or mobile.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowItWork;