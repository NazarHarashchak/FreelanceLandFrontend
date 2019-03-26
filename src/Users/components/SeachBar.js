import React from 'react';
import { searchUsersList } from '../action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class SearchBar extends React.Component {
  render() {
    return (
      <div className="form-group has-search">
        <input type="text" 
          className="form-control" 
          placeholder="Search" 
          onChange={(e) => this.props.searchUsersList(e.target.value)} 
          
        />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchUsersList: searchUsersList }, dispatch);
}

export default connect(
  state => state.usersReducers,
  mapDispatchToProps
)(SearchBar);