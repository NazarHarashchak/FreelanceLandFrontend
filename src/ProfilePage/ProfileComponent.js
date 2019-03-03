import React, { Component } from 'react';
import './ProfilePage.css';
import ProfilePhoto from './ProfilePhoto';
import ActiveTasks from './ActiveTasks';
import History from './History';
import PersonalInfo from './PersonalInfo'


class ProfileComponent extends Component {
  render() {
    return (
    <div className="personal_form">
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-4 photo ">
              <ProfilePhoto />
          </div>

          <div className="col-md-2">
          </div>

          <div className="col-md-6 personal-info">
              <PersonalInfo/>        
          </div>

        </div>

        <div className="active-tasks">
            <ActiveTasks/>
        </div>

        <div className="history">
          <History/>
        </div>
     </div> 
     
      </div>  
    );
  }
}

export default ProfileComponent;
