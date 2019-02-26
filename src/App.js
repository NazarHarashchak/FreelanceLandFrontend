import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Layout from './components/Layout';
import ProfileComponent from './ProfilePage/ProfileComponent'

export default () => (
  <Layout>
        <Route path='/fetchdata' component={FetchData} />
        <Route path='/ProfilePage'component={ProfileComponent}/>
  </Layout>
);
