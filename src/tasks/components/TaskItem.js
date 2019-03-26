import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../actions';
import { Icon } from 'semantic-ui-react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteSubmit = this.deleteSubmit.bind(this);
    }

    deleteSubmit() {
        this.props.requestDelete(this.props.item.id);
        document.location.replace('tasks/');
    }

	render() {
		return (
            <Item.Group link>
                {localStorage.getItem('role') === "Moderator" ?
         (
           <button id="delete">
            <Icon name='trash alternate'></Icon>
           </button>
          ):(null)
		}
 
			<li className="j-order">
				<header className="l-project-title">
					<Link to={`/TaskInf/${this.props.item.id}`}>{this.props.item.title}</Link>
				</header>

				<div className="l-project-head flex-price-tag">
					<span className="l-price">{this.props.item.price} $</span>
				</div>

				<article>
					<p id="task-description">{this.props.item.description}</p>
				</article>

				<ul className="l-item-features">

					<li>
						<i className="fa fa-list-alt"></i>
						{this.props.item.taskCategoryName}
					</li>

					<li>
						<i className="fa fa-calendar-plus-o"></i>
						{this.props.item.dateAdded}
					</li>

					<li>
						<a href={`/TaskInf/${this.props.item.id}/#comments`}>
							<i className="fa fa-comments-o c-link-icon"></i>
							<span>{this.props.item.commentsCount} offers</span>
						</a>
					</li>
				</ul>
			</li>
			</Item.Group>
		);
	}
}
export default connect(
    state => state.tasksReducers,
    dispatch => bindActionCreators(deleteTask, dispatch)
)(TaskItem);
