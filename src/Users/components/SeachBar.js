import React from 'react';
import { searchUsersList } from '../action';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const { API_KEY } = process.env
const API_URL = 'http://api.musicgraph.com/api/v2/artist/suggest'

class SearchBar extends React.Component {
  render() {
    return (
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" 
          class="form-control" 
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