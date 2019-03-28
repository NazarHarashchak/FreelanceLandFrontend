import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCheckedStatus } from '../actions';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  static propTypes = {
		categories:PropTypes.arrayOf (
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        isChecked: PropTypes.bool.isRequired
      }).isRequired
    ).isRequired
  }
  
  render() { 
    return (
      <div>
        {this.props.categories.map(category => (
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

const mapStateToProps = state => ({
  categories: state.tasksReducers.filter.categories
})

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CategoriesList);
