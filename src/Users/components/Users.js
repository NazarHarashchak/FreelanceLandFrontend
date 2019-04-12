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
        this.props.state.currentPage = this.props.page;
        
        this.changePage = this.changePage.bind(this);
      };

      componentDidMount(){
        this.props.requestUsersList(this.props.page,this.props.state.searchText);
        this.props.requestUserRoles();
      }

    
    componentWillReceiveProps() {
        
        console.log(this.props.state.roles)

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
                            <UsersList usersList={this.props.state.newUsers} isLoading={this.props.isLoading}/>
                        </div>
                        <div className="col-md-3" >
                        <FilterComponent page={1} searchT={this.props.state.searchText} roles1={this.props.roles}/>
                        </div>
                        </div >
                    <Pagination className="users-pagination pull-center" 
        bsSize="medium" maxButtons={10} first last next prev boundaryLinks 
        items={this.props.state.totalPages} activePage={this.props.state.currentPage} onSelect={this.changePage} />
                   
                    </div>
                    <ScrollTop anchor={this.anchor}/>
            </div >
        );
        
    }
    
    changePage(page){
        this.props.push(page)
        this.props.requestUsersList(page,this.props.state.searchText);
        this.props.state.currentPage = page;
        
    }
}

function mapStateToProps (state ) {
    return({
        state : state.usersReducers,
        page: state.tasksReducers.routing && 
        state.tasksReducers.routing.locationBeforeTransitions && 
        state.tasksReducers.routing.locationBeforeTransitions.query && 
        state.tasksReducers.routing.locationBeforeTransitions.query.page_no || 1,
        searchText: state.usersReducers.searchText,
        roles: state.usersReducers.roles,
        
        });
    
  }
  
export default connect(
    mapStateToProps,
    
    dispatch => bindActionCreators({requestUsersList: requestUsersList,requestUserRoles:requestUserRoles, push: push}, dispatch)

)(Users);
