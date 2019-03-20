import React, { Component } from "react";
import UserPanel from './UserPanel';
import TaskDescription from './TaskDescription';
import Comments from './Comments';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../taskActions';

class Task extends React.Component {

    componentWillMount() {
        this.props.requestTaskForecasts(this.props.match.params.id);
    }

    render() {
        return (
            <div className="task-body">
                <div>
                    <UserPanel id={this.props.match.params.id} myTask={this.props.forecasts} />
                    <TaskDescription myTask={this.props.forecasts} url={this.props.match.url} />
                    <Comments taskId={this.props.match.params.id} />
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.taskProfilePage,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Task);