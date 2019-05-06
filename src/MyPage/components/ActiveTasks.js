import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    requestActiveTasksListForUser, requestCategoriesList,
    changeCurrentPage, DragAndDropTasksByExecutor
} from '../../tasks/actions';
import TaskItem from '../../DragAndDrop/task';
import ScrollTop from '../../tasks/components/ScrollTop';
import '../../tasks/styles.css';
import { push } from 'react-router-redux';

import './style.css';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "active?id=" + sessionStorage.getItem("id") + "&",
            firstStatus: ''
        }

        this.changePage = this.changePage.bind(this);
    };

    componentWillMount() {
        this.props.requestActiveTasksListForUser();
    }

    onDrop = (event, cat) => {
        let id = event.dataTransfer.getData("text");

        this.props.DragAndDropTasksByExecutor(id, sessionStorage.getItem("id"), cat);
    }

    onDragStart = (event, id, status) => {
        this.setState({ firstStatus: status });
        console.log(status);
        event.dataTransfer.setData("text/plain", id);
    }

    onDragOver(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className="created-tasks container" id="tasks-container">
                <div
                    ref={(el) => { this.anchor = el; }}>
                </div>
                {
                    <div className="my-block row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>

                        <div className="Status col-md-6" id="In-progress"
                            onDrop={(e) => this.onDrop(e, "In progress")}
                            onDragOver={(e) => this.onDragOver(e)}
                        >
                            <div className="status-type">To do</div>
                            {this.props.activeTasks.map(item => (item.taskStatus === "In progress" ?
                                <div key={item.id}
                                    draggable
                                    onDragStart={(e) => this.onDragStart(e, item.id, item.taskStatus)}>
                                    <TaskItem item={item} /></div> : null))}
                        </div>

                        <div className="Status col-md-6" id="Ready"
                            onDrop={(e) => this.onDrop(e, "Ready for verification")}
                            onDragOver={(e) => this.onDragOver(e)}>
                            <div className="status-type" id="my-ready-status">Ready for verification</div>
                            {this.props.activeTasks.map(item => (item.taskStatus === "Ready for verification" ?
                                <div key={item.id}
                                    draggable
                                    onDragStart={(e) => this.onDragStart(e, item.id, item.taskStatus)}>
                                    <TaskItem item={item} className="draggable" /></div>
                                : null))}
                        </div>
                    </div >}

                <ScrollTop anchor={this.anchor} />
            </div >
        );
    }
    changePage(page) {
        this.props.push(page);
        this.props.requestTasksList(this.props.page, this.props.filter, this.props.search, this.state.id);
        this.props.changeCurrentPage(page);
    }
}
export default connect(
    state => ({
        filter: state.tasksReducers.filter,
        search: state.tasksReducers.search,
        tasksAreLoading: state.tasksReducers.tasksAreLoading,
        activeTasks: state.tasksReducers.activeTasks,
        totalPages: state.tasksReducers.totalPages,
        page: state.tasksReducers.curPage
    }),dispatch => bindActionCreators({
        requestActiveTasksListForUser: requestActiveTasksListForUser,
        requestCategoriesList: requestCategoriesList, push: push, changeCurrentPage: changeCurrentPage,
        DragAndDropTasksByExecutor: DragAndDropTasksByExecutor
    }, dispatch)
)(Tasks);