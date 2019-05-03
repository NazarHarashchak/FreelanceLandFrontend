import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTaskInformation } from '../taskActions';
import  "./editTask.css";

class editTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleContent: this.props.forecasts.title,
            descriptionContent: this.props.forecasts.description,
            priceContent: this.props.forecasts.price,
            priceError: '',
            categoryContent: this.props.forecasts.taskCategory,
        };
        this.saveChanges = this.saveChanges.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    componentWillMount(){
        this.props.getTasks(this.props.match.params.id);
        this.props.getCategories();
    }
    
    onTitleChange(event){
        const value = event.target.value;
        if (value === ''){
            return(this.setState({titleContent: this.props.forecasts.title}));
        }
        else{
            return(
                this.setState({titleContent: value})
        );}
    }

    onDescriptionChange(event){
        const value = event.target.value;
        
        if (value === ''){
            return(this.setState({descriptionContent: this.props.forecasts.description}));
        }
        else{
            return(
                this.setState({descriptionContent: value})
        );}
    }

    onCategoryChange(event){
        const value = event.target.value;
        
        this.setState({categoryContent: value});
    }

    onPriceChange(event){
        const value = event.target.value;

        if (value < 0){
            this.setState({priceError: "This space can not be empty and negative, the value will not be changed"});
        }
        else {
            this.setState({priceError: "", priceContent: value});
        }
    }

    saveChanges(){
        if (this.state.priceError == ""){
            this.props.editMyTask(this.props.match.params.id, 
                this.state.titleContent,
                this.state.descriptionContent,
                this.state.priceContent,
                this.state.categoryContent).then(() => { 
                alert("Success");
                document.location = '/taskInf/' + this.props.match.params.id;
        });}
    }

    render(){
    return(
        <div id="edit-task-body">
        <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="edit-task-description"> 
                        <form name="edit-task-form">
                            <h1>Edit your task</h1>
                            <hr id="my-hr-tag"/>           
                     <div id="title">
                        <div className="label-element">
                            <label>Title:</label>
                        </div>
                        <div className="text-element">
                        <input type="text" defaultValue={this.props.forecasts.title} name="title-text" 
                                    onChange={this.onTitleChange}/>
                        </div>
                    </div>
                    <div id="description">
                        <div className="label-element">
                            <label>Description:</label>
                        </div>
                        <div className="text-element" >
                            <textarea  
                            id="add-task-description" name="description-text" 
                            onChange={this.onDescriptionChange} >
                            {this.props.forecasts.description}</textarea>
                        </div>
                    </div>
                    <div id="category">
                        <div className="label-element">
                            <label>Category: </label>
                        </div>
                        <div id="task-category">
                            <select id="my-task-category" name='category-content'
                             onChange={this.onCategoryChange}>
                                <option selected value={this.props.forecasts.taskCategory}>
                                {this.props.forecasts.taskCategory}
                                </option>
                                {this.props.categories.map((item) => 
                                    {if (item.type === this.props.forecasts.taskCategory)
                                    {return (null);} else { return (
                                        <option value={item.type}>{item.type}</option>);}})}
                            </select>
                        </div>
                    </div>
                    <div id="price">
                        <div className="label-element">
                            <label>Price: </label>
                        </div>
                        <div className="text-element">
                            <input type="number" step="10" min="0"
                            id="price-text" name="price-text" defaultValue={this.props.forecasts.price}
                            onChange={this.onPriceChange}
                            required/>
                            <label id="price-error">{this.state.priceError}</label>
                        </div>
                    </div>
                    <div id="save-button">
                        <input type="button" value="Save" id="save-task" onClick={this.saveChanges}/>
                    </div>
                        </form>
                    </div>
                </div>
        </div>
    );
    }
}

export default connect(
    state => state.taskProfilePage,
    dispatch => bindActionCreators( getTaskInformation, dispatch)
)(editTask);