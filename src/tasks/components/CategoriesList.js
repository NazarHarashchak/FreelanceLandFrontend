import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCheckedStatus, requestTasksList } from '../actions';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {

  static propTypes = {
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
    page: PropTypes.number.isRequired,
    requestTasksList: PropTypes.func.isRequired,
    changeCheckedStatus: PropTypes.func.isRequired
  }

  componentDidUpdate() {
    this.props.requestTasksList(this.props.page, this.props.filter, this.props.search,this.props.control);
  }

  render() { 
    return (
      <div>
        {this.props.filter.categories.map(category => (
          <label key={category.type}>
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
    search: state.tasksReducers.search,
    page: state.tasksReducers.curPage
  }),
  dispatch => bindActionCreators({ requestTasksList: requestTasksList, changeCheckedStatus:changeCheckedStatus }, dispatch)
)(CategoriesList);
