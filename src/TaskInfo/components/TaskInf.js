import React, { Component } from "react";
<<<<<<< HEAD
import UserPanel from './UserPanel'; 
import TaskDescription from './TaskDescription';
import { Link } from 'react-router-dom';
=======
import UserPanel from './UserPanel';
import TaskDescription from './TaskDescription';
import Comments from './Comments';
>>>>>>> 981503df10a22c297207eee1b423af24b191c1d6
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../taskActions';

class Task extends React.Component {

    componentWillMount() {
        this.props.requestTaskForecasts(this.props.match.params.id);
    }

    render() {
        return (
<<<<<<< HEAD
            <div className="container-fluid">
                        <div className="col-md-1"></div>
                        <TaskDescription myTask={this.props.forecasts} url={this.props.match.url} 
                                            id={this.props.match.params.id}
                                            customerId={this.props.forecasts.customerId}/>
                        <UserPanel id={this.props.match.params.id} name={this.props.forecasts.customerName}
                                    secName={this.props.forecasts.customerSecondName}
                                    customerId={this.props.forecasts.customerId}
                                    dateAdded={this.props.forecasts.date}
                                    deadline={this.props.forecasts.deadline}/>
=======
            <div className="task-body">
                <div>
                    <UserPanel id={this.props.match.params.id} myTask={this.props.forecasts} />
                    <TaskDescription myTask={this.props.forecasts} url={this.props.match.url} />
                    <Comments taskId={this.props.match.params.id} />
                </div>
>>>>>>> 981503df10a22c297207eee1b423af24b191c1d6
            </div>
        );
    }
}

export default connect(
    state => state.taskProfilePage,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Task);