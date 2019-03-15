import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionUserCreators } from '../userAction';
import "./taskbody.css";

class UserPanel extends React.Component {
  componentWillMount() {
    // This method runs when the component is first added to the page
       this.props.requestUser(this.props.id);
    }

  render() {
    return (
      <div className="right-panel">
          <div className="user-panel">
            <div className="top-row">Customer
            </div>
              <table id="user-table">
                <tr id="bottom-row">
                <td>
                  <div id="user-photo">
                    <img src={require("./123.jpeg")} alt="фото користувача" width="80px"/>
                  </div>
                  </td>
                  <td>
                    <span id="user-link"> <Link to={`/ProfilePage/${this.props.users.id}`}>
                    <i className="fa fa-address-book"></i>{this.props.users.name 
                      + ' ' +  this.props.users.sur_Name}
                    </Link></span>
                  </td>
                </tr>
              </table>
           </div>
            <div className="user-panel">
              <div className="top-row">Date added</div>
               <i className="fa fa-calendar-plus-o"></i>
                <label>{this.props.myTask.dateAdded}</label>
            </div>
            <div className="user-panel">
              <div className="top-row">Project deadline</div>
              <i className="fa fa-clock-o" ></i>
              <label>{this.props.myTask.deadline}</label>
            </div>
            <div className="user-panel">
              <div className="top-row">
                Same project
              </div>
              <div>
                
              </div>
            </div>
      </div>
    );
  }
}

export default connect(
  state => state.customerOfTask,
  dispatch => bindActionCreators(actionUserCreators, dispatch)
)(UserPanel);
