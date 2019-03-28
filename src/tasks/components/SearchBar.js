import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchTasksList } from '../actions';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  static propTypes = {
		searchTasksList:PropTypes.func.isRequired
	}
  
  render() {
    return (
      <div className="form-group has-search">
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
