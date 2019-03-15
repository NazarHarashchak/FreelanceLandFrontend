import React, { Component } from 'react';
import UserImage from './userImage';
import { Item } from 'semantic-ui-react';


class UserItem extends Component {
    render() {
        return (
            <Item.Group link>
            <div class="media">
                <li className="j-order" >
                    <a href={`/ProfilePage/${this.props.item.id}`} >
                        <ul className="l-item-features">
                            <div class="media-left">
                                <UserImage />
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

export default UserItem; 