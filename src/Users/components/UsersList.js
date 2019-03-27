import UserItem from './userItem';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFoundRolesList } from '../action';

class UsersList extends React.Component {
  componentWillMount() {
    this.props.setFoundRolesList(this.props.foundRolesList)
  }
  render() {
    return (
        <div className="list">
        
            {this.props.foundRolesList.map(item => (          
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
  var foundRolesList = users.filter(item => {
    return (
      item.name.toLowerCase().search(filterText.toLowerCase()) !== -1
    );
  });
  return foundRolesList;
}

const mapStateToProps = state => ({
  foundRolesList: searchList(state.usersReducers.filteredRolesList, state.usersReducers.searchText)
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ setFoundRolesList: setFoundRolesList }, dispatch)
)(UsersList);



