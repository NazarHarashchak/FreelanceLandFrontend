import React, { Component } from "react";
import UserPanel from './UserPanel';
import TaskDescription from './TaskDescription';
import Comments from './Comments';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../taskActions';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    componentWillMount() {
        this.props.requestTaskForecasts(this.props.match.params.id);
    }

    deleteSubmit() {
        console.log("Started");
        this.props.requestDelete(this.props.match.params.id)
            .then(() => {
                if (this.props.deleteTaskResponse === null) { console.log("Bad attemp!"); }
                else {
                    console.log("Deleted");
                }
            });
    }

    render() {
        return (
            <div className="task-body">
                {localStorage.getItem('role') === "Moderator" ?
                    (
                        <button id="delete" onClick={this.deleteSubmit}>
                            Delete task
                        </button>
                    ) : (null)}
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