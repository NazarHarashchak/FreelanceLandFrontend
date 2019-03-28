import React from "react";
import TaskItem from "./TaskItem";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFoundTasksList } from '../actions';
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

  componentWillMount() {
    this.props.setFoundTasksList(this.props.foundTaskList)
  }

  render() {
    return (
      <div className="j-list">
        <ul className="l-projectList">
          {this.props.isLoading ? <h3>Loading data...</h3> : ""}
          {this.props.foundTaskList.map(item => (
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

function searchList(tasks, filterText) {
  var foundTaskList = tasks.filter(item => {
    return (
      item.title.toLowerCase().search(filterText.toLowerCase()) !== -1
    );
  });
  return foundTaskList;
}

const mapStateToProps = state => ({
  foundTaskList: searchList(state.tasksReducers.filteredTaskList, state.tasksReducers.searchText)
})

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ setFoundTasksList: setFoundTasksList }, dispatch)
)(TaskItemList);
