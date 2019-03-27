import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {actionCommentsCreators} from "../taskActions"
import "./comments.css";

class Comments extends React.Component {
  componentWillMount(){
    this.props.requestComments(this.props.taskId);
  }

  addNewComment() {
    const myUserId = sessionStorage.getItem("id");
    if (myUserId === null){
       return (
         <div id="comment-eror">Sign in to add the comment</div>
       );}
   else {
      return (
        <AddComment userId={myUserId} taskId={this.props.taskId}/>
        );}
  }
  render() {
    return (
      <div className="comments-panel">
        <div id="comments-title">Comments</div>
        {this.addNewComment()}
        <div className="comments">
          <ul width="100%">
              <li>
                    {this.props.comments.map(item => (          
                      <Comment
                      key={item.id}
                      item={item}
                      customerId = {this.props.customerId}
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