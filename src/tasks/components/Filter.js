import React from "react";
import CategoriesList from "./CategoriesList";
import { Button, Collapse } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCategOpenedStatus, changePrice, cleanFilter, requestTasksList } from '../actions';
import '../styles.css';
const ENTER_KEY = 13;

class Filter extends React.Component {
  constructor(props) {
    super();

    this.state = {
      toValue: '',
      fromValue: '',
      isValid: null,
      errorMsg: null,
      edit: true
    };
  }

  static propTypes = {
    changeCategOpenedStatus: PropTypes.func.isRequired,
    changePrice: PropTypes.func.isRequired,
    cleanFilter: PropTypes.func.isRequired,
    requestTasksList: PropTypes.func.isRequired,
    isCategOpened: PropTypes.bool.isRequired,
    tasksAreLoading: PropTypes.bool.isRequired,
    filter: PropTypes.shape({
      categories: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.string.isRequired,
          isChecked: PropTypes.bool.isRequired
        }).isRequired
      ).isRequired,
      priceFrom: PropTypes.number.isRequired,
      priceTo: PropTypes.number.isRequired,
    }).isRequired,
  }

  timer = null

  contains(parent, child) {
    if (!child || !child.parentElement) return false;
    if (child.parentElement === parent) return true;

    return this.contains(parent, child.parentElement);
  }

  handleBlur(e) {
    const target = e.relatedTarget;
    const parent = e.currentTarget;
    if (!this.contains(parent, target)) {
      let isValid = this.triggerChange();
      this.setState({
        ...this.state,
        edit: false,
        isValid: isValid
      });
    }
  }

  handleFocus(e) {
    this.setState({
      ...this.state,
      edit: true,
    });
  }

  handleChange = e => {
    this.setState(e.target.name === "ToField" ?
      { ...this.state, toValue: parseInt(e.target.value, 10) } :
      { ...this.state, fromValue: parseInt(e.target.value, 10) }
    )
  }

  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      this.triggerChange(e);
    }
  }

  triggerChange(self) {
    let fromValue = this.state.fromValue;
    let toValue = this.state.toValue;
    if (fromValue === '') { fromValue = 0 };
    if (toValue === '') { toValue = 0 };
    let isValid = this.validatePriceFileds(fromValue, toValue);
    if (isValid) {
      this.props.changePrice({ fromValue: fromValue, toValue: toValue });
    }
    return isValid;
  }


  validatePriceFileds(fromPrice, toPrice) {
    let isValid = false;
    (fromPrice >= 0 && (fromPrice <= toPrice || toPrice === 0)) ? isValid = true : isValid = false;
    return isValid;
  }


  onCleanFilter(e) {
    e.preventDefault();
    this.setState({ ...this.state, toValue: '', fromValue: '', isValid: null });
    this.props.cleanFilter();
  }

  render() {
    return (
      <div className="well" id="filter">
        <h3>Task Filter</h3>
        <form>
          <div className="form-group">
            <Button
              onClick={this.props.changeCategOpenedStatus}
              aria-controls="collapse-categories"
              aria-expanded={this.props.isCategOpened}
              id="toggleCatBtn" >
              <h5>Categories</h5>
            </Button>
            <Collapse in={this.props.isCategOpened}>
              <div id="collapse-categories">
                {this.props.tasksAreLoading === true ? <h3>Loading data...</h3> :
                  <CategoriesList />
                }
              </div>
            </Collapse>
          </div>
          <div className="form-group price-filter">
            <h5>Price:</h5>
            {this.state.isValid || this.state.isValid === null ? "" :
              <div>
                <span className="fa fa-warning" ></span>
                <span className="validate-error-text">Value must be between 0 and ToPrice</span>
              </div>
            }
            <div className={`row ${this.state.isValid || this.state.isValid === null ? '' : 'has-error'}`} onFocus={(e) => this.handleFocus(e)} onBlur={(e) => this.handleBlur(e)} tabIndex="1">
              <div className="col-md-6">
                <input type="number"
                  value={this.state.fromValue}
                  name="FromField"
                  className="form-control"
                  placeholder="From"
                  id="from-price-filter"
                  onKeyDown={e => this.handleKeyDown(e)}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <div className="col-md-6">
                <input type="number"
                  value={this.state.toValue}
                  className="form-control"
                  placeholder="To"
                  name="ToField"
                  onKeyDown={e => this.handleKeyDown(e)}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <h4 id="clear-filter-button" onClick={e => this.onCleanFilter(e)}>clean </h4>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    isCategOpened: state.tasksReducers.isCategOpened,
    filter: state.tasksReducers.filter,
    tasksAreLoading: state.tasksReducers.tasksAreLoading
  });
}


export default connect(
  mapStateToProps,
  dispatch => bindActionCreators(
    {
      changeCategOpenedStatus: changeCategOpenedStatus,
      changePrice: changePrice,
      cleanFilter: cleanFilter,
      requestTasksList: requestTasksList
    },
    dispatch)
)(Filter);
