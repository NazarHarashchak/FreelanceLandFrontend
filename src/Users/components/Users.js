import React ,{Component} from 'react';
import UsersList from "./UsersList";
import FilterComponent from './FilterComponent'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {requestUsersList} from '../action';
import './stylles.css';
import SeachBar from './SeachBar';
import { Pagination } from 'react-bootstrap'; 
import { push } from 'react-router-redux'; 
import ScrollTop from '../../tasks/components/ScrollTop';




class Users extends Component {

    constructor(props){
        super(props);
        this.current_page = this.props.page;
  
        this.changePage = this.changePage.bind(this);
      };
  
    componentWillMount() {


        this.props.requestUsersList(this.props.page);
    }
    
    componentWillReceiveProps(nextProps) {
    }

    
    
    render()
    {
      
  
       const pages = 2
        return (
            <div className="container">
               
                <div className="main-content container">
                    <SeachBar/>
                    <div className="row">
                        <div
                            ref={(el) => { this.anchor = el; }}>
                        </div>
                        <div className="col-md-9" id="j-orders-search-list">
                            <UsersList usersList={this.props.newusers} isLoading={this.props.isLoading}/>
                        </div>
                        <div className="col-md-3" >
                        <FilterComponent/>
                        </div>
                        </div >
                    <Pagination className="users-pagination pull-center" 
        bsSize="medium" maxButtons={10} first last next prev boundaryLinks 
        items={pages} activePage={this.current_page} onSelect={this.changePage} />
                   
                    </div>
                    <ScrollTop anchor={this.anchor}/>
            </div >
        );
        
    }
    
    changePage(page){
        this.props.push(page)
        this.props.requestUsersList(page);
        this.current_page =page;
        
    }
}

function mapStateToProps (state ) {
    return({
        state : state.usersReducers,
      page: state.routing && state.routing.locationBeforeTransitions && state.routing.locationBeforeTransitions.query && state.routing.locationBeforeTransitions.query.page_no || 1,
      current_page: state.page,
      
    });
    
  }
  
export default connect(
    mapStateToProps,
    
    dispatch => bindActionCreators({requestUsersList: requestUsersList,push: push}, dispatch)

)(Users);
