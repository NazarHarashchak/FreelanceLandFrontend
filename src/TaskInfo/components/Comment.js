import React from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addExcecutor } from '../taskActions';
import { Icon } from 'semantic-ui-react';
import SweetAlert from 'sweetalert2-react';
import "./comments.css";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delete: false,
            showPop: false
        };
        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    deleteSubmit() {
        this.props.deleteComment(this.props.item.id)
            .then(() => {
                if (this.props.deleteCommentResponse !== null) { this.setState({ showPop: true }) }
            });
    }

    addExcecutorButton() {
    const userId = localStorage.getItem("id");
    const customerId = this.props.customerId;
    if (userId == customerId)
    {
        return(
          <div id="choose_excecutor">
            <input type="button" value="Choose"/>
          </div>
        );
    }
    else {
       return(
        <div></div>);
      }
  }

  saveExcecutor() {
    this.props.addAnExcecutor(this.props.item.userId, this.props.item.taskId);
  }

  render() {
    return (
        <div className="comentar">
            <SweetAlert
                show={this.state.showPop}
                type= 'success'
                title= 'Cool!'
                text='Comment was deleted successful!'
                confirmButtonColor='#075232'
                onConfirm={() => this.setState({ showPop: false })}
            />
            {localStorage.getItem('role') === "Moderator" ? 
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
          {this.addExcecutorButton()}
                <div id="content">
                  <label >{this.props.item.content}</label>
                </div>
        </form>
      </div>
    );
  }
}

export default  connect(
  state => state.addNewExcecutor,
  dispatch => bindActionCreators(addExcecutor, dispatch)
)(Comment);