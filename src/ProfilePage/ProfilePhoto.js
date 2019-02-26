import React, { Component } from 'react';
import './ProfilePage.css';
import  logo from './MyPhoto.jpg';
class ProfilePage extends Component {
  render() {
   return (
     <div className="container-fluid">
       <div className="row">
        <img className="photo-user photo" src={logo} alt='aa'></img>
      
        </div>
      </div>

    
   )}
}

export default ProfilePage;
