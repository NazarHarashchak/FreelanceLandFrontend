import React from 'react';
import ControlledCarousel from './Carousel';
import HowItWork from './HowItWork';
import Gallery from './TopUsers';
import { requestTop } from '../actions';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from 'react-bootstrap';
import '../mainPage.css';

class MainPage extends Component {
    
    componentWillMount(){
        this.props.requestTop();
    }

    render() {
        return (
            <div className="container">
                <div className="MainPage">
                    <ControlledCarousel />
                    <HowItWork />
                    {this.props.isLoading===true ? <h3>Loading data...</h3> : <Gallery />}
                </div>
            </div>
            );
    }
}

function mapStateToProps(state) {
    return ({
        users: state.topUsers.users,
        isLoading: state.topUsers.isLoading
    });
}


export default connect(
    mapStateToProps,  
    dispatch => bindActionCreators({requestTop:requestTop}, dispatch)
)(MainPage);
