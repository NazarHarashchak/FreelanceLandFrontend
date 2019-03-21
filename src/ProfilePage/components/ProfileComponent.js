import React, { Component } from 'react';
import './ProfilePage.css';
import ProfilePhoto from './ProfilePhoto';
import ActiveTasks from './ActiveTasks';
import History from './History';
import PersonalInfo from './PersonalInfo';
import { Grid} from 'semantic-ui-react'
import { addImage } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';

import  logo from './MyPhoto.jpg';
import AddImage from './AddImage';
import ProfilePage from './ProfilePhoto';
class ProfileComponent extends Component {

  render() {
    return (
      <Grid>
        <Grid.Row centered>
        </Grid.Row>
        <Grid.Row centered> 
          <ProfilePage id={this.props.match.params.id}/>
        </Grid.Row>
        <Grid.Row centered>
          <AddImage id={this.props.match.params.id}/>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column width={10}>
            <PersonalInfo id={this.props.match.params.id}/>
          </Grid.Column>
        </Grid.Row>
  
        <Grid.Row>
          <Grid.Column>
            <ActiveTasks/>
          </Grid.Column>
        </Grid.Row>
      
        <Grid.Row>
          <Grid.Column>
            <History/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(
  state => state.profilePage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(ProfileComponent);
