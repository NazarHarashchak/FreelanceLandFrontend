import React from "react";
import { Link } from 'react-router-dom';

import "./addTask.css";
import { Label } from "semantic-ui-react";

class addTaskPage extends React.Component {
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
                        <input type="text" placeholder="Enter what to do" />
                        </div>
                    </div>
                    <div id="description">
                        <div className="label-element">
                            <label>Description:</label>
                        </div>
                        <div className="text-element" >
                            <textarea placeholder="Enter detail description of your task" 
                            id="task-description"/>
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
                            <input type="text" placeholder="Enter your price in $"/>
                        </div>
                    </div>
                    <div id="deadline">
                        <div className="label-element">
                            <label>Deadline</label>
                        </div>
                        <div className="text-element">
                            <input type="text" placeholder="Enter deadline of task"/>
                        </div>
                    </div>
                    <div id="save-button">
                        <input type="button" value="Save"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default addTaskPage;