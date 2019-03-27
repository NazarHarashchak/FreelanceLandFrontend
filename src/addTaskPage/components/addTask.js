import React from "react";
import {bindActionCreators}  from 'redux';
import { connect } from 'react-redux';
import {actionTaskPost} from '../action';

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
            deadlineContent: new Date(),
            deadlineError: '',
            categoryContent: '',
            categoryError: ''
        };

    }

    componentWillMount(){
        this.props.getCategories();
    }

    render(){
        return(
            <div className="add-task-body">
                <h1>Add a new task</h1>
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div className="add-task-description">                   
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
                            id="add-task-description" name="description-text"/>
                            <label id="description-error" className="Errors">{this.state.descriptionError}</label>
                        </div>
                    </div>
                    <div id="category">
                        <div className="label-element">
                            <label>Category: </label>
                        </div>
                        <div id="task-category">
                       
                            <select id="my-task-category">
                                {this.props.categories.map((item) => <option key={item.type}>{item.type}</option>)}
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
                            <label>Deadline:</label>
                        </div>
                        <div className="text-element">
                            <input type="date" name="deadline-text"
                             id="add-date" min='2019-03-25'/>
                        <label id="deadline-error" className="Errors">{this.state.deadlineError}</label>
                        </div>
                    </div>
                    <div id="save-button">
                        <input type="button" value="Save" id="save-new-task"/>
                    </div>
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