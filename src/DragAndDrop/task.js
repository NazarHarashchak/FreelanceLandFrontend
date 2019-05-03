import React from "react";
import { Link } from 'react-router-dom';
import { Item } from 'semantic-ui-react';

class TaskItem extends React.Component {

	render() {
		return (
			<Item.Group link draggable >
				<li className="j-order" id="my-task-title">
					<header className="l-project-title" >
						<Link to={`/TaskInf/${this.props.item.id}`}>{this.props.item.title}</Link>
					</header>
				</li>
			</Item.Group>
		);
	}
}
export default TaskItem;