import React from "react";
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { Grid} from 'semantic-ui-react'
import "./taskbody.css";

class TaskDescription extends React.Component {
 
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
            <Comments taskId={this.props.id} customerId={this.props.customerId}/>
          </div>
        </div>
    );
  }
}

export default TaskDescription;
