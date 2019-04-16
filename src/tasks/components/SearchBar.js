import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchTasksList, requestTasksList } from '../actions';

class SearchBar extends React.Component {

  static propTypes = {
    searchTasksList: PropTypes.func.isRequired,
    requestTasksList: PropTypes.func.isRequired,
    filter: PropTypes.shape({
      categories: PropTypes.arrayOf (
          PropTypes.shape({
            type: PropTypes.string.isRequired,
            isChecked: PropTypes.bool.isRequired
          }).isRequired
        ).isRequired,
      priceFrom: PropTypes.number.isRequired,
      priceTo: PropTypes.number.isRequired,
    }).isRequired,      
    search: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired
  }

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
  return bindActionCreators({ searchTasksList: searchTasksList, requestTasksList: requestTasksList }, dispatch);
}

export default connect(
  state => ({
    page: state.tasksReducers.curPage,
    filter: state.tasksReducers.filter,
    search: state.tasksReducers.search
  }),
  mapDispatchToProps
)(SearchBar);
