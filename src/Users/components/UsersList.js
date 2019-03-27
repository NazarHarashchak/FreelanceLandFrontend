import UserItem from './userItem';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../action';
import { setFoundRolesList } from '../action';
import { Pagination } from 'react-bootstrap'; 
import { push } from 'react-router-redux'; 



class UsersList extends React.Component {
  
  componentWillMount() {
    this.props.setFoundRolesList(this.props.foundRolesList)
    
  } 
  render() {
   const  pages = Math.ceil((this.props.foundRolesList.length+2)/10)
      
    return (
     
        <div className="list">
        
            {this.props.foundRolesList.map((item,index) => {   
              
                return(
                  <UserItem
                key={item.id}
                item={item}
                />
                );
              }    
                
            )}
        </div>
       
    );
  }
  
}
function searchList(newusers, filterText) {
  var foundRolesList = newusers.filter(item => {
    return (
      item.name.toLowerCase().search(filterText.toLowerCase()) !== -1
    );
  });
  return foundRolesList;
}

function mapStateToProps (state ) {
  return({
    foundRolesList: searchList(state.usersReducers.filteredRolesList, state.usersReducers.searchText),
  });
  
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ setFoundRolesList: setFoundRolesList }, dispatch)
)(UsersList);



