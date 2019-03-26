import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Tasks from './tasks/components/Tasks';
import Layout from './components/Layout';
import MainPage from './mainPages/components/MainPage';
import LoginPage from './LoginPage/Login';
import RegistrationPage from './RegistrationPage/Registration';
import Task from './TaskInfo/components/TaskInf'
import ProfileComponent from './ProfilePage/components/ProfileComponent';
import Users from './Users/components/Users';
import MyPage from './MyPage/components/MyPage';
<<<<<<< HEAD
import ValidateUser from './RestorePassPage/components/ValidateUser';
=======
import MessagePage from './Messages/components/MessagePage';
import ChatRoom from './Messages/components/ChatRoom';
>>>>>>> a62a20955cf70ae06857982db2feaa97699be36b
import AddTaskPage from './addTaskPage/components/addTask';
export default () => (
  <Layout>
        <Route path='/main' component={MainPage} />
        <Route path='/home' component={MyPage} />
        <Route path='/tasks' component={Tasks} />
        <Route path='/ProfilePage/:id'component={ProfileComponent}/>
        <Route path='/loginPage' component={LoginPage} />
        <Route path='/registrationPage' component={RegistrationPage} />
        <Route path='/taskInf/:id' component={Task}/>
        <Route path='/restorePass' component={ValidateUser} />
        <Route path='/Users' component={Users} /> 
        <Route path='/Message' component={MessagePage} />
        <Route path='/ChatRoom/:id' component={ChatRoom} />
        <Route path='/AddTask' component={AddTaskPage} />
  </Layout>
);
