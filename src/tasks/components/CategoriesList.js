import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCheckedStatus, requestTasksList } from '../actions';

class CategoriesList extends React.Component {
  
  componentDidUpdate() {
    this.props.requestTasksList(this.props.page, this.props.filter, this.props.searchText);
  }

  render() { 
    return (
      <div>
        {this.props.filter.categories.map(category => (
          <label 
          key={category.type}>
            <input
              type="checkbox"
              name={category.type}
              onChange={(e) => {this.props.changeCheckedStatus(e.target.name);} }
              checked={category.isChecked}
            />
            {category.type}
          </label>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    filter: state.tasksReducers.filter,
    searchText: state.tasksReducers.searchText
  }),
  dispatch => bindActionCreators({ requestTasksList: requestTasksList, changeCheckedStatus:changeCheckedStatus }, dispatch)
)(CategoriesList);
