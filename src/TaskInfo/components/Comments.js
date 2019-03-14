import React from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {actionCommentsCreators} from "../commentAction"

import "./comments.css";

class Comments extends React.Component {
  componentWillMount(){
    this.props.requestComments(this.props.taskId);
  }
  render() {
    return (
      <div className="comments-panel">
        <div id="comments-title">Comments</div>
        <AddComment userId='1' taskId={this.props.taskId}/>
        <div className="comments">
          <ul width="100%">
              <li>
                    {this.props.comments.map(item => (          
                      <Comment
                      key={item.id}
                      item={item}
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