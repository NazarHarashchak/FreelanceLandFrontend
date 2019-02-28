import React from "react";
import TaskItem from "./TaskItem";

class TaskItemList extends React.Component {
  render() {
    return (
        <div className="j-list">
            <ul className="l-projectList">
            {this.props.isLoading?<h3>Loading data...</h3>:""}
            {this.props.tasksList.map(item => (          
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