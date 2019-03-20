import React, { Component } from "react";
import UserPanel from './UserPanel'; 
import TaskDescription from './TaskDescription';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../taskActions';

class Task extends React.Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
           this.props.requestTaskForecasts(this.props.match.params.id);
        }

    render() {
        return (
            <div className="container-fluid">
                        <TaskDescription myTask={this.props.forecasts} url={this.props.match.url} 
                                            id={this.props.match.params.id}
                                            customerId={this.props.forecasts.customerId}/>
                        <UserPanel id={this.props.match.params.id} name={this.props.forecasts.customerName}
                                    secName={this.props.forecasts.customerSecondName}
                                    customerId={this.props.forecasts.customerId}
                                    dateAdded={this.props.forecasts.date}
                                    deadline={this.props.forecasts.deadline}/>
            </div>
        );
    }
}

export default connect(
    state => state.taskProfilePage,
    dispatch => bindActionCreators(actionCreators, dispatch )
    )(Task);