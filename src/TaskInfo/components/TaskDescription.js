import React from "react";
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeMyTask } from '../taskActions';
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
        <div className="col-md-8" >
        <div>
          <div><Link to="/tasks">Back to list</Link> </div>
         
          <form className="my-task-description"> 
          
          <h1 id="task-title">
              {this.props.myTask.title}
          </h1>
          <hr id="hr-tag"/>
              <div id="task-price">
                {this.props.myTask.price}$
              </div>
              <div id="task-desk">
              <h4>
                <strong>Category:</strong> {this.props.myTask.taskCategory}
              </h4>
              <div id="push_block">
              </div>
                {this.props.myTask.description}
              </div>
            </form>
            <Comments taskId={this.props.id} customerId={this.props.customerId}
             excecutorId={this.props.excecutorId}/>
             { sessionStorage.getItem("id") == this.props.customerId ? (
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
  dispatch => bindActionCreators({closeMyTask:closeMyTask}, dispatch)
)(TaskDescription);
