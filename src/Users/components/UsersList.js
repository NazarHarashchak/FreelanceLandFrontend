import UserItem from './userItem';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../action';
import { setFoundRolesList } from '../action';
import { Pagination } from 'react-bootstrap'; 
import { push } from 'react-router-redux'; 


class UsersList extends React.Component {
  constructor(props){
    super(props);

    this.changePage = this.changePage.bind(this);
  }
  componentWillMount() {
    this.props.setFoundRolesList(this.props.foundRolesList)
  }
  render() {
    const per_page = 10;
   const pages=Math.ceil(this.props.foundRolesList.length/per_page);
    console.log(pages);
    const current_page = this.props.page;
  
    const start_offset = (current_page - 1) * per_page;
    let start_count = 0;
    return (
      <div>
        <div className="list">
        
            {this.props.foundRolesList.map((item,index) => {   
              if (index>= start_offset && start_count<per_page)  {
                start_count++;
                return(
                  <UserItem
                key={item.id}
                item={item}
                />
                );
              }    
                
            })}
        </div>
        <Pagination className="users-pagination pull-right" 
        bsSize="medium" maxButtons={10} first last next prev boundaryLinks 
        items={pages} activePage={current_page} onSelect={this.changePage} />
        </div>
    );
  }
  changePage(page){
    alert(page);
    this.props.push('?pageNumber='+page)
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
    page: state.routing && state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.query && state.routing.locationBeforeTransitions.query.page_no || 1,
  });
  
}

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ setFoundRolesList: setFoundRolesList ,push: push}, dispatch)
)(UsersList);



