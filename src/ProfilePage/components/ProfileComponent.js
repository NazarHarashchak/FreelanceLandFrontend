import React, { Component } from 'react';
import './ProfilePage.css';
import ActiveTasks from './ActiveTasks';
import History from './History';
import PersonalInfo from './PersonalInfo';
import { Grid} from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import AddImage from './AddImage';
import ProfilePage from './ProfilePhoto';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ProfileComponent extends Component {
  state = {
    open: false,
    messageToSend: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSendMessage = () => {
    var sender = sessionStorage.getItem('id');
    var getter = this.props.match.params.id;
    var message = this.state.messageToSend;
    this.props.createChatRoomAndSendMessage(sender, getter, message);

    this.setState({ open: false });
  }

  render() {
    return (
      <Grid>
        <Grid.Row centered>
        </Grid.Row>
        <Grid.Row centered> 
          <ProfilePage id={this.props.match.params.id}/>
        </Grid.Row>
        {sessionStorage.getItem('id')!== this.props.match.params.id ? (<Grid.Row centered>
          {sessionStorage.getItem('tokenKey')?(<div id= "sendMessageButton">
        <Button variant="outlined" className="send-message-button" color="primary" onClick={this.handleClickOpen}>
          Send Message
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <TextField
              autoFocus
              value={this.state.messageToSend}
              onChange={e => this.setState({ messageToSend: e.target.value })}
              margin="dense"
              id="name"
              label="Enter your message"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className="send-message-button" color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSendMessage} className="send-message-button" color="primary">
              Send
            </Button>
          </DialogActions>
        </Dialog>
          </div>):<div></div>}
        </Grid.Row>) : <div></div>}

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
