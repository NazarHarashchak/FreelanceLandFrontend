import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import ChatRoomContainer from './ChatRoomContainer';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatRoomInfo: ""
        };
    }

    componentWillMount()
    { 
        this.props.requestMessages(this.props.match.params.id);
        this.props.requestChatRoomInfo(this.props.match.params.id);
    }


    render() {
      
        return(
            <div>
               {(sessionStorage.getItem('tokenKey') && this.props.chatRoomInfo) ? (<ChatRoomContainer roomId = {this.props.match.params.id} roomInfo = {this.props.chatRoomInfo} messages = {this.props.messages}/>) : <div></div>}
            </div>
        )
    }
}

export default connect(
    state => state.messageReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ChatRoom);