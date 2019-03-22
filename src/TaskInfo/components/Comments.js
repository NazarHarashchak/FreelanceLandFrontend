import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {actionCommentsCreators} from "../taskActions"

import "./comments.css";
import { AccordionTitle } from "semantic-ui-react";

class Comments extends React.Component {
  componentWillMount(){
    this.props.requestComments(this.props.taskId);
  }

  addNewComment() {
    const myUserId = localStorage.getItem("id");
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
<<<<<<< HEAD
        {this.addNewComment()}
        <div className="comments">
=======
        <AddComment userId='1' taskId={this.props.taskId}/>
        <div className="comments" id="comments">
>>>>>>> 981503df10a22c297207eee1b423af24b191c1d6
          <ul width="100%">
              <li>
                    {this.props.comments.map(item => (          
                      <Comment
<<<<<<< HEAD
                      key={item.id}
                      item={item}
                      customerId = {this.props.customerId}
=======
                                key={item.id}
                                item={item}
                                requestDelete={this.props.requestDelete}
                                taskId={this.props.taskId}
>>>>>>> 981503df10a22c297207eee1b423af24b191c1d6
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