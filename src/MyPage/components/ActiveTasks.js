import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTasksList,requestCategoriesList ,changeCurrentPage} from '../../tasks/actions';
import TaskItemList from '../../tasks/components/TaskItemList';
import SearchBar from '../../tasks/components/SearchBar';
import ScrollTop from '../../tasks/components/ScrollTop';
import Filter from '../../tasks/components/Filter';
import Pagination from './Pagination';
import '../../tasks/styles.css';
import { push } from 'react-router-redux';
import { Loader } from 'semantic-ui-react';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"active?id="+ sessionStorage.getItem("id")+"&" }

        this.changePage = this.changePage.bind(this);
    };
    async componentDidMount() {
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
                    <SearchBar  control={this.state.id}/>
                    <div className="row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>
                        <div className="col-md-9" id="j-orders-search-list">
                            {this.props.tasksAreLoading===true ? <Loader active size='large'/> : <TaskItemList tasks={this.props.tasks} />}
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
                <ScrollTop anchor={this.anchor} />
            </div >
        );
    }
    changePage(page) {
        this.props.push(page);
        this.props.requestTasksList(this.props.page, this.props.filter, this.props.search,this.state.id);
        this.props.changeCurrentPage(page);
    }
}
export default connect(
    state => ({filter: state.tasksReducers.filter,
        search: state.tasksReducers.search,
        tasksAreLoading: state.tasksReducers.tasksAreLoading,
        tasks: state.tasksReducers.tasks,
        totalPages: state.tasksReducers.totalPages,
        page: state.tasksReducers.curPage}),
        dispatch => bindActionCreators({requestTasksList:requestTasksList    ,
        requestCategoriesList:requestCategoriesList, push: push, changeCurrentPage:changeCurrentPage}, dispatch)
)(Tasks);
