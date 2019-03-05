import React from "react";
import CategoriesList from "./CategoriesList";
import { Button, Collapse } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCategOpenedStatus, changeFromPrice, changeToPrice, cleanFilter } from '../actions';

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
    console.log(e.target.value);
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
    console.log(e.target.value);
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
                <CategoriesList />
              </div>
            </Collapse>
          </div>
          <div className="form-group">
            <h5>Price:</h5>
            <div className="row">
              <div className="col-md-6">
                <input type="number"
                  name="FromField"
                  value={this.props.filter.priceFrom}
                  className="form-control"
                  placeholder="From"
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
            <a href="" onClick={e => (e.preventDefault(), this.props.cleanFilter())}>clean </a>
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
      cleanFilter: cleanFilter
    },
    dispatch)
)(Filter);