import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestTasksList } from '../actions';
import TaskItemList from './TaskItemList';
import SearchBar from './SearchBar';
import ScrollTop from './ScrollTop';
import Filter from './Filter';
import Pagination from './Pagination';
import '../styles.css';


class Tasks extends Component {
    componentWillMount() {
        requestTasksList();
    }

    render() {
        return (
            <div className="container">
                <SearchBar />
                <div className="main-content container">
                    <div className="row">
                        <div className="col-md-9" id="j-orders-search-list">
                            <TaskItemList />
                            <Pagination />
                        </div>
                        <div className="col-md-3">
                            <Filter />
                        </div>
                    </div >
                </div >
                <ScrollTop />
            </div >
        );
    }
}

export default connect(
    state => state.tasksReducers,
    dispatch => bindActionCreators(requestTasksList, dispatch)
)(Tasks);
