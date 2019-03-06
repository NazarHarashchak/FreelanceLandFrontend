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
        <form>
          <div id="top-row">Customer</div>
          <table id="user-table">
            <tr id="bottom-row">
              <td>
                <div id="user-photo">
                <img src={require("./123.jpeg")} alt="фото користувача" width="80px"/></div>
              </td>
              <td>
                <Link to={`/ProfilePage/${this.props.users.id}`}>{this.props.users.name}</Link>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default connect(
  state => state.customerOfTask,
  dispatch => bindActionCreators(actionUserCreators, dispatch)
)(UserPanel);
