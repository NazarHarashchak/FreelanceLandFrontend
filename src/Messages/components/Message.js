import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import { MessageBox } from 'react-chat-elements';
import PropTypes from 'prop-types';
import '../message.css';

class Message extends Component {
    static propTypes = {
        item: PropTypes.shape({
            
        })
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div className = "messageBoxItem">
                <MessageBox
                    dateString={this.props.item.dateAndTime}
                    position={(sessionStorage.getItem('login') !== this.props.item.senderLogin) ? 'left' : 'right'}
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