import React from "react";

import "./comments.css";

class Comment extends React.Component {
  render() {
    return (
      <div>
        <form>
                <p>{this.props.date}</p>
                <p>{this.props.description}</p>
                <p>{this.props.user}</p>
        </form>
      </div>
    );
  }
}

export default Comment;