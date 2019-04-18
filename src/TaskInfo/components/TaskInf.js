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
        return (
            <div className="container-fluid task-info-container">
                        <div className="row">
                        <div className="col-md-8">
                        <TaskDescription myTask={this.props.forecasts} url={this.props.match.url} 
                                            id={this.props.match.params.id}
                                            customerId={this.props.forecasts.customerId}
                                            excecutorId={this.props.forecasts.excecutorId}
                                            />
                                            </div>
                                            <div className="col-md-4">
                        <UserPanel id={this.props.match.params.id} forecasts={this.props.forecasts}/>
                        </div>
            </div>
            </div>
        );
    }
}

export default connect(
    state => state.taskProfilePage,
    dispatch => bindActionCreators({ requestTaskForecasts: requestTaskForecasts }, dispatch)
)(Task);