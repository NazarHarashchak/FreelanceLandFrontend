import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import { MessageBox } from 'react-chat-elements';
import '../message.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div class = "messageBoxItem">
                <MessageBox
                    dateString={this.props.item.dateAndTime}
                    data = {new Date()}
                    position={(localStorage.getItem('login') != this.props.item.senderLogin) ? 'left' : 'right'}
                    type={'text'}
                    text={this.props.item.content}
                    data={{
                        status: {
                            click: false,
                            loading: 0,
                            }
                }}/>
            </div>
        )
    }
}

export default connect(
    state => state.messageReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Message);