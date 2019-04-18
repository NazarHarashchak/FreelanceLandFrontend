import React from "react";
import {bindActionCreators}  from 'redux';
import { connect } from 'react-redux';
import {actionTaskPost} from '../action';
import PropTypes from 'prop-types';

import "./addTask.css";

class addTaskPage extends React.Component {

        
    static propTypes = {
        categories: PropTypes.arrayOf(
            PropTypes.shape({
                id:PropTypes.number.isRequired,
                type:PropTypes.string.isRequired
            }.isRequired)
        ).isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            titleContent: '',
            titleError: '',
            descriptionContent: '',
            descriptionError: '',
            priceContent: '0',
            deadlineContent: this.defaultDate(),
            categoryContent: '',
            myError: ''
        };
        
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.validContent = this.validContent.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.defaultDate = this.defaultDate.bind(this);
        this.addedValues = this.addedValues.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    componentWillMount(){
        this.props.getCategories();
    }

    onTitleChange(event){
        const value = event.target.value;
        this.setState({titleContent: value, titleError: '', myError: ''});
        if (this.state.categoryContent === ''){
            const myCategory = this.props.categories[0].type;
            this.setState({categoryContent: myCategory});
        }
        
    }

    onDescriptionChange(event){
        const value = event.target.value;
        
        this.setState({descriptionContent: value, descriptionError: '', myError: ''});
    }

    onCategoryChange(event){
        const value = event.target.value;
        
        this.setState({categoryContent: value});
    }

    onPriceChange(event){
        const value = event.target.value;

        this.setState({priceContent: value});
    }

    onDateChange(event){
        const value = event.target.value;
        
        this.setState({deadlineContent: value});
    }

    defaultDate(){
        var mounth = new Date().getMonth() + 1;
        var date = new Date().getDate();
        const year = new Date().getFullYear();
        if (date < 10) { date = '0' + date;}
        if (mounth < 10) {mounth = '0' + mounth;}
        const value = year + '-' + mounth + '-' + date;
        return(value);
    }

    validContent(content, name){
        const my_error = "This space can`t be empty";
            if (content !== ''){
                return true;
            }
            else{
                switch(name){
                    case'title-content':{
                        this.setState({titleError: my_error});
                        return(false);
                    }
                    case'description-content':{
                        this.setState({descriptionError: my_error});
                        return(false);
                    }
                    default: return false;
                }

            }
    }

    addedValues(){
        if((this.validContent(this.state.titleContent, 'title-content'))
            && (this.validContent(this.state.descriptionContent, 'description-content')))
        {
            return true;
        }
        else{
        return(false);}
    }

    saveChanges(event){
        console.log(this.state.categoryContent);
        if (this.addedValues()){
            this.props.createNewTask(this.state.titleContent, this.state.descriptionContent, 
                sessionStorage.getItem('id'), this.state.priceContent,
                this.state.deadlineContent, this.state.categoryContent).
                then(() => { 
                    alert("Success");
                    document.location = '/tasks/';
            });;
        }
        else{
            this.setState({myError: "There are empty spaces"});
        }
        event.preventDefault();
    }

    render(){
        return(
            <div className="add-task-body">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                <div className="add-task-description"> 
                <form name="my-add-task-form">       
                <h1>Add a new task</h1>
                <hr id="my-hr-tag"/>           
                     <div id="title">
                        <div className="label-element">
                            <label>Title:</label>
                        </div>
                        <div className="text-element">
                        <input type="text" placeholder="Enter what to do" name="title-text" 
                                    onChange={this.onTitleChange}/>
                        <label id="title-error" className="Errors">{this.state.titleError}</label>
                        </div>
                    </div>
                    <div id="description">
                        <div className="label-element">
                            <label>Description:</label>
                        </div>
                        <div className="text-element" >
                            <textarea placeholder="Enter detail description of your task" 
                            id="add-task-description" name="description-text" onChange={this.onDescriptionChange}/>
                            <label id="description-error" className="Errors">{this.state.descriptionError}</label>
                        </div>
                    </div>
                    <div id="category">
                        <div className="label-element">
                            <label>Category: </label>
                        </div>
                        <div id="task-category">
                            <select id="my-task-category" name='category-content' onChange={this.onCategoryChange}>
                                {this.props.categories.map((item) => <option value={item.type}>{item.type}</option>)}
                            </select>
                        </div>
                    </div>
                    <div id="price">
                        <div className="label-element">
                            <label>Price: </label>
                        </div>
                        <div className="text-element">
                            <input type="number" min="0" step="1" placeholder="Enter your price in $" 
                            id="price-text" name="price-text" onChange={this.onPriceChange} defaultValue='0'/>
                            <label id="price-error" className="Errors">{this.state.priceError}</label>
                        </div>
                    </div>
                    <div id="deadline">
                        <div className="label-element">
                            <label>Deadline:</label>
                        </div>
                        <div className="text-element">
                            <input type="date" name="deadline-text"
                             id="add-date" min={this.defaultDate()} onChange={this.onDateChange} />
                        <label id="deadline-error" className="Errors">{this.state.deadlineError}</label>
                        </div>
                    </div>
                    <div id="save-button">
                        <input type="button" value="Save" id="save-new-task" onClick={this.saveChanges}/>
                    </div>
                    <div id="error">
                    <label id="" className="Errors">{this.state.myError}</label>
                    </div>

</form>
                    </div>
                    <div id="some-space"></div>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.addTask,
    dispatch => bindActionCreators(actionTaskPost, dispatch)
)(addTaskPage);