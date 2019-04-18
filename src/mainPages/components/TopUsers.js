import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestTop } from '../actions';
import PropTypes from 'prop-types';

import '../topUsers.css';



class Gallery extends React.Component {
    static propTypes = {
        users:PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string,
            sur_Name: PropTypes.string
        }))
    }

    constructor(props) {
        super(props);
    }
    
    componentWillMount(){
        requestTop();
        }

        
    render(){
          return(
            <div className=" top-users">
             {this.props.users.map(item  =>(
                <li className="top-users-item" key={item.id}>
                <h4>Top position : {item.id}</h4>
                <h5>Name:{item.name}</h5> 
                <h5>Surname:{item.sur_Name} </h5>
                <h5>Rating:</h5>
                </li>
              ))}
              </div>
          )}};
 


export default connect(
    state => state.topUsers,
    dispatch => bindActionCreators(requestTop, dispatch)
)(Gallery);