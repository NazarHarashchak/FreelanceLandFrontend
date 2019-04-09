import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTasksList } from '../actions';
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
        this.current_page = this.props.page;

        this.changePage = this.changePage.bind(this);
    };
    componentWillMount() {
        this.props.requestTasksList(this.props.page, this.props.filter, this.props.searchText);
    }

    render() {
        const pages = 1;
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
                            {this.props.state.tasksAreLoading===true ? <h3>Loading data...</h3> : <TaskItemList tasks={this.props.state.tasks} />}
                            <Pagination className="users-pagination pull-center" 
                            bsSize="medium" 
                            maxButtons={10} 
                            first last next prev boundaryLinks 
                            items={pages} 
                            activePage={this.current_page} 
                            onSelect={this.changePage} />
                        </div>
                        <div className="col-md-3">
                            <Filter />
                        </div>
                    </div >

                </div >
                <ScrollTop anchor={this.anchor} />
            </div >
        );
    }
    changePage(page) {
        this.props.push(page)
        this.props.requestTasksList(page,this.props.filter, this.props.searchText);
        this.current_page = page;

    }
}


function mapStateToProps(state) {
    return ({
        state: state.tasksReducers,
        page: state.routing && state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.query && state.routing.locationBeforeTransitions.query.page_no || 1,
        current_page: state.page,

    });

}

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators({ requestTasksList: requestTasksList, push: push }, dispatch)
)(Tasks);
