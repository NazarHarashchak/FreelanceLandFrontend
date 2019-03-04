import React from "react";
import Comment from "./Comment";

import "./comments.css";

class Comments extends React.Component {
  render() {
    return (
      <div>
      <div className="comments">
      <ul>
            <div id="comentar">
              <li>
                <Comment date='22.03.2019' description='some commentar' user='Anton'/>
              </li>
            </div>
        </ul>
      </div></div>
    );
  }
}

export default Comments;