import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './ProfilePage.css';
import { actionCreators } from '../ProfilePage/actions';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {disabled: "disabled",class: "border-none" };
    this.press = this.press.bind(this);
    this.getUser = this.getUser.bind(this);
}

press(){
    let dis = (this.state.disabled === "disabled") ? "" : "disabled";
    let cls = (this.state.class === "border-none") ? "text-value" : "border-none";
    this.setState( {disabled: dis, class: cls} );
}

getUser()
{    
    let user=this.props.User;
    console.log(user);
    return user;
}

componentWillMount() {  
  this.props.requestProfilePage();
}
  render() {
    //let data=require('./profile.json');
    //let info=data[0];
    return (
     <div>
        <div >
          <input type="text" className={this.state.class} className="name-value"  disabled={this.state.disabled} value={this.getUser().name+" "+this.getUser().sur_Name} />
        </div>
        <div>
            <label class="text-lable">
                Email id :
                <input class={this.state.class} type="text" disabled={this.state.disabled} value={this.getUser().email} />
            </label>
        </div>
        <div>
            <label class="text-lable">
                Phone :
                <input class={this.state.class} type="tel" disabled={this.state.disabled} value={this.getUser().phone_Number} />
            </label>
        </div>
        <div>
            <label class="text-lable">
                Birth date :
                <input class={this.state.class} type="date" ddisabled={this.state.disabled} value={this.getUser().birth_Date} />
            </label>
        </div>
        <div>
            <label class="text-lable">
                Description :
                <input class={this.state.class} type="text" disabled={this.state.disabled} value="" />
            </label>
        </div>
        <button onClick={this.press}>edit</button>
      </div>
    );
  }
}

export default connect(
  state => state.profilePage,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(PersonalInfo);

