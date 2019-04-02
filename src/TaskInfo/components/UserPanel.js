import React from "react";
import { Link } from 'react-router-dom';
import "./taskbody.css";

class UserPanel extends React.Component {

  render() {
    return (
      <div>
         <div className="right-row-panel">
          <div className="user-panel">
            <div className="top-row">Customer
            </div>
                  <div  className="row customer-photo-name" >
                    <div className="col-md-4 customer-photo ">
                      <img  src={require("./123.jpeg")} alt="фото користувача" width="80px"/>
                    </div>
                    <div className="col-md-8 customer-name" id="user-link" >
                      <Link to={`/ProfilePage/${this.props.customerId}`}>
                      {this.props.name 
                        + ' ' +  this.props.secName}
                      </Link>
                    </div>
                    
                  </div>

           </div>
           { this.props.excecutorId !== 0  ? (
             <div className="user-panel">
              <div className="top-row">Excecutor
              </div>
                <tbody id="user-table">
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
                </tbody>
             </div>):(null)
           }
            <div className="user-panel">
              <div className="top-row">Date added</div>
               <i className="fa fa-calendar-plus-o"></i>
                <label className="labelText">{this.props.dateAdded}</label>
            </div>
            <div className="user-panel">
              <div className="top-row">Task updated</div>
              <i className="fa fa-clock-o" ></i>
              <label className="labelText">{this.props.deadline}</label>
            </div>
            </div>
      </div>
    );
  }
}

export default UserPanel;
