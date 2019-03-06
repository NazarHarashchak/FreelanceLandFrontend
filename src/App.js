import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Tasks from './tasks/components/Tasks';
import Layout from './components/Layout';
import MainPage from './mainPages/components/MainPage';
import LoginControl from './LoginPage/LoginControl';
import Task from './TaskInfo/components/TaskInf'
import ProfileComponent from './ProfilePage/components/ProfileComponent';
import Users from './Users/components/Users';

export default () => (
  <Layout>
        <Route path='/main' component={MainPage} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/ProfilePage/:id'component={ProfileComponent}/>
        <Route path='/loginPage' component={LoginControl} />
        <Route path='/taskInf/:id' component={Task}/>
        <Route path='/Users' component={Users} />
  </Layout>
);
