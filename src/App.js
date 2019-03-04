import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Tasks from './tasks/components/Tasks';
import Layout from './components/Layout';
import ProfileComponent from './ProfilePage/ProfileComponent'
import LoginControl from './LoginPage/LoginControl';
import Task from './TaskInfo/components/TaskInf'

export default () => (
  <Layout>
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/ProfilePage'component={ProfileComponent}/>
        <Route path='/loginPage' component={LoginControl} />
        <Route path='/taskInf/:id' component={Task}/>
  </Layout>
);
