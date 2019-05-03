import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import  logo from '../../store/default-logo.jpg';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators1 } from '../../ProfilePage/actions';
import { Rating } from 'semantic-ui-react'

class UserItem extends Component {
   
    
    render() {
        return (
            <Item.Group link>
            <div className="media">
                <li className="j-order" >
                    <a href={`/ProfilePage/${this.props.item.id}`}>
                        <ul className="l-item-features">
                            <div className="media-left">
                            { (this.props.item.userPhoto != "empty") ?
                                <img className="media-object" src={this.props.item.userPhoto}  alt='User photo'></img>
                               :
                               <img className="media-object" src={logo} alt="User photo"></img>
                            }
                                </div>

                            <div className="media-body">
                                <div className="row media-heading">
                                    <div className="col-md-2">
                                        {this.props.item.name}
                                    </div>
                                
                                    <div className="col-md-2">
                                        <Rating maxRating={5} defaultRating={this.props.item.rating} icon='star' size='huge' disabled/>

                                    </div>
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