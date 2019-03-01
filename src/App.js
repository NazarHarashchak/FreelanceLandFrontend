import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Layout from './components/Layout';
import MainPage from './components/mainPages/MainPage';

export default () => (
  <Layout>
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/' component={MainPage} />
  </Layout>
);
