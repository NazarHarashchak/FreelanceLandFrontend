import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { requestTasksList,requestCategoriesList ,changeCurrentPage} from '../../tasks/actions';
import TaskItemList from '../../tasks/components/TaskItemList';
import TaskItem from '../../DragAndDrop/task';
import ScrollTop from '../../tasks/components/ScrollTop';
import '../../tasks/styles.css';
import { push } from 'react-router-redux';


class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"created?id="+ sessionStorage.getItem("id")+"&",
            toDoTasks: [],
            inProgressTasks: [],
            inReadyTasks: [],
            inDoneTasks: []
         }

        this.changePage = this.changePage.bind(this);
        this.filterTasks = this.filterTasks.bind(this);
    };
    async componentDidMount() {
        await this.props.requestCategoriesList();
        this.props.requestTasksList(this.props.page, this.props.filter, this.props.search, this.state.id);
    }

    filterTasks(){
        this.setTaste({toDoTasks: this.props.tasks.filter(myTask => myTask.taskStatus == "To do")});
        this.setTaste({inProgressTasks: this.props.tasks.filter(myTask => myTask.taskStatus == "In progress")});
        this.setTaste({inReadyTasks: this.props.tasks.filter(myTask => myTask.taskStatus == "Ready for verification")});
        this.setTaste({inDoneTasks: this.props.tasks.filter(myTask => myTask.taskStatus == "Done")});
    }

    onDrop = (event, cat) => {
        console.log("Drag drop");
        let id = event.dataTransfer.getData("text" + cat);

        let tasks = this.props.tasks.filter((task) => {if (task.id == id){task.taskStatus = cat}
    
        return task;});
    }

    onDragStart = (event, id) =>{
        console.log("Drag start" + id);
        event.dataTransfer.setData("text/plain", id);
    }

    onDragOver(event){
        console.log("Drag over");
        event.preventDefault();
    }

    render() {
        
        return (
            <div className="created-tasks container" id="tasks-container">
                <div
                    ref={(el) => { this.anchor = el; }}>
                </div>
                {this.props.tasksAreLoading===true ? <h3>Loading data...</h3> : <div className="row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>

                        <div className="To do col-md-3" id="j-orders-search-list" 
                        onDragOver = {(e) => this.onDragOver(e)}>
                        <p>To do</p>
                        {this.props.tasks.map(item =>
                            (item.taskStatus === "To do" ? 
                            <TaskItem item={item} className="draggable"
                                 draggable
                                onDragStart = {(e) => this.onDragStart(e, item.id)}/>
                            :null))}
                        </div>

                        <div className="In-progress col-md-3">
                        <p>In progress</p>
                        {this.props.tasks.map(item => (item.taskStatus === "In progress" ?
                         <TaskItem item={item}/>:null))}
                        </div>

                        <div className="Ready-for-verification col-md-3">
                        <p>Ready for verification</p>
                        {this.props.tasks.map(item => (item.taskStatus === "Ready for verification" ? <TaskItem item={item}/>:null))}
                        </div>

                        <div className="Done col-md-3" 
                            onDrop={(e) => this.onDrop(e, "Done")}
                            onDragOver = {(e) => this.onDragOver(e)} >
                        <p>Done</p>
                        {this.props.tasks.map(item => (item.taskStatus === "Done" ? <TaskItem item={item}/>:null))}
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
        tasks: state.tasksReducers.tasks,
        totalPages: state.tasksReducers.totalPages,
        page: state.tasksReducers.curPage}),
        dispatch => bindActionCreators({requestTasksList:requestTasksList    ,
        requestCategoriesList:requestCategoriesList, push: push, changeCurrentPage:changeCurrentPage}, dispatch)
)(Tasks);