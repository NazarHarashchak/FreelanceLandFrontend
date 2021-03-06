import React, { Component } from 'react';
import './ProfilePage.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators1 } from '../actions';
import AvatarEditor from 'react-avatar-editor'
import { Grid} from 'semantic-ui-react';

import './ProfilePage.css';
class AddImage extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
      inputError: '',
      inputColor: '',
      image: '',
      imageName: ''
  };
  this.sendImage = this.sendImage.bind(this);
  }

    dataURItoBlob(dataURI) {
      var byteString;
      if (dataURI.split(',')[0].indexOf('base64') >= 0)
      byteString = atob(dataURI.split(',')[1]);
      else
      byteString = unescape(dataURI.split(',')[1]);
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
        return new Blob([ia], {type:mimeString});
      }

    async sendImage(event) {
        event.preventDefault();
        
        if((!this.state.inputError) && (this.state.image)){
          const img = this.editor.getImageScaledToCanvas().toDataURL('image/jpeg', 1.0);
          var file=this.dataURItoBlob(img);
          let form = new FormData();
          form.append('image', file);
          form.append('fileName', this.state.imageName);
          form.append('userid', sessionStorage.getItem('id'));
          this.props.addImage(form);
          document.getElementById('img').value = ""; 
          this.setState({file: '', image: ''});
          document.getElementById('CurrentAvatar').style.display = 'block';
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
        document.getElementById('CurrentAvatar').style.display = 'none';     
        this.setState({ image: URL.createObjectURL(e.target.files[0]), imageName: e.target.files[0].name});
      }

    }

    setEditorRef = (editor) => this.editor = editor

    render() {
     if((sessionStorage.getItem('tokenKey') && this.props.id === sessionStorage.getItem('id'))) return (
        <div id = 'addImageWrapper'>
          {(this.state.image !== '') ?  <AvatarEditor
                                        ref={this.setEditorRef}
                                        image={this.state.image}
                                        width={250}
                                        height={250}
                                        border={50}
                                        color={[255, 255, 255, 0.6]} // RGBA
                                        scale={1.2}
                                        rotate={0}
                                      /> : <div></div>}
          <form className="inputContainer">
              <Grid.Row>
              {this.state.inputError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.inputError}</div>) : null}
              <Grid.Column>
                <input name="Avatar" id="img" type="file" className="form-control"  accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>this.handleImageChange(e)}/>
                <input type="submit" value="change photo" onClick={this.sendImage} id='addImageButton'/>
              </Grid.Column>
              </Grid.Row>
          </form>
        </div>
     )
      return (<div></div>)
    }
  }
  

  export default connect(
    state => state.profilePage,
    dispatch => bindActionCreators(actionCreators1, dispatch)
  )(AddImage);
  