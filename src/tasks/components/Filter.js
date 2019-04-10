import React from "react";
import CategoriesList from "./CategoriesList";
import { Button, Collapse } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCategOpenedStatus, changePrice, cleanFilter,requestTasksList } from '../actions';
import '../styles.css';
const ENTER_KEY = 13;
const WAIT_INTERVAL = 1200;



class Filter extends React.Component {
  constructor(props) {
    super();

    this.state = {
        toValue: 0,
        fromValue:0,
        isValid: null,
        errorMsg: null,
        edit: true
    };
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
  console.log('blur');
  if (!this.contains(parent, target)) {
    console.log('trigger');
    this.triggerChange(e);
    this.setState({
      ...this.state,
      edit: false,
    });
  }
}

handleFocus(e) {
  console.log('focus');
  this.setState({
    ...this.state,
    edit: true,
  });
}

handleChange = e => {
  this.setState(e.target.name === "ToField"?
    { ...this.state,toValue: parseInt(e.target.value,10)}:
    { ...this.state,fromValue: parseInt(e.target.value,10)}
  )
}

handleKeyDown = e => {
  if (e.keyCode === ENTER_KEY) {
    this.triggerChange(e);
  }
}

triggerChange(e) {
  const { toValue,fromValue } = this.state;
  let isValid = this.validatePriceFileds(fromValue,toValue);
  console.log(fromValue,toValue,isValid);
  if (isValid) {
    this.props.changePrice({fromValue:fromValue,toValue:toValue}); 
  }
  else {
    //e.target.setCustomValidity("Value must be between 0 and ToPrice"); 
    //e.target.reportValidity();
  }
}


validatePriceFileds(fromPrice,toPrice){
  let isValid = false;
  (fromPrice>=0 && (fromPrice<=toPrice||toPrice===0)) ? isValid=true : isValid=false;
  return isValid;
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
              {this.props.tasksAreLoading===true ? <h3>Loading data...</h3> : 
                <CategoriesList 
                  categories={this.props.filter.categories} 
                  changeCheckedStatus={this.props.changeCheckedStatus} 
                  requestTasksList={this.props.requestTasksList}
                />
              }
              </div>
            </Collapse>
          </div>
          <div className="form-group price-filter">
            <h5>Price:</h5>
            <div className="row" onFocus={(e)=>this.handleFocus(e)} onBlur={(e)=> this.handleBlur(e)} tabIndex="1">
              <div className="col-md-6">
                <input type="number"
                  name="FromField"
                  className="form-control"
                  placeholder="From"
                  id="from-price-filter"
                  onKeyDown={e => this.handleKeyDown(e)}
                  onChange = {(e) => this.handleChange(e)}
                />
              </div>
              <div className="col-md-6">
                <input type="number"
                  className="form-control" 
                  placeholder="To"
                  name="ToField"
                  onKeyDown={e => this.handleKeyDown(e)}
                  onChange = {(e) => this.handleChange(e)}
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
      changePrice: changePrice,
      cleanFilter: cleanFilter,
      requestTasksList: requestTasksList
    },
    dispatch)
)(Filter);
