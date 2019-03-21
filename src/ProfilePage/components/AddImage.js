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
import { actionCreators1 } from '../actions';
import Avatar from 'react-avatar';
import  logo from './MyPhoto.jpg';

class AddImage extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      inputError: '',
      inputColor: ''
  };
  this.sendImage = this.sendImage.bind(this);
  }
    async sendImage(event) {
        event.preventDefault();
        
        if((!this.state.inputError) && (this.state.file != "")){
          this.props.addImage(this.state.file);
          document.getElementById('img').value = ""; 
        }
        else 
        {
          this.setState({inputError: "It is empty!"});
        }
        }
    
        handleImageChange(e) {
        e.preventDefault();
        
        if(e.target.files[0] == null){
          this.setState({inputError: "It is empty!"})
        }
        else if( e.target.files[0].size > 2000000){
          this.setState({inputError: "File is too big!"});
          e.target.value = "";
        }
        else{
        this.setState({inputError: ""});
        let form = new FormData();
        for (var index = 0; index < e.target.files.length; index++) {
          var element = e.target.files[index];
          form.append('image', element);
        }
        form.append('fileName', e.target.files[0].name);
        form.append('userid', localStorage.getItem('id'));
        console.log(form.get('image'));
        {this.setState({file:  form});}
      }

    }
    render() {
     return (
        <div id = 'addImageWrapper' style={{ visibility: (localStorage.getItem('tokenKey') && this.props.id ===localStorage.getItem('id')) ? 'visible' : 'hidden' }}>
          <form>
              {this.state.inputError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.inputError}</div>) : null}
              <input name="Avatar" id="img" type="file" class="form-control"  accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>this.handleImageChange(e)}/>
              <input type="submit" value="change photo" onClick={this.sendImage} id='addImageButton'/>
          </form>
        </div>
     )}
  }
  

  export default connect(
    state => state.profilePage,
    dispatch => bindActionCreators(actionCreators1, dispatch)
  )(AddImage);
  