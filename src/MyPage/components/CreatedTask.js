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
import { colors } from 'react-native-elements';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"created?id="+ sessionStorage.getItem("id")+"&",
            firstStatus: '',
            excecutor: 0,
            defaultStyle: {color: "white"},
            redstyle: {color: "red"},
            greenstyle: {color: "green"}
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

    onDragStart = (event, id, status, ex) =>{
        switch(status){
            case 'To do':
                document.getElementById('In-progress').style = this.state.redstyle;
                document.getElementById('Ready-for').style = this.state.redstyle;
                document.getElementById('Done').style = this.state.greenstyle;
                console.log(this.state.redstyle);
                break;
            case 'In progress':
                break;
            case 'Ready for verification':
                break;
            case 'Done':
                break;
        }

        this.setState({firstStatus: status, excecutor: ex});
        console.log(this.state.firstStatus + 'excecutor' + this.state.excecutor);
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
                {//this.props.tasksAreLoading===true ? <h3>Loading data...</h3> : 
                    <div className="my-block row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>
                        <div className="Status col-md-3" id="To do"
                        onDrop={(this.state.firstStatus=='In progress') ||
                                ((this.state.firstStatus == 'Done')&&(this.state.excecutor === 0))
                             ? (e) => this.onDrop(e, "To do"):null}
                        onDragOver = {(this.state.firstStatus=='In progress')||
                                ((this.state.firstStatus == 'Done')&&(this.state.excecutor === 0))
                            ? (e) => this.onDragOver(e):null}>
                        <div className="status-type">To do</div>
                        {this.props.createdTasks.map(item =>
                            (item.taskStatus === "To do" ? 
                            <div key={item.id}
                            draggable
                            onDragStart = {(e) => this.onDragStart(e, item.id, item.taskStatus, item.excecutorId)}>
                            <TaskItem item={item}/></div>
                            : null))}
                        </div>

                        <div className="Status col-md-3" id="In-progress" 
                            onDrop={(this.state.firstStatus=='Ready for verification')
                                ? (e) => this.onDrop(e, "In progress"):null}
                            onDragOver = {(this.state.firstStatus=='Ready for verification')
                                ?(e) => this.onDragOver(e):null}
                        >
                        <div className="status-type">In progress</div>
                        {this.props.createdTasks.map(item => (item.taskStatus === "In progress" ?
                         <div key={item.id}
                         draggable
                         onDragStart = {(e) => this.onDragStart(e, item.id, item.taskStatus, item.excecutorId)}>
                             <TaskItem item={item}/></div>:null))}
                        </div>

                        <div className="Status col-md-3" id="Ready-for"  
                         onDrop={(this.state.firstStatus=='Done')&&(this.state.excecutor != 0) ?
                         (e) => this.onDrop(e, "Ready for verification"):null}
                         onDragOver = {(this.state.firstStatus=='Done') &&(this.state.excecutor != 0) ?
                         (e) => this.onDragOver(e):null}>
                        <div className="status-type">Ready for verification</div>
                        {this.props.createdTasks.map(item => (item.taskStatus === "Ready for verification" ?
                         <div key={item.id}
                         draggable
                        onDragStart = {(e) => this.onDragStart(e, item.id, item.taskStatus, item.excecutorId)}>
                        <TaskItem item={item} className="draggable"/></div>
                         :null))}
                        </div>

                        <div className="Status col-md-3" id="Done"  
                            onDrop={((this.state.firstStatus=='Ready for verification') || 
                            (this.state.firstStatus=='To do'))
                             ? (e) => this.onDrop(e, "Done") : null}
                            onDragOver = {(this.state.firstStatus=='Ready for verification')
                            || 
                            (this.state.firstStatus=='To do')?(e) => this.onDragOver(e):null} >
                        <div className="status-type">Done</div>
                        {this.props.createdTasks.map(item => 
                            (item.taskStatus === "Done" ? <div draggable
                            onDragStart = {(e) => this.onDragStart(e, item.id, item.taskStatus, item.excecutorId)}>
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