import React, { Component } from "react";

import UserPanel from './UserPanel'; 
import TaskDescription from './TaskDescription';
import Comments from './Comments';

class Task extends React.Component {
    render() {
        return (
            <div className="task-body">
                <div>
                        <UserPanel id={this.props.match.params.id} />
                        <TaskDescription name={this.props.match.params.id}/>
                        <Comments taskId={this.props.match.params.id}/>
                </div>
            </div>
        );
    }
}

export default Task;