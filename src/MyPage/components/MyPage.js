import React from 'react';
import { Tab } from 'semantic-ui-react'
import ActiveTasks from './ActiveTasks';
import ProfileComponent from './ProfilePage';
import History from './History';
import CreatedTasks from './CreatedTask';
const panes = [
  { menuItem: 'Active tasks', render: () => <Tab.Pane attached={false}><ActiveTasks></ActiveTasks></Tab.Pane> },
  {menuItem: 'Created tasks', render: () => <Tab.Pane attached={false}><CreatedTasks></CreatedTasks></Tab.Pane>},
  { menuItem: 'History', render: () => <Tab.Pane attached={false}><History></History></Tab.Pane> },
  { menuItem: 'My information', render: () => <Tab.Pane attached={false}><ProfileComponent 
                id={sessionStorage.getItem('id')}></ProfileComponent></Tab.Pane> },
]

const MyPage = () => <Tab menu={{ pointing: true }} panes={panes} />

  
export default MyPage;

sessionStorage.getItem('id');

