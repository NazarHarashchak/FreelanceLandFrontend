import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import * as signalR from '@aspnet/signalr';
import ShowMessages from './ShowMessages';
import { MessageBox } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';
import '../message.css';

class ChatRoomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            newMessages: [],
            messages: [],
            hubConnection: null
        };
    }

    componentWillMount()
    { 
        this.setState({messages: this.props.messages});
    }

    componentDidMount()
    { 
        this.scrollToBottom();
        if (sessionStorage.getItem('tokenKey'))
        { let hubUrl = 'https://localhost:44332/chat';
         const hubConnection = new signalR.HubConnectionBuilder()
             .withUrl(hubUrl, { accessTokenFactory: () => sessionStorage.getItem('tokenKey')})
              .configureLogging(signalR.LogLevel.Information)
              .build();

         hubConnection.on("Receive", function (message, userName) {
              var time = new Date();
              var currentTime = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
              this.setState({counter: 1+this.state.counter});
              this.setState({newMessages: [...this.state.newMessages,<MessageBox
                                                dateString={currentTime}
                                                key={this.state.counter}
                                                position={(sessionStorage.getItem('login') !== userName) ? 'left' : 'right'}
                                                type={'text'}
                                                text={message}
                                                data={{
                                                    status: {
                                                        click: false,
                                                        loading: 0,
                                                        }
                                            }}/>
              ]});
          }.bind(this));
         hubConnection.on('Notify', function (message) {
          });

         var roomId = this.props.roomId;
         let to = "";
         if(this.props.roomInfo.firstUserLogin !== sessionStorage.getItem('login'))
            to = this.props.roomInfo.firstUserLogin; 
         else
            to = this.props.roomInfo.secondUserLogin;
        
         document.getElementById("sendBtn").addEventListener("click", function (e) {
              let message = document.getElementById("message").value;
              document.getElementById("message").value="";
              hubConnection.invoke("Send",roomId, message, sessionStorage.getItem('id'), to);
          });
         hubConnection.start()
              .then(() => console.info('SignalR Connected'))
              .catch(err => console.error('SignalR Connection Error: ', err));
            
         this.setState({hubConnection: hubConnection});     
            }
    }

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }



    render() {
      
        return(
            <div id="messageContainer">
               {(sessionStorage.getItem('tokenKey')) ? (<div>
                    <div id="chatroom"><ShowMessages messages={this.state.messages} isLoading={this.props.isLoading}/>
                        <div id="newMessagesContainer">
                        {this.state.newMessages.map(el => el)}
                        </div>
                        <div id="inputForm">
                            <input type="text" id="message" placeholder="Enter message" />
                            <button id="sendBtn" value="Send">Send</button>
                        </div>
                        <div style={{ float:"left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>
                    </div>
                </div>) : (<div></div>)}
            </div>
        )
    }
}

export default connect(
    state => state.messageReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ChatRoomContainer);