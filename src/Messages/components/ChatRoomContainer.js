import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import * as signalR from '@aspnet/signalr';
import ShowMessages from './ShowMessages';
import { MessageBox } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

class ChatRoomContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if(localStorage.getItem('tokenKey'))
        { let hubUrl = 'https://localhost:44332/chat';
         const hubConnection = new signalR.HubConnectionBuilder()
              .withUrl(hubUrl, { accessTokenFactory: () => localStorage.getItem('tokenKey')})
              .configureLogging(signalR.LogLevel.Information)
              .build();

         hubConnection.on("Receive", function (message, userName) {
              var time = new Date();
              this.setState({newMessages: [...this.state.newMessages,<MessageBox
                                                dateString={time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()}
                                                position={(localStorage.getItem('login') != userName) ? 'left' : 'right'}
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
            
          }.bind(this));

         var roomId = this.props.roomId;
         console.log("room id " + this.props.roomId);
         console.log(this.props.roomInfo);
         let to = "";
         if(this.props.roomInfo.firstUserLogin != localStorage.getItem('login'))
            to = this.props.roomInfo.firstUserLogin; 
         else
            to = this.props.roomInfo.secondUserLogin;
        
            console.log(to);
         document.getElementById("sendBtn").addEventListener("click", function (e) {
              let message = document.getElementById("message").value;
              
              hubConnection.invoke("Send",roomId, message, localStorage.getItem('id'), to);
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
            <div>
               {(localStorage.getItem('tokenKey')) ? (<div>
                    <div id="chatroom"><ShowMessages messages={this.state.messages} isLoading={this.props.isLoading}/>
                        <div id="newMessagesContainer">
                        {this.state.newMessages.map(el => el)}
                        </div>
                        <div id="inputForm">
                            <input type="text" id="message" placeholder="Enter message" />
                            <input type="button" id="sendBtn" value="Send" />
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