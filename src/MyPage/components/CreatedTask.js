import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {requestCreatedTasksListForUser ,requestCategoriesList ,
        changeCurrentPage, DragAndDropTasksByCustomer} from '../../tasks/actions';
import TaskItem from '../../DragAndDrop/task';
import ScrollTop from '../../tasks/components/ScrollTop';
import '../../tasks/styles.css';
import { push } from 'react-router-redux';

import './style.css';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"created?id="+ sessionStorage.getItem("id")+"&"
         }

        this.changePage = this.changePage.bind(this);
    };
    
    componentWillMount(){
        this.props.requestCreatedTasksListForUser();
    }

    onDrop = (event, cat) => {
        let id = event.dataTransfer.getData("text");
        
        this.props.DragAndDropTasksByCustomer(id, sessionStorage.getItem("id"), cat);
    }

    onDragStart = (event, id, status) =>{
        switch(status){
            case 'To do':
                break;
            case 'In progress':
                break;
            case 'Ready for verification':
                break;
            case 'Done':
                break;
        }
        event.dataTransfer.setData("text/plain", id);
    }

    onDragOver(event){
        event.preventDefault();
    }

    render() {
        return (
            <div className="created-tasks container" id="tasks-container">
                <div
                    ref={(el) => { this.anchor = el; }}>
                </div>
                {this.props.tasksAreLoading===true ? <h3>Loading data...</h3> : <div className="my-block row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>
                        <div className="Status col-md-3" id="To do" 
                        onDrop={(e) => this.onDrop(e, "To do")}
                        onDragOver = {(e) => this.onDragOver(e)}>
                        <div className="status-type">To do</div>
                        {this.props.createdTasks.map(item =>
                            (item.taskStatus === "To do" ? 
                            <div
                            draggable
                           onDragStart = {(e) => this.onDragStart(e, item.id, item.taskStatus)}>
                            <TaskItem item={item} className="draggable"/></div>
                            :null))}
                        </div>

                        <div className="Status col-md-3" id="In-progress" >
                        <div className="status-type">In progress</div>
                        {this.props.createdTasks.map(item => (item.taskStatus === "In progress" ?
                         <TaskItem item={item}/>:null))}
                        </div>

                        <div className="Status col-md-3" id="Ready-for"  
                         onDrop={(e) => this.onDrop(e, "Ready for verification")}
                        onDragOver = {(e) => this.onDragOver(e)}>
                        <div className="status-type">Ready for verification</div>
                        {this.props.createdTasks.map(item => (item.taskStatus === "Ready for verification" ?
                         <div
                         draggable
                        onDragStart = {(e) => this.onDragStart(e, item.id)}><TaskItem item={item} className="draggable"/></div>
                         :null))}
                        </div>

                        <div className="Status col-md-3" id="Done"  
                            onDrop={(e) => this.onDrop(e, "Done")}
                            onDragOver = {(e) => this.onDragOver(e)} >
                        <div className="status-type">Done</div>
                        {this.props.createdTasks.map(item => 
                            (item.taskStatus === "Done" ? <div draggable
                            onDragStart = {(e) => this.onDragStart(e, item.id)}>
                            <TaskItem item={item}/></div>:null))}
                        </div>
                    </div >}

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
        createdTasks: state.tasksReducers.createdTasks,
        totalPages: state.tasksReducers.totalPages,
        page: state.tasksReducers.curPage}),

        dispatch => bindActionCreators({  requestCreatedTasksListForUser:requestCreatedTasksListForUser,
        requestCategoriesList:requestCategoriesList, push: push, changeCurrentPage:changeCurrentPage,
        DragAndDropTasksByCustomer:DragAndDropTasksByCustomer}, dispatch)
)(Tasks);