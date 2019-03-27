import React from "react";
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../taskActions';

import "./taskbody.css";

class TaskDescription extends React.Component {
  constructor(props){
    super(props);

    this.closeTask = this.closeTask.bind(this);
  }

  closeTask(){
    this.props.closeMyTask(this.props.myTask.id).then(() => { 
      alert("The task is already closed");
});
  }

  render() {
    return (
        <div className="col-md-8">
        <div>
          <h1>
            <span id="task-title">
              <Link to="/tasks">Back to list</Link> > {this.props.myTask.title}
            </span>
          </h1>
          <form className="my-task-description" title="Send your commentar if you want to do "> 
              <div id="task-price">
                {this.props.myTask.price}$
              </div>
              <div id="task-desk">
              <h4>{this.props.myTask.taskCategory}</h4>
                <p wrap="soft">
                {this.props.myTask.description}
                </p>
              </div>
            </form>
            <Comments taskId={this.props.id} customerId={this.props.customerId}
             excecutorId={this.props.excecutorId}/>
             { localStorage.getItem("id") == this.props.customerId ? (
             <div id="close-task-button">
                <input type="button" id="close" value="Close task" onClick={this.closeTask}/>
             </div>) : null
             }
            </div>
        </div>
    );
  }
}

export default connect(
  state => state.taskProfilePage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(TaskDescription);
