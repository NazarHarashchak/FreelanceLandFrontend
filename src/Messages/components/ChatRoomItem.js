import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';

class ChatRoomItem extends Component {        
    render() {
        return (
            <Item.Group link>
            <div className="media">
                <li className="j-order" >
                    <a href={`/ChatRoom/${this.props.item.id}`}>
                        <ul className="l-item-features">
                            <div className="media-body">
                                <div className="media-heading">
                                    {sessionStorage.getItem('login') !== this.props.item.firstUserLogin ?
                                        (this.props.item.firstUserName) : (this.props.item.secondUserName)}
                                </div>
                                <p className="info">
                                    {this.props.item.SecondUser}
                                </p>
                            </div>
                        </ul>
                    </a>
                </li>
            </div>
            </Item.Group>
        );
    }
}

export default connect(
    state => state.messageReducers,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(ChatRoomItem);