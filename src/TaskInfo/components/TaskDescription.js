import React from "react";
import { Link } from 'react-router-dom';
import Comments from './Comments';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeMyTask,finishMyTask, rateUser } from '../taskActions';
import "./taskbody.css";
import { Rating } from 'semantic-ui-react'
import Modal from 'react-awesome-modal';
import SweetAlert from 'sweetalert2-react';

class TaskDescription extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible : false,
      rate:0,userNotRate: false}

    this.closeTask = this.closeTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
  }

  closeTask(){

    console.log(this.state.rating)
    if(this.state.rating===undefined){
      this.closeModal();
      this.setState({ userNotRate: true })
    }
    else{
    this.props.closeMyTask(this.props.myTask.id).then(() => { 
      this.props.rateUser(this.props.customerId,this.props.excecutorId,this.state.rating);
      this.setState({ rate: true })
      this.closeModal();
});
  }}

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
handleRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })
openModal() {
  this.setState({
      visible : true
  });
}

closeModal() {
  this.setState({
      visible : false
  });
}
col(event){
  console.log(event.target.defaultRating);
}

  render() {
    return (
        <div>
          <SweetAlert
                        show={this.state.userNotRate}
                        title="Rate freelancer"
                        type = 'warning'
                        confirmButtonColor='#075232'
                        onConfirm={() =>( this.setState({ userNotRate: false }), this.openModal())}
                    />
          <section>
                <Modal visible={this.state.visible} width="200" height="200" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                      <h1>Rate freelancer</h1>
                    <Rating id="rate" icon='star' size='massive' maxRating={5} onRate={this.handleRate} />
                        <button id="rateButton"  readOnly={this.state.rea} onClick={this.closeTask}>Close/Rate</button>
                    </div>
                </Modal>
            </section>
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
                <input type="button" id="close" value="Close task" onClick={() => this.openModal()}/>
             </div>) : null
             }
             { (sessionStorage.getItem("id") == this.props.excecutorId) 
                  && (this.props.myTask.taskStatus == "In progress")  ? (
             <div id="close-task-button">
                <input type="button" id="close" value="Finish task" onClick={this.finipop0shTask}/>
             </div>) : null
             }
             </div>
            </div>
    );
  }
}

export default connect(
  state => state.taskProfilePage,
  dispatch => bindActionCreators({closeMyTask:closeMyTask, rateUser:rateUser, finishMyTask:finishMyTask}, dispatch)
)(TaskDescription);
