import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchTasksList, requestTasksList } from '../actions';

class SearchBar extends React.Component {
  
  render() {
    return (
      <div className="form-group has-search">
        <input type="text" 
          className="form-control" 
          placeholder="Search"
          onChange={(e) => {this.props.searchTasksList(e.target.value); this.props.requestTasksList(this.props.page,this.props.filter, e.target.value, this.props.control);}} 
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchTasksList: searchTasksList , requestTasksList:requestTasksList}, dispatch);
}

export default connect(
  state => ({
    page: state.tasksReducers.curPage,
    filter: state.tasksReducers.filter,
    search: state.tasksReducers.search
  }),
  mapDispatchToProps
)(SearchBar);
