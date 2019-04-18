import React from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addExcecutor } from '../taskActions';
import { Icon } from 'semantic-ui-react';
import SweetAlert from 'sweetalert2-react';
import  logo from './123.jpeg';
import "./comments.css";

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: 'Excecutor is already added',
            showPop: false
        }
        this.deleteClick = this.deleteClick.bind(this);
        this.deleteSubmit = this.deleteSubmit.bind(this);
        this.saveExcecutor = this.saveExcecutor.bind(this);
    }

    deleteSubmit() {
        this.setState({ showPop: false });
        this.props.deleteComment(this.props.item.id);
        //document.location.replace('taskInf/' + this.props.item.taskId);
    }

    deleteClick() {
        this.setState({ showPop: true });
    }

    saveExcecutor(event) {
        this.props.addAnExcecutor(this.props.item.userId, this.props.item.taskId).then(() => {
            alert(this.state.success);
            document.location.reload();
        });;
        event.preventDefault();
    }

    render() {
        return (
            <div className="comentar">
                <SweetAlert
                    show={this.state.showPop}
                    type='warning'
                    title='Are you sure?'
                    text="You won't be able to revert this!"
                    showCancelButton={true}
                    confirmButtonColor='#075232'
                    cancelButtonColor='#ffff00'
                    confirmButtonText='Yes, delete it!'
                    onConfirm={this.deleteSubmit}
                />
                {sessionStorage.getItem('role') === "Moderator" ?
                    (
                        <button id="delete" onClick={this.deleteClick}>
                            <Icon name='trash alternate'></Icon>
                        </button>)
                    :
                    (null)}
        <form>
          <table className="comment-title">
          <tbody>
              <tr> 
                <td>
                    <div id="comment-user-photo"> 
                    { (this.props.item.photo !== "empty") ? 
                      <img src={this.props.item.photo} alt="user photo" width="100%" />:
                      <img src={logo} alt="user photo" width="100%" />}
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
              </tbody>
          </table>
          { (sessionStorage.getItem("id") == this.props.customerId) && (this.props.excecutorId === 0) ?(
                    <div id="choose_excecutor">
                        <form>
                          <input type="button" value="Choose" id="choose-button" title="Add an excecutor"
                           onClick={this.saveExcecutor} />
                      </form>
                   </div>
                  ):(
                       <div></div>)
                    }
                    <div id="content">
                        <label >{this.props.item.content}</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    state => state.addNewExcecutor,
    dispatch => bindActionCreators(addExcecutor, dispatch)
)(Comment);
