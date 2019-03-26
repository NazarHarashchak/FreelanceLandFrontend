import React, { Component } from 'react';
import './ProfilePage.css';
import  logo from './MyPhoto.jpg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators1 } from '../actions';
import Avatar from 'react-avatar';

class ProfilePage extends Component {
     constructor(props) {
     super(props);
     }

    

     render() {
     this.props.getImage(this.props.id);
     var img = this.props.image;
     return (
          <div id="avatar">
               <div id="CurrentAvatar">{(img !== "empty") ? (<Avatar name="Avatar" src={img} round={10} size={300} />) : (<Avatar name="Avatar" src={logo} round={10} size={300}/>)}</div>
          </div>
     )}
}

export default connect(
     state => state.profilePage,
     dispatch => bindActionCreators(actionCreators1, dispatch)
   )(ProfilePage);