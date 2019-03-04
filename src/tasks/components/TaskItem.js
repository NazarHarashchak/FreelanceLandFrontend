import React from "react";
import { Link } from 'react-router-dom';

class TaskItem extends React.Component {
    render() {
      return (
				<li className="j-order">
					<header className="l-project-title">
						<Link to={`/TaskInf/${this.props.item.id}`}>{this.props.item.title}</Link>
					</header>

					<div className="l-project-head flex-price-tag">
						<span className="l-price">{this.props.item.price}</span>
					</div>

					<article>
						<p>{this.props.item.description}</p>
					</article>

					<ul className="l-item-features">

						<li>
							<i className="fa fa-clock-o"></i>
							{this.props.item.deadline}
						</li>

						<li>
							<a href="https://freelance.ua/orders/135416-nachitat-knigu.html#offers">
								<i className="fa fa-comments-o c-link-icon"></i>
								<span>10 предложений</span>
							</a>
						</li>
					</ul>
				</li>
      );
    }
  }
export default TaskItem;