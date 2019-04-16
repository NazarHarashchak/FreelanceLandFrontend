import React from "react";
import TaskItem from "./TaskItem";
import PropTypes from 'prop-types';

class TaskItemList extends React.Component {
  static propTypes = {
    foundTaskList: PropTypes.arrayOf (
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dateAdded: PropTypes.string.isRequired,
        taskCategoryName: PropTypes.string.isRequired,
        commentsCount: PropTypes.number.isRequired
      }).isRequired
    ).isRequired,
    setFoundTasksList: PropTypes.func.isRequired,
    isLoading:PropTypes.bool
  }

  render() {
    return (
      <div className="j-list">
        <ul className="l-projectList">
          {this.props.tasks.map(item => (
            <TaskItem
              key={item.id}
              item={item}
            />
          ))}

        </ul>
      </div>
    );
  }
}

export default TaskItemList;