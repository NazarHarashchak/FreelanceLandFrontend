import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../taskActions';

import "./taskbody.css";

class TaskDescription extends React.Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
       this.props.requestTaskForecasts(this.props.name);
    }
 
  render() {
    return (
      <div>
        <div className="col-md-4">
          <h1>
            <span id="task-title">
              <Link to="/tasks">All tasks</Link> > {this.props.forecasts.title}
            </span>
          </h1>
          <ol className="status-list">
                <li className="first-status">
                  <div>Published</div>
                </li>
                <li className="third-status">
                  <div> > Waiting for an excecutor</div>
                </li>
                <li className="third-status">
                  <div> > In progres</div>
                </li>
                <li>
                  <div />
                </li>
              </ol>
          <form asp-action="" className="task-description">
            <div id="adding-date">
              <label>Added: {this.props.forecasts.dateAdded}</label>
            </div>
            <div id="task-price">{this.props.forecasts.price}$</div>
            <div id="task-desk">
              <p>
              {this.props.forecasts.description}
              </p>
            </div>
            <div id="deadline">Deadline: {this.props.forecasts.deadline}</div>
            <input id="get-button" type="submit" value="Get it" />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.taskProfilePage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(TaskDescription);
