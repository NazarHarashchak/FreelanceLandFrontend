import React, { Component } from 'react';
import './ProfilePage.css';

class History extends Component {
  render() {
    let data=require('./profile.json');
    console.log(data[0].photo1);
    return (
     <div>
         <h1>History</h1>
     </div>
    );
  }
}

export default History;
