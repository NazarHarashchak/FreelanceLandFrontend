import UserItem from './userItem';
import React from 'react';

class UsersList extends React.Component {
  render() {
    return (
        <div className="list">
        
            {this.props.usersList.map(item => (          
                <UserItem
                key={item.id}
                item={item}
                />
            ))}
        </div>
    );
  }
}

export default UsersList;
