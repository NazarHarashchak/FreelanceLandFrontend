import React, { Component } from 'react';
import UserImage from './userImage';
import { Item } from 'semantic-ui-react';


 class UserItem extends Component {
    render() {
        return (
            <Item.Group link>
            <div  className="media">
                <li className="j-order" >
                    <a href={`/ProfilePage/${this.props.item.id}`} >
                        <ul className="l-item-features">
                            <div  className="media-left">
                                <UserImage />
                            </div>

                            <div  className="media-body">
                                <div  className="media-heading">
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