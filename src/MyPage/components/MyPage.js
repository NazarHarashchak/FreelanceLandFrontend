import React, { Component } from 'react';

import Tabs from './Tabs';
import MainPage from '../../mainPages/components/MainPage';
import Login from '../../LoginPage/Login';

require('./styles.css');
class MyPage extends Component {
  
    render() {
      return (
        <div>
        <h1>My Page</h1>
        <Tabs>
          <div label="Anctive tasks">
            <MainPage></MainPage>
          </div>
          <div label="History">
            <Login></Login>
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