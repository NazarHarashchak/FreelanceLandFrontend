import React from "react";

import "./comments.css";

class Comment extends React.Component {
  render() {
    return (
      <div>
        <form>
                <p><label id="date">{this.props.item.date}</label>
                <label id="user-name">{this.props.item.userName}</label></p>
                <p><label id="content">{this.props.item.content}</label></p>
        </form>
      </div>
    );
  }
}

export default Comment;