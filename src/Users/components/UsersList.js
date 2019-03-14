import UserItem from './userItem';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../action';
import { setFoundTasksList } from '../action';

class UsersList extends React.Component {
  componentWillMount() {
    this.props.setFoundTasksList(this.props.foundTaskList)
  }
  render() {
    return (
        <div className="list">
        
            {this.props.foundTask.List.map(item => (          
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
  var foundTaskList = users.filter(item => {
    return (
      item.name.toLowerCase().search(filterText.toLowerCase()) !== -1
    );
  });
  return foundTaskList;
}

const mapStateToProps = state => ({
  foundTaskList: searchList(state.usersReducers.filteredTaskList, state.usersReducers.searchText)
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ setFoundTasksList: setFoundTasksList }, dispatch)
)(UsersList);



