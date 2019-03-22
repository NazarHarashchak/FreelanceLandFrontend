import React, { Component } from 'react';
import UserImage from './userImage';
import { Item } from 'semantic-ui-react';
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
            <div class="media">
                <li className="j-order" >
                    <a href={`/ProfilePage/${this.props.item.id}`}>
                        <ul className="l-item-features">
                            <div class="media-left">
                                <img class="media-object" src={logo}  alt='Loading...'></img>
                            </div>

                            <div class="media-body">
                                <div class="media-heading">
                                    {this.props.item.name}
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