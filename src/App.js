import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Tasks from './tasks/components/Tasks';
import Layout from './components/Layout';
import MainPage from './mainPages/components/MainPage';
import LoginPage from './LoginPage/Login';
import RegistrationPage from './RegistrationPage/Registration';
import Task from './TaskInfo/components/TaskInf'
import ProfileComponent from './ProfilePage/components/ProfileComponent';
import Users from './Users/components/Users';
import MyPage from './MyPage/components/MyPage';
export default () => (
  <Layout>
        <Route path='/main' component={MainPage} />
        <Route path='/home' component={MyPage} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/ProfilePage/:id'component={ProfileComponent}/>
        <Route path='/loginPage' component={LoginPage} />
        <Route path='/registrationPage' component={RegistrationPage} />
        <Route path='/taskInf/:id' component={Task}/>
        <Route path='/Users' component={Users} />
  </Layout>
);
