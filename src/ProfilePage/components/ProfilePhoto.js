import React, { Component } from 'react';
import './ProfilePage.css';
import  logo from './MyPhoto.jpg';
import {  Image } from 'semantic-ui-react'

class ProfilePage extends Component {
  render() {
   return (
        <Image className="photo-user photo" src={logo} alt='aa'></Image>
   )}
}

export default ProfilePage;
