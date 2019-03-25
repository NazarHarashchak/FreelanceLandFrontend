import React, { Component } from 'react';
import './ProfilePage.css';
import  logo from './MyPhoto.jpg';
import {  Image } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators1 } from '../actions';
import Avatar from 'react-avatar';
import * as signalR from '@aspnet/signalr';

class ProfilePage extends Component {
     constructor(props) {
     super(props);
     }

     componentDidMount()
     {    if(sessionStorage.getItem('tokenKey')&& sessionStorage.getItem('id') == this.props.id)
         { let hubUrl = 'https://localhost:44332/notification';
          const hubConnection = new signalR.HubConnectionBuilder()
               .withUrl(hubUrl, { accessTokenFactory: () => sessionStorage.getItem('tokenKey')})
               .configureLogging(signalR.LogLevel.Information)
               .build();

          hubConnection.on("Receive", function (message, userName) {
 
               let userNameElem = document.createElement("b");
               userNameElem.appendChild(document.createTextNode(userName + ": "));
    
               let elem = document.createElement("p");
               elem.appendChild(userNameElem);
               elem.appendChild(document.createTextNode(message));
    
               var firstElem = document.getElementById("chatroom").firstChild;
               document.getElementById("chatroom").insertBefore(elem, firstElem);
           });

          hubConnection.on('Notify', function (message) {
             
               let notifyElem = document.createElement("b");
               notifyElem.appendChild(document.createTextNode(message));
               let elem = document.createElement("p");
               elem.appendChild(notifyElem);
               var firstElem = document.getElementById("chatroom").firstChild;
               document.getElementById("chatroom").insertBefore(elem, firstElem);
           });

          document.getElementById("sendBtn").addEventListener("click", function (e) {
               let message = document.getElementById("message").value;
               let to = document.getElementById("receiver").value;
               hubConnection.invoke("Send", message, to);
           });

          hubConnection.start()
               .then(() => console.info('SignalR Connected'))
               .catch(err => console.error('SignalR Connection Error: ', err));}
     }

     render() {
     this.props.getImage(this.props.id);
     var img = this.props.image;

     return (
          <div id="avatar">
               {(img !== "") ? (<Avatar name="Avatar" src={img} round={10} size={300}/>) : (<Avatar name="Avatar" src={logo} round={10} size={300}/>)}
          {(sessionStorage.getItem('tokenKey')&& sessionStorage.getItem('id') == this.props.id) ? (<div><div id="inputForm">
               <input type="text" id="message" placeholder="Enter message" />
               <input type="text" id="receiver" placeholder="Enter receiver" />
               <input type="button" id="sendBtn" value="Send" />
          </div>
          <div id="chatroom"></div></div>) : (<div></div>)}
          </div>
     )}
}

export default connect(
     state => state.profilePage,
     dispatch => bindActionCreators(actionCreators1, dispatch)
   )(ProfilePage);