import React, { Component } from 'react';
import './Loading.css';



const Loading = (WrappedComponent) => {
  return class Loading extends Component {
    render() {
        return  this.props.contacts.length===0 ? <div className='loader'></div> : <WrappedComponent {...this.props}/>
  }
}
}


export default Loading;