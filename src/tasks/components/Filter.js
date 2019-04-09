import React from "react";
import CategoriesList from "./CategoriesList";
import { Button, Collapse } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCategOpenedStatus, changeFromPrice, changeToPrice, cleanFilter,requestTasksList } from '../actions';
import '../styles.css';
const ENTER_KEY = 13;

class Filter extends React.Component {

  handleChange = (e) => {
    e.target.name === "ToField" ? this.validateToPriceField(e) : this.validateFromPriceField(e)
  }

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      e.target.name === "ToField" ? this.validateToPriceField(e) : this.validateFromPriceField(e);
    }
  }
  validateFromPriceField = (e) => {
    let toPrice = this.props.filter.priceTo;
    let isValueNull = e.target.value === "";
    let isToPriceNull = toPrice === "";
    let fromPrice = parseInt(e.target.value, 10);
    toPrice = parseInt(toPrice, 10);
    let isgreaterZero = isValueNull ? true : fromPrice >= 0;
    let isLowerToPrice = isToPriceNull || isValueNull ? true : fromPrice <= toPrice;

    if (isgreaterZero && isLowerToPrice) {
      this.props.changeFromPrice(e.target.value);
      e.target.setCustomValidity("");
    }
    else {
      e.target.setCustomValidity("Value must be between 0 and ToPrice");
      e.target.reportValidity();
    }
  }

  validateToPriceField = (e) => {
    let fromPrice = this.props.filter.priceFrom;
    let isSomeNull = fromPrice === "" || e.target.value === "";
    fromPrice = parseInt(fromPrice, 10);
    let toPrice = parseInt(e.target.value, 10);
    if (isSomeNull ? true : toPrice >= fromPrice) {
      this.props.changeToPrice(e.target.value);
      e.target.setCustomValidity("");
    }
    else {
      e.target.setCustomValidity("Value must be greater FromPrice");
      e.target.reportValidity();
    }
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
                <CategoriesList 
                  categories={this.props.filter.categories} 
                  changeCheckedStatus={this.props.changeCheckedStatus} 
                  requestTasksList={this.props.requestTasksList}
                />
              </div>
            </Collapse>
          </div>
          <div className="form-group price-filter">
            <h5>Price:</h5>
            <div className="row">
              <div className="col-md-6">
                <input type="number"
                  name="FromField"
                  value={this.props.filter.priceFrom}
                  className="form-control"
                  placeholder="From"
                  id="from-price-filter"
                  onKeyDown={e => this.handleKeyDown(e)}
                  onChange={e => this.handleChange(e)}
                />
              </div>
              <div className="col-md-6">
                <input type="number"
                  value={this.props.filter.priceTo}
                  className="form-control"
                  placeholder="To"
                  name="ToField"
                  onKeyDown={e => this.handleKeyDown(e)}
                  onChange={e => this.handleChange(e)}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <h4 id="clear-filter-button" onClick={e => {e.preventDefault(); this.props.cleanFilter()}}>clean </h4>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  state => state.tasksReducers,
  dispatch => bindActionCreators(
    {
      changeCategOpenedStatus: changeCategOpenedStatus,
      changeFromPrice: changeFromPrice,
      changeToPrice: changeToPrice,
      cleanFilter: cleanFilter,
      requestTasksList: requestTasksList
    },
    dispatch)
)(Filter);
