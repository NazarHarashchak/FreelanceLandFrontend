import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import Message from './Message';
import PropTypes from 'prop-types';
import 'react-chat-elements/dist/main.css';


class ShowMessage extends Component {
    static propTypes = {
        messages: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render()
     {
        var counter = 0;
        return (
            <div>
                 {(this.props.messages) ? (this.props.messages.map(item =>  
                    <Message 
                    key={counter++}
                    item={item}/>)) : <div></div>
                }
            </div>
            )
    }
}

export default connect(
    state => state.messageReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(ShowMessage);