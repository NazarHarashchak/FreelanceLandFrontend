import React from "react";
import { Link } from 'react-router-dom';
import "./taskbody.css";

class UserPanel extends React.Component {

  render() {
    return (
      <div className="col-md-3">
         <div className="right-row-panel">
          <div className="user-panel">
            <div className="top-row">Customer
            </div>
              <table id="user-table">
              <tbody>
                <tr id="bottom-row">
                  <td>
                  <div id="user-photo">
                    <img src={require("./123.jpeg")} alt="фото користувача" width="80px"/>
                  </div>
                  </td>
                  <td>
                    <span id="user-link"> <Link to={`/ProfilePage/${this.props.customerId}`}>
                    <i className="fa fa-address-book"></i>{this.props.name 
                      + ' ' +  this.props.secName}
                    </Link></span>
                  </td>
                </tr>
                </tbody>
              </table>
           </div>
           { this.props.excecutorId !== 0  ? (
             <div className="user-panel">
              <div className="top-row">Excecutor
              </div>
                <table id="user-table">
                  <tr id="bottom-row">
                    <td>
                    <div id="user-photo">
                      <img src={require("./123.jpeg")} alt="фото користувача" width="80px"/>
                    </div>
                    </td>
                    <td>
                      <span id="user-link"> <Link to={`/ProfilePage/${this.props.excecutorId}`}>
                      <i className="fa fa-address-book"></i>{this.props.exName 
                        + ' ' +  this.props.exSecName}
                      </Link></span>
                    </td>
                  </tr>
                </table>
             </div>):(null)
           }
            <div className="user-panel">
              <div className="top-row">Date added</div>
               <i className="fa fa-calendar-plus-o"></i>
                <label>{this.props.dateAdded}</label>
            </div>
            <div className="user-panel">
              <div className="top-row">Task updated</div>
              <i className="fa fa-clock-o" ></i>
              <label>{this.props.deadline}</label>
            </div>
            <div className="user-panel">
              <div className="top-row">
                Similar project
              </div>
              <div>
              </div>
            </div>
            </div>
      </div>
    );
  }
}

export default UserPanel;
