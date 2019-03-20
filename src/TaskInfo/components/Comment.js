import React from "react";
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import "./comments.css";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    deleteSubmit() {
        this.props.requestDelete(this.props.item.id);
        document.location.replace('taskInf/'+ this.props.taskId);
    }


  render() {
    return (
        <div className="comentar">
            {sessionStorage.getItem('role') === "Moderator" ? 
                (
                    <button id="delete" onClick={this.deleteSubmit}>
                        <Icon name='trash alternate'></Icon>
                    </button>)
                    :
                    (null)}
        <form>
          <table className="comment-title">
              <tr> 
                <td>
                    <div id="comment-user-photo"> 
                    <img src={require("./123.jpeg")} alt="фото користувача" width="100%" />
                    </div>
               </td>
               <td>  
                 <div className="date">
                  <label id="comment-date"> 
                  <i className="fa fa-calendar-plus-o"></i>{this.props.item.date}</label>
                 </div></td>
                 <td>
                  <Link to={`/ProfilePage/${this.props.item.userId}`}>
                    <label id="user-name">{this.props.item.userName}</label>
                  </Link>
              </td>
              </tr>
          </table>
                <div id="content">
                  <label >{this.props.item.content}</label>
                </div>
        </form>
      </div>
    );
  }
}

export default Comment;