import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCheckedStatus } from '../actions';

class CategoriesList extends React.Component {

  render() { 
    return (
      <div>
        {this.props.filter.categories.map(category => (
          <label 
          key={category.type}>
            <input
              type="checkbox"
              name={category.type}
              onChange={(e) => this.props.changeCheckedStatus(e.target.name)}
              checked={category.isChecked}
            />
            {category.type}
          </label>
        ))}
      </div>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeCheckedStatus,
    },
    dispatch);
}

export default connect(
  state => state.tasksReducers,
  matchDispatchToProps
)(CategoriesList);
