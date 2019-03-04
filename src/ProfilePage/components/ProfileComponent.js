import React, { Component } from 'react';
import './ProfilePage.css';
import ProfilePhoto from './ProfilePhoto';
import ActiveTasks from './ActiveTasks';
import History from './History';
import PersonalInfo from './PersonalInfo';
import { Grid} from 'semantic-ui-react'

class ProfileComponent extends Component {
  
  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <ProfilePhoto/>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column width={10}>
            <PersonalInfo/>
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

export default ProfileComponent;
