import UserItem from './userItem';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../action';
import { setFoundUsersList } from '../action';

class UsersList extends React.Component {
  componentWillMount() {
    this.props.setFoundUsersList(this.props.foundUserList)
  }
  render() {
    return (
        <div className="list">
        
            {this.props.foundUserList.map(item => (          
                <UserItem
                key={item.id}
                item={item}
                />
            ))}
        </div>
    );
  }
}
function searchList(users, filterText) {
  var foundUserList = users.filter(item => {
    return (
      item.name.toLowerCase().search(filterText.toLowerCase()) !== -1
    );
  });
  return foundUserList;
}

const mapStateToProps = state => ({
  foundUserList: searchList(state.usersReducers.filteredUserList, state.usersReducers.searchText)
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ setFoundUsersList: setFoundUsersList }, dispatch)
)(UsersList);



