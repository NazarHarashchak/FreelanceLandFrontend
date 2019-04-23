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
    this.finishTask = this.finishTask.bind(this);
  }

  closeTask(){
    this.props.closeMyTask(this.props.myTask.id).then(() => { 
      alert("Success");
      document.location.reload();
});
  }

  finishTask(){
    this.props.finishMyTask(this.props.myTask.id).then(() => { 
      alert("Success");
      document.location.reload();
});
  }
GetStatusList(){
     switch(this.props.myTask.taskStatus){
        case "To do":
          return(
            <div id="status-panel">
                <ul className="my_list">
                  <li className="first-status col-md-2">
                    To do
                  </li>
                  <li className="third-status col-md-3" id="in_progress">
                    In progress
                  </li>
              < li className="third-status col-md-4" id="ready_for">
                Ready for verification 
              </li>
                  <li className="third-status col-md-2" id="done">
                    Done
                  </li>
                </ul>
            </div>
          );
        case "In progress":
          return(<div id="status-panel">
          <ul className="my_list">
            <li className="second-status col-md-2">
              To do 
            </li>
            <li className="first-status col-md-3" id="in_progress">
              In progress 
            </li>
              < li className="third-status col-md-4" id="ready_for">
                Ready for verification 
              </li>
            <li className="third-status col-md-2" id="done">
              Done
            </li>
          </ul>
      </div>);
        case "Done":
          return(<div id="status-panel">
          <ul className="my_list">
            <li className="second-status col-md-2">
              To do 
            </li>
            <li className="second-status col-md-3" id="in_progress">
              In progress 
            </li>
              < li className="second-status col-md-4" id="ready_for">
                Ready for verification 
              </li>
            <li className="first-status col-md-2" id="done">
              Done
            </li>
          </ul>
      </div>);
        case "Ready for verification":
            return(<div id="status-panel">
            <ul className="my_list">
              <li className="second-status col-md-2">
                To do 
              </li>
              <li className="second-status col-md-3" id="in_progress">
                In progress 
              </li>
              < li className="first-status col-md-4" id="ready_for">
                Ready for verification 
              </li>
              <li className="third-status col-md-2" id="done">
                Done
              </li>
            </ul>
        </div>

            );
     }
}
  render() {
    return (
        <div className="conteiner">
          <div><Link to="/tasks">Back to list</Link> </div>
           <div className="my-status-list row">{this.GetStatusList()}</div><div className="row">
          <form className="my-task-description" title="Send a comment to start working"> 
          <div>
          <h1 id="task-title">
              {this.props.myTask.title}
          </h1>
          { (sessionStorage.getItem("id") == this.props.customerId) 
                  && (this.props.myTask.taskStatus === "To do") ?
          <div id="edit-button">
            <Link to={`/editTask/${this.props.myTask.id}`}>
            <i className="fa fa-edit" id="edit" title="Change task"/></Link>
          </div> : <div> </div>}
          </div>
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
            {this.props.myTask.taskStatus !== "Done" ? 
            
            <Comments taskId={this.props.id} customerId={this.props.customerId}
             excecutorId={this.props.excecutorId} myTask={this.props.myTask}/> :
             <div></div>
            }
             { (sessionStorage.getItem("id") == this.props.customerId) 
                  && ((this.props.myTask.taskStatus !== "Done") 
                  && (this.props.myTask.taskStatus !== "In progress")) ? (
             <div id="close-task-button">
                <input type="button" id="close" value="Close task" onClick={this.closeTask}/>
             </div>) : null
             }
             { (sessionStorage.getItem("id") == this.props.excecutorId) 
                  && (this.props.myTask.taskStatus == "In progress")  ? (
             <div id="close-task-button">
                <input type="button" id="close" value="Finish task" onClick={this.finishTask}/>
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
