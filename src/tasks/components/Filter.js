import React from "react";
import CategoriesList from "./CategoriesList";
import { Button, Collapse } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeCategOpenedStatus, changePrice, cleanFilter,requestTasksList } from '../actions';
import '../styles.css';
const ENTER_KEY = 13;

class Filter extends React.Component {
  constructor(props) {
    super();

    this.state = {
        toValue: '',
        fromValue:'',
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
  console.log('blur');
  const target = e.relatedTarget;
  const parent = e.currentTarget;
  if (!this.contains(parent, target)) {
    let isValid = this.triggerChange();
    this.setState({
      ...this.state,
      edit: false,
      isValid: isValid
    },console.log("HAAA",this.state));
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
  console.log('change');
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

triggerChange(self) {
  console.log('trigger',this.state.fromValue,this.state.toValue);
  let fromValue = this.state.fromValue;
  let toValue = this.state.toValue;
  if (fromValue==='') {fromValue=0};
  if (toValue==='') {toValue=0};
  let isValid = this.validatePriceFileds(fromValue,toValue);
  if (isValid) {
    this.props.changePrice({fromValue:fromValue,toValue:toValue}); 
  }
  return isValid;
}


validatePriceFileds(fromPrice,toPrice){
  let isValid = false;
  (fromPrice>=0 && (fromPrice<=toPrice||toPrice===0)) ? isValid=true : isValid=false;
  return isValid;
}


onCleanFilter(e) {
  e.preventDefault(); 
  this.setState({ ...this.state,toValue: '', fromValue: '', isValid:null});
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
              {this.props.tasksAreLoading===true ? <h3>Loading data...</h3> : 
                <CategoriesList 
                  page={this.props.page}
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
            {this.state.isValid||this.state.isValid===null ? "": 
              <div>
                <span className="fa fa-warning" ></span>
                <span className="validate-error-text">Value must be between 0 and ToPrice</span>
              </div>
            }
            <div className={`row ${this.state.isValid||this.state.isValid===null?'':'has-error'}`} onFocus={(e)=>this.handleFocus(e)} onBlur={(e)=> this.handleBlur(e)} tabIndex="1">
              <div className="col-md-6">
                <input type="number"
                  value={this.state.fromValue}
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
                  value={this.state.toValue}
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
