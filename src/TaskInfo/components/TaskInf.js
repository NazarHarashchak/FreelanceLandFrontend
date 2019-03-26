import React, { Component } from "react";
import UserPanel from './UserPanel'; 
import TaskDescription from './TaskDescription';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTaskForecasts } from '../taskActions';

class Task extends Component {

    componentWillMount() {
       this.props.requestTaskForecasts(this.props.match.params.id);
    }

    render() {
        console.log(this.props.forecasts)
        return (
            <div className="container-fluid">
                        <div className="col-md-1"></div>
                        <TaskDescription myTask={this.props.forecasts} url={this.props.match.url} 
                                            id={this.props.match.params.id}
                                            customerId={this.props.forecasts.customerId}/>
                        <UserPanel id={this.props.match.params.id} name={this.props.forecasts.customerName}
                                    secName={this.props.forecasts.customerSecondName}
                                    customerId={this.props.forecasts.customerId}
                                    dateAdded={this.props.forecasts.date}
                                    deadline={this.props.forecasts.deadline}/>
            </div>
        );
    }
}

export default connect(
    state => state.taskProfilePage,
    dispatch => bindActionCreators({requestTaskForecasts:requestTaskForecasts}, dispatch)
)(Task);