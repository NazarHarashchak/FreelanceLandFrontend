import React from "react";
import { Link } from 'react-router-dom';
import "./taskbody.css";
import  Card  from './Card';

class UserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
  };
}

  render() {
    return (
      <div className="col-md-3">
         <div className="right-row-panel">
          <div className="user-panel">
            <div className="top-row">Customer
            </div>
              <Card id={this.props.forecasts.customerId} name={this.props.forecasts.customerName}
                     secName={this.props.forecasts.customerSecondName}
                     photo = {this.props.forecasts.customerPhoto} />
           </div>
           { this.props.forecasts.excecutorId !== 0  ? (
             <div className="user-panel">
              <div className="top-row">Excecutor
              </div>
               <Card id={this.props.forecasts.excecutorId} name={this.props.forecasts.excecutorName}
                     secName={this.props.forecasts.excecutorSecondName}
                     photo = {this.props.forecasts.excecutorPhoto}/>
             </div>):(null)
           }
            <div className="user-panel">
              <div className="top-row">Date added</div>
               <i className="fa fa-calendar-plus-o"></i>
                <label className="labelText">{this.props.forecasts.date}</label>
            </div>
            <div className="user-panel">
              <div className="top-row">Task updated</div>
              <i className="fa fa-clock-o" ></i>
              <label className="labelText">{this.props.forecasts.deadline}</label>
            </div>
            </div>
      </div>
    );
  }
}

export default UserPanel;
