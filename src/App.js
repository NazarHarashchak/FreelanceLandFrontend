import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Tasks from './tasks/components/Tasks';
import Layout from './components/Layout';
import MainPage from './mainPages/components/MainPage';
import LoginControl from './LoginPage/LoginControl';

export default () => (
  <Layout>
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/main' component={MainPage} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/ProfilePage'component={ProfileComponent}/>
        <Route path='/loginPage' component={LoginControl} />
  </Layout>
);
