import React, { Component } from 'react';
import './ProfilePage.css';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {disabled: "disabled",class: "border-none" };
      
    this.press = this.press.bind(this);
}
press(){
    let dis = (this.state.disabled==="disabled") ? "" : "disabled";
    let cls=(this.state.class==="border-none")?"text-value":"border-none";
    this.setState({disabled: dis, class: cls});
    
}
  render() {
    let data=require('./profile.json');
    let info=data[0];
    return (
     <div>
        <div >
          <input type="text" className={this.state.class} className="name-value"  disabled={this.state.disabled} value={info.name +" "+info.sur_name} />
        </div>
          
          <div>
              <label class="text-lable">
                  Email id :
                  <input class={this.state.class} type="text" disabled={this.state.disabled} value={info.email} />
              </label>
          </div>
          <div>
              <label class="text-lable">
                  Phone :
                  <input class={this.state.class} type="tel" disabled={this.state.disabled} value={info.phone} />
              </label>
          </div>
          <div>
              <label class="text-lable">
                  Birth date :
                  <input class={this.state.class} type="date" ddisabled={this.state.disabled} value={info.data} />
              </label>
          </div>
          <div>
              <label class="text-lable">
                  Description :
                  <input class={this.state.class} type="text" disabled={this.state.disabled} value={info.description} />
              </label>
          </div>
          <button onClick={this.press}>edit</button>
      </div>
    );
  }
}

export default PersonalInfo;
