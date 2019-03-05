import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class TaskItem extends React.Component {
	render() {
		return (
			<li className="j-order">
				<header className="l-project-title">
					<Link to={`/TaskInf/${this.props.item.id}`}>{this.props.item.title}</Link>
				</header>

				<div className="l-project-head flex-price-tag">
					<span className="l-price">{this.props.item.price} $</span>
				</div>

				<article>
					<p>{this.props.item.description}</p>
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
						<a href="">
							<i className="fa fa-comments-o c-link-icon"></i>
							<span>{this.props.item.commentsCount} offers</span>
						</a>
					</li>
				</ul>
			</li>
		);
	}
}
export default connect(
	state => state.tasksReducers
)(TaskItem);
