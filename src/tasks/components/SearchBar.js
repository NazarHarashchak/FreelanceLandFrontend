import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchTasksList } from '../actions';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback"></span>
        <input type="text" 
          className="form-control" 
          placeholder="Search" 
          onChange={(e) => this.props.searchTasksList(e.target.value)} 
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchTasksList: searchTasksList }, dispatch);
}

export default connect(
  state => state.tasksReducers,
  mapDispatchToProps
)(SearchBar);
