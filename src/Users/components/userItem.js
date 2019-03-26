import React, { Component } from 'react';
import UserImage from './userImage';
import { Item,Icon } from 'semantic-ui-react';
import  logo from './MyPhoto.jpg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators1 } from '../../ProfilePage/actions';

class UserItem extends Component {
    constructor(props) {
        super(props);
        }
        
    render() {
        return (
            <Item.Group link>
            <div className="media">
                <li className="j-order" >
                    <a href={`/ProfilePage/${this.props.item.id}`}>
                        <ul className="l-item-features">
                            <div className="media-left">
                                <img className="media-object" src={logo}  alt='Loading...'></img>
                            </div>

                            <div className="media-body">
                                <div className="media-heading">
                                    {this.props.item.name}
                                    {this.props.item.userRoleName}
                                </div>
                                <p className="info">
                                    {this.props.item.phone_Number}
                                </p>
                                   
                                <div className="description">
                                    {this.props.item.description}
                                </div>
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
    state => state.profilePage,
    dispatch => bindActionCreators(actionCreators1, dispatch)
  )(UserItem);