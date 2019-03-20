import React from "react";
import { Link } from 'react-router-dom';

import "./comments.css";

class Comment extends React.Component {
  addExcecutorButton() {
    const userId = localStorage.getItem("id");
    const customerId = this.props.customerId;
    if (userId == customerId)
    {
        return(
          <div id="choose_excecutor">
            <input type="button" value="Choose"  onClick={this.saveExcecutor()}/>
          </div>
        );
    }
    else {
       return(
        <div></div>);
      }
  }

  saveExcecutor() {
    
  }

  render() {
    return (
      <div className="comentar">
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
          {this.addExcecutorButton()}
                <div id="content">
                  <label >{this.props.item.content}</label>
                </div>
        </form>
      </div>
    );
  }
}

export default Comment;