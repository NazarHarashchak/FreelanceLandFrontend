import React from "react";
import {bindActionCreators}  from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {actionTaskPost} from '../action'
import SweetAlert from 'sweetalert2-react';

import "./addTask.css";

class addTaskPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleContent: '',
            titleError: '',
            descriptionContent: '',
            descriptionError: '',
            priceContent: '',
            priceError: '',
            deadlineContent: '',
            deadlineError: '',
            categoryContent: '',
            categoryError: ''
        };

        this.contentChange = this.contentChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.emptyError = this.emptyError.bind(this);
    }

    saveChanges() {
        const userId = localStorage.getItem("id");

            this.props.createNewTask(this.state.titleContent, this.state.descriptionContention, userId, 
            this.state.priceContent,
            this.state.deadlineContent, this.state.categoryContent).then(() => {
                if(this.props.user != null) {
                    <SweetAlert
                show={this.state.showPop}
                title="Cool!"
                text="Your Task is already created!" />
                }
            });
    }

    emptyError(){
        const contentError = "This space cant be empty";
        let my_title = '', my_desc = '', my_price = '', my_deadline = '';
        if (this.state.priceContent === '')
        {
            my_price = contentError;
            return false;
        }
        if (this.state.titleContent=== '')
        {
            my_title = contentError;
            return false;  
        }
        if (this.state.descriptionContent === '')
        {
            my_desc = contentError;
            return false;
        }
        if (this.state.deadlineContent === '')
        {
            my_deadline = contentError;
            return false;
        }
        this.setState({titleError: my_title}, {descriptionError: my_desc}, 
                {priceError: my_price}, {deadlineError: my_deadline});
    }

    contentChange(event){
        const value = event.target.value;
        switch(event.target.name){
            case 'title-text':
                    this.setState({titleContent: value});
                break;
            case 'description-text':
                    this.setState({descriptionContent: event.target.value});
                break;
            case 'price-text':
                    this.setState({priceContent: event.target.value});
                break;
            case 'deadline-text':
                    this.setState({deadlineContent: event.target.value});
                break;
        }
        this.setState({commentContent: event.target.value});
    }

    render(){
        return(
            <div className="add-task-body">
                <h1>Add a new task</h1>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div id="title">
                        <div className="label-element">
                            <label>Title:</label>
                        </div>
                        <div className="text-element">
                        <input type="text" placeholder="Enter what to do" name="title-text" />
                        <label id="title-error" className="Errors">{this.state.titleError}</label>
                        </div>
                    </div>
                    <div id="description">
                        <div className="label-element">
                            <label>Description:</label>
                        </div>
                        <div className="text-element" >
                            <textarea placeholder="Enter detail description of your task" 
                            id="task-description" name="description-text"/>
                            <label id="description-error" className="Errors">{this.state.descriptionError}</label>
                        </div>
                    </div>
                    <div id="category">
                        <div className="label-element">
                            <label>Category: </label>
                        </div>
                        <div id="task-category">
                            <select>
                                <option>some category 1</option>
                                <option>some category 2</option>
                            </select>
                        </div>
                    </div>
                    <div id="price">
                        <div className="label-element">
                            <label>Price: </label>
                        </div>
                        <div className="text-element">
                            <input type="number" min="0" step="10" placeholder="Enter your price in $" 
                            id="price-text" name="price-text"/>
                            <label id="price-error" className="Errors">{this.state.priceError}</label>
                        </div>
                    </div>
                    <div id="deadline">
                        <div className="label-element">
                            <label>Deadline</label>
                        </div>
                        <div className="text-element">
                            <input type="text" placeholder="Enter deadline of task" name="deadline-text"/>
                        <label id="deadline-error" className="Errors">{this.state.deadlineError}</label>
                        </div>
                    </div>
                    <div id="save-button">
                        <input type="button" value="Save" onClick={this.saveChanges()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.addTask,
    dispatch => bindActionCreators(actionTaskPost, dispatch)
)(addTaskPage);