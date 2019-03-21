import React, { Component } from 'react';
import apiService from '../../services/apiService';
import { Tab } from 'semantic-ui-react'
import Tasks from './ActiveTasks';
import Login from '../../LoginPage/Login'
import PersonalInfo from '../../ProfilePage/components/PersonalInfo';
import ProfileComponent from './ProfilePage';
const panes = [
  { menuItem: 'Active tasks', render: () => <Tab.Pane attached={false}></Tab.Pane> },
  { menuItem: 'History', render: () => <Tab.Pane attached={false}><Tasks></Tasks></Tab.Pane> },
  { menuItem: 'My information', render: () => <Tab.Pane attached={false}><ProfileComponent id={sessionStorage.getItem('id')}></ProfileComponent></Tab.Pane> },
]

const MyPage = () => <Tab menu={{ pointing: true }} panes={panes} />

  
  export default MyPage;


  sessionStorage.getItem('id');