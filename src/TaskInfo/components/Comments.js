import React from "react";
import Comment from "./Comment";
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
      <div className="comments">
        <ul width="100%">
            <div id="comentar">
              <li>
            {this.props.comments.map(item => (          
                <Comment
                key={item.id}
                item={item}
                />
            ))}
              </li>
            </div>
        </ul>
      </div>
      <div id="add-comment">
        <form>
              <input type="text" width ="100%"/>
              <input type="submit" />
        </form>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.commentsTask,
  dispatch => bindActionCreators(actionCommentsCreators, dispatch)
)(Comments);