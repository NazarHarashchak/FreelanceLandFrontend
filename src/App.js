import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Tasks from './tasks/components/Tasks';
import Layout from './components/Layout';

export default () => (
  <Layout>
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/tasks' component={Tasks} />
  </Layout>
);
