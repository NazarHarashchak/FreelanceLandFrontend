import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Layout from './components/Layout';
import LoginControl from './LoginPage/LoginControl';

export default () => (
  <Layout>
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/loginPage' component={LoginControl} />
  </Layout>
);
