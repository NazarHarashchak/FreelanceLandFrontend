import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTasksList, requestCategoriesList, changeCurrentPage } from '../actions';
import TaskItemList from './TaskItemList';
import SearchBar from './SearchBar';
import ScrollTop from './ScrollTop';
import Filter from './Filter';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';
import '../styles.css';
import { push } from 'react-router-redux';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"all?" }
        this.changePage = this.changePage.bind(this);
    };

    static propTypes = {
        requestTasksList: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired,
        requestCategoriesList: PropTypes.func.isRequired,
        changeCurrentPage: PropTypes.func.isRequired,
        filter: PropTypes.shape({
            categories: PropTypes.arrayOf (
                PropTypes.shape({
                  type: PropTypes.string.isRequired,
                  isChecked: PropTypes.bool.isRequired
                }).isRequired
              ).isRequired,
            priceFrom: PropTypes.number.isRequired,
            priceTo: PropTypes.number.isRequired,
        }).isRequired,      
        search: PropTypes.string.isRequired,
        tasksAreLoading: PropTypes.bool.isRequired,
        tasks: PropTypes.arrayOf (
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              price: PropTypes.number.isRequired,
              title: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              dateAdded: PropTypes.string.isRequired,
              taskCategoryName: PropTypes.string.isRequired,
              commentsCount: PropTypes.number.isRequired
            }).isRequired
          ).isRequired,
        totalPages: PropTypes.number.isRequired,
        page: PropTypes.number.isRequired
    }
    
    async componentWillMount() {
        await this.props.requestCategoriesList();
        this.props.requestTasksList(this.props.page, this.props.filter, this.props.search, this.state.id);
    }

    render() {
        return (
            <div className="container" id="tasks-container">
                <div
                    ref={(el) => { this.anchor = el; }}>
                </div>
                <div className="main-content container">
                    <SearchBar control={this.state.id}/>
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
                            <Filter control={this.state.id}/>
                        </div>
                    </div >

                </div >
                {this.props.tasksAreLoading===true? null :<ScrollTop anchor={this.anchor} />}
            </div >
        );
    }
    changePage(page) {
        this.props.push(page);
        this.props.requestTasksList(page,this.props.filter, this.props.search, this.state.id);
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
