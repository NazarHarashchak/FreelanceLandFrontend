import React, { Component } from 'react';
import './ProfilePage.css';
import ProfilePhoto from './ProfilePhoto';
import ActiveTasks from './ActiveTasks';
import History from './History';
import PersonalInfo from './PersonalInfo'


class ProfileComponent extends Component {
  render() {
    return (
    <div class="personal_form">
      <div class="container-fluid">
        <div class="row">

          <div class="col-md-4 photo ">
              <ProfilePhoto />
          </div>

          <div class="col-md-8 personal-info">
              <PersonalInfo/>        
          </div>

        </div>

        <div class="active-tasks">
            <ActiveTasks/>
        </div>

        <div class="history">
          <History/>
        </div>
     </div> 
     
      </div>  
    );
  }
}

export default ProfileComponent;
