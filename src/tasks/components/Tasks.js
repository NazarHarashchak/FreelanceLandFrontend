import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTasksList, requestCategoriesList, changeCurrentPage } from '../actions';
import TaskItemList from './TaskItemList';
import SearchBar from './SearchBar';
import ScrollTop from './ScrollTop';
import Filter from './Filter';
import { Pagination } from 'react-bootstrap';
import '../styles.css';
import { push } from 'react-router-redux';



class Tasks extends Component {
    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this);
    };
    componentDidMount() {
        this.props.requestCategoriesList();
        this.props.requestTasksList(this.props.page, this.props.filter, this.props.search);
    }

    render() {
        return (
           
            <div className="container" id="tasks-container">
                <div
                    ref={(el) => { this.anchor = el; }}>
                </div>
                <div className="main-content container">
                    <SearchBar />
                    <div className="row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>
                        <div className="col-md-9" id="j-orders-search-list">
                            {this.props.tasksAreLoading===true ? <h3>Loading data...</h3> : <TaskItemList tasks={this.props.tasks} />}
                            <Pagination className="users-pagination pull-center" 
                            bsSize="medium" 
                            maxButtons={10} 
                            first last next prev boundaryLinks 
                            items={this.props.totalPages} 
                            activePage={this.props.page} 
                            onSelect={this.changePage} />
                        </div>
                        <div className="col-md-3">
                            <Filter/>
                        </div>
                    </div >

                </div >
                <ScrollTop anchor={this.anchor} />
            </div >
        );
    }
    changePage(page) {
        this.props.push(page);
        this.props.requestTasksList(page,this.props.filter, this.props.search);
        this.props.changeCurrentPage(page);
    }
}


function mapStateToProps(state) {
    return ({
        filter: state.tasksReducers.filter,
        search: state.tasksReducers.search,
        tasksAreLoading: state.tasksReducers.tasksAreLoading,
        tasks: state.tasksReducers.tasks,
        totalPages: state.tasksReducers.totalPages,
        page: state.tasksReducers.curPage
    });

}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({ requestTasksList: requestTasksList, requestCategoriesList:requestCategoriesList, push: push, changeCurrentPage:changeCurrentPage }, dispatch)
)(Tasks);
