import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    render() {
        return (
            <div className="container" id="tasks-container">

                <div className="main-content container">
                    <SearchBar />
                    <div className="row">
                        <div
                            ref={(el) => { this.messagesEnd = el; }}>
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
                <ScrollTop scrollFunc={this.scrollToBottom} />
            </div >
        );
    }
}

export default connect(
    state => state.tasksReducers,
    dispatch => bindActionCreators(requestTasksList, dispatch)
)(Tasks);
