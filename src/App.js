import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Layout from './components/Layout';

export default () => (
  <Layout>
        <Route path='/fetchdata' component={FetchData} />
  </Layout>
);
