import React from "react";

class TaskItem extends React.Component {
    render() {
      return (
				<li className="j-order">
					<header className="l-project-title">
						<a href="https://freelance.ua/orders/135416-nachitat-knigu.html">{this.props.item.title}</a>
					</header>

					<div className="l-project-head flex-price-tag">
						<span className="l-price">{this.props.item.price}</span>
					</div>

              <article>
                  <p>{this.props.item.deadline}</p>
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