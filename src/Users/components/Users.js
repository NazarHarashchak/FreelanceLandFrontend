import React ,{Component} from 'react';
import UsersList from "./UsersList";
import FilterComponent from './FilterComponent'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {requestUsersList,requestUserRoles} from '../action';
import './stylles.css';
import SeachBar from './SeachBar';
import ScrollTop from '../../tasks/components/ScrollTop';
import { Pagination } from 'react-bootstrap'; 
import { push } from 'react-router-redux'; 




class Users extends Component {

    constructor(props){
        super(props);
        this.currentPage = this.props.page;
        
        this.changePage = this.changePage.bind(this);
      };

      componentDidMount(){
        this.props.requestUsersList(this.props.page,this.props.searchText,this.props.roles);
        this.props.requestUserRoles();
        console.log(this.props.page)
      } 
    render()
    {
        return (
            <div className="container">
               
                <div className="main-content container">
                    <SeachBar page={1}/>
                    <div className="row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>
                        <div className="col-md-9" id="j-orders-search-list">
                            <UsersList usersList={this.props.newUsers} isLoading={this.props.isLoading}/>
                        </div>
                        <div className="col-md-3" >
                        <FilterComponent page={1} searchT={this.props.searchText} roles1={this.props.roles}/>
                        </div>
                        </div >
                    <Pagination className="users-pagination pull-center" 
        bsSize="medium" maxButtons={10} first last next prev boundaryLinks 
        items={this.props.totalPages} activePage={this.props.currentPage} onSelect={this.changePage} />
                    </div>
                    <ScrollTop anchor={this.anchor}/>
            </div >
        );
        
    }
    
    changePage(page){
        this.props.push(page)
        this.props.requestUsersList(page,this.props.searchText,this.props.roles);
        this.currentPage = page;
        
    }
}

function mapStateToProps (state ) {
    return({
        page: state.tasksReducers.routing && 
        state.tasksReducers.routing.locationBeforeTransitions && 
        state.tasksReducers.routing.locationBeforeTransitions.query && 
        state.tasksReducers.routing.locationBeforeTransitions.query.page_no || 1,
        searchText: state.usersReducers.searchText,
        roles: state.usersReducers.roles,
        newUsers: state.usersReducers.newUsers,
        totalPages: state.usersReducers.totalPages,
        currentPage: state.usersReducers.currentPage
        });
    
  }
  
export default connect(
    mapStateToProps,
    
    dispatch => bindActionCreators({requestUsersList: requestUsersList,requestUserRoles:requestUserRoles, push: push}, dispatch)

)(Users);
