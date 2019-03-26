import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import ChatRoomItem from './ChatRoomItem';

class ChatRoomList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount()
    { 
    }

        
    render() {
        return (
            <div>
                {(this.props.chatRoomsList) ? (this.props.chatRoomsList.map(item =>  
                    <ChatRoomItem  
                    key={item.id}
                    item={item}/>)) : <div></div>
                }
            </div>
            )
    }
}

export default connect(
    state => state.messageReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(ChatRoomList);