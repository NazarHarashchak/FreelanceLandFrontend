import React, { Component } from 'react';
import { bindActionCreators  } from 'redux';
import { connect } from 'react-redux';
import TaskItemList from '../../tasks/components/TaskItemList';
import { Loader } from 'semantic-ui-react';
import '../../tasks/styles.css';
import { requestTopActiveTaskForUser } from '../../tasks/actions';
class ProfilePageActiveTasks extends Component {
  componentWillMount(){
    this.props.requestTopActiveTaskForUser(this.props.id)
  }
  render() {
    return (
     <div className="container " id="tasks-container">
       <div >
       {this.props.tasks.length===0 ?         <h1>This user doesn't any active tasks</h1>
        
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
      tasks: state.tasksReducers.activeTasks
  });
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ requestTopActiveTaskForUser: requestTopActiveTaskForUser }, dispatch)
)(ProfilePageActiveTasks);
