import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

import "./taskbody.css";

class TaskDescription extends React.Component {
 
  render() {
    return (
        <div className="col-md-4">
          <h1>
            <span id="task-title">
              <Link to="/tasks">Back to list</Link> > {this.props.myTask.title}
            </span>
          </h1>
          <form className="task-description" title="Send your commentar if you want to do "> 
              <div id="task-price">
                {this.props.myTask.price}$
              </div>
              <div id="task-desk">
              <h3>Some task category</h3>
                <p wrap="soft">
                {this.props.myTask.description}
                </p>
              </div>
            </form>
        </div>
    );
  }
}

export default TaskDescription;
