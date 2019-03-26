import React, { Component } from 'react';
import ProfilePhoto from '../../ProfilePage/components/ProfilePhoto';
import PersonalInfo from '../../ProfilePage/components/PersonalInfo';
import { Grid} from 'semantic-ui-react'
import AddImage from '../../ProfilePage/components/AddImage';

class ProfileComponent extends Component {
  
  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <ProfilePhoto id={localStorage.getItem('id')}/>
        </Grid.Row>
        <Grid.Row centered>
          <AddImage id={localStorage.getItem('id')}/>
        </Grid.Row>

        <Grid.Row centered>
          <Grid.Column width={10}>
            <PersonalInfo id={localStorage.getItem('id')} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default ProfileComponent;