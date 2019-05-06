import UserItem from './userItem';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestUsersList } from '../action';

class UsersList extends React.Component {

  render() {      
    return (
        <div className="list container-fluid">
            {this.props.usersList.map((item,index) => {   
                return(
                  <UserItem
                key={item.id}
                item={item}
                />
                );
              }    
            )}
        </div>
    );
  }
  
}
export default connect(
  dispatch => bindActionCreators({ requestUsersList: requestUsersList }, dispatch)
)(UsersList);



