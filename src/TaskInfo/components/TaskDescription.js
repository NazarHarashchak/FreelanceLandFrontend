import React from "react";
import ReactDOM from "react-dom";

import "./taskbody.css";

class TaskDescription extends React.Component {

  render() {
    return (
      <div>
        <div className="col-md-4">
          <h1>
            <span id="task-title">
              <a href="">All tasks</a> > {this.props.taskt.title}
            </span>
          </h1>
          <ol className="status-list">
            <li className="Done">
              <div>Published</div>
            </li>
            <li>
              <div> > Waiting for an excecutor</div>
            </li>
            <li>
              <div> > In progres</div>
            </li>
            <li>
              <div />
            </li>
          </ol>
          <form asp-action="" method="post" className="task-description">
            <div id="adding-date">
              <label>Added: {this.props.taskt.date}</label>
            </div>
            <div id="task-price">{this.props.taskt.price}$</div>
            <div id="task-desk">
              <p>
              {this.props.taskt.description}
              </p>
            </div>
            <div id="deadline">Deadline: {this.props.taskt.deadline}</div>
            <input id="get-button" type="submit" value="Get it" />
          </form>
        </div>
      </div>
    );
  }
}

export default TaskDescription;
