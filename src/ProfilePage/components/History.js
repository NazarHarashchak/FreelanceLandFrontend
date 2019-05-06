import React, { Component } from 'react';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import TaskItemList from '../../tasks/components/TaskItemList';
import { Loader } from 'semantic-ui-react';

import './ProfilePage.css';
import { requestTopHistoryTaskForUser } from '../../tasks/actions';
class ProfilePageHistoryTasks extends Component {
  componentWillMount(){
    console.log(this.props.id)
    this.props.requestTopHistoryTaskForUser(this.props.id)
    console.log(this.props.tasks)
  }
  render() {
    return (
      <div className="container " id="tasks-container">
      <div >
      {this.props.tasks.length===0 ?         <h1>This user doesn't any done tasks</h1>
       
       : (this.props.tasksAreLoading===true ? <Loader active size='large'/> :<div>
       <h1>Active tasks</h1>
      <TaskItemList tasks={this.props.tasks} />
      </div>)}
         </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
      tasks: state.tasksReducers.doneTask
  });
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ requestTopHistoryTaskForUser: requestTopHistoryTaskForUser }, dispatch)
)(ProfilePageHistoryTasks);