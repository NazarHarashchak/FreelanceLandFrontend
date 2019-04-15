import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestCreatedTasksListForUser } from '../../tasks/actions';
import TaskItemList from '../../tasks/components/TaskItemList';
import SearchBar from '../../tasks/components/SearchBar';
import ScrollTop from '../../tasks/components/ScrollTop';
import Filter from '../../tasks/components/Filter';
import Pagination from '../../tasks/components/Pagination';
import '../../tasks/styles.css';


class Tasks extends Component {
    componentWillMount() {
        this.props.requestCreatedTasksListForUser();
    }

    render() {
        return (
            <div className="container">
             
                <div className="main-content container">
                    <SearchBar />
                    <div className="row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>
                        <div className="col-md-9" id="j-orders-search-list">
                            <TaskItemList />
                            <Pagination />
                        </div>
                        <div className="col-md-3">
                            <Filter />
                        </div>
                    </div >
                </div >
                <ScrollTop anchor={this.anchor}/>
            </div >
        );
    }
}

export default connect(
    state => state.tasksReducers,
    dispatch => bindActionCreators({requestCreatedTasksListForUser:requestCreatedTasksListForUser}, dispatch)
)(Tasks);