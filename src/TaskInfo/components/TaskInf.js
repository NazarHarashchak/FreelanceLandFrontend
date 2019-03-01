import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../taskActions';

import UserPanel from './UserPanel'; 
import TaskDescription from './TaskDescription';
import Comments from './Comments';

class Task extends React.Component {

    componentWillMount() {
    // This method runs when the component is first added to the page
       this.props.requestTaskForecasts();
    }

    render() {
        return (
            <div className="task-body">
                <div>
                        <UserPanel name={""}/>
                        <TaskDescription taskt={this.props.forecasts}/>
                        <Comments />
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.taskForecasts,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Task);