import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {actionCommentsCreators} from "../taskActions"

class Comments extends React.Component {
  componentWillMount(){
    this.props.requestComments(this.props.taskId);
    this.props.getImage(sessionStorage.getItem("id"));
  }

  addNewComment() {
    const myUserId = sessionStorage.getItem("id");
    if (myUserId === null){
       return (
         <div id="comment-eror">Sign in to add the comment</div>
       );}
   else { if (this.props.myTask.taskStatus === 'To do'){ return(
        <AddComment userId={myUserId} taskId={this.props.taskId} userphoto={this.props.myphoto}/>);}
      
      else {return(<div id="comments-error">You cant send the comments becuse this task is already started</div>);}}
  }
  render() {
    return (
      <div className="comments-panel">
        <div id="comments-title">Comments</div>
        {this.addNewComment()}
        <div className="comments">
          <ul width="100%" className="list-comments">
              <li>
                    {this.props.comments.map(item => (          
                      <Comment
                      key={item.id}
                      item={item}
                      customerId = {this.props.customerId}
                      excecutorId = {this.props.excecutorId}
                      task={this.props.myTask}
                      />
                    ))}
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.commentsTask,
  dispatch => bindActionCreators(actionCommentsCreators, dispatch)
)(Comments);