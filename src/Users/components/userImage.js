import React ,{ Component } from 'react';
import  logo from './MyPhoto.jpg';

 class UserImage extends Component {
  render() {
   return (
     <div className="container-fluid">
     
        <img  className="media-object" src={logo}  alt='Loading...'></img>
       
      </div>

    
   )}
}
export default UserImage;
