import React, { Component } from 'react';

import Tabs from './Tabs';
import MainPage from '../../mainPages/components/MainPage';
import Login from '../../LoginPage/Login';
import Tasks from '../../tasks/components/Tasks';
import ProfileComponent from '../../ProfilePage/components/ProfileComponent';
import PersonalInfo from '../../ProfilePage/components/PersonalInfo';
require('./styles.css');
class MyPage extends Component {
  
    render() {
      return (
        <div>
        <h1>My Page</h1>
        <Tabs>
          <div label="Anctive tasks">
            <Tasks></Tasks>
          </div>
          <div label="History">
            <ProfileComponent id="6"></ProfileComponent>
          </div>
          <div label="My information">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </div>
      );
    }
  }
  
  export default MyPage;