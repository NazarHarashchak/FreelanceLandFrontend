import React from 'react';
import { searchUsersList,requestUsersList } from '../action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class SearchBar extends React.Component {
  componentWillMount(){
    this.props.requestUsersList(1,this.props.searchText, this.props.roles);
  }
  render() {
    
    return (
      <div className="form-group has-search">
        <input type="text" 
          className="form-control" 
          placeholder="Search" 
          onChange={(e) => {this.props.searchUsersList(e.target.value);  } }
          
        />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestUsersList: requestUsersList, searchUsersList:searchUsersList }, dispatch);
}

export default connect(
  state =>( {
    page: state.tasksReducers.routing && 
    state.tasksReducers.routing.locationBeforeTransitions && 
    state.tasksReducers.routing.locationBeforeTransitions.query && 
    state.tasksReducers.routing.locationBeforeTransitions.query.page_no || 1,
    roles: state.usersReducers.roles,
    searchText:state.usersReducers.searchText
  }),
  mapDispatchToProps
)(SearchBar);