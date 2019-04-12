import React from 'react';
import '../../css/users.css'
import {changeCheckedStatus,requestUsersList} from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class FilterComponent extends React.Component{

  componentDidUpdate(){
}
render(){
    return(
             <div className="well" id="filter">
               <div className="form-group">
               <form className="check-box">
                <h3 className="check-title">Category</h3>
                {this.props.roles.map(item => (
                    <div key={item.type} className="category-text">
                        <label className="category-text-style"  >
                            <input
                                type="checkbox"
                                name={item.type}
                                checked={item.isChecked}
                                onChange={(e) => {{this.props.changeCheckedStatus(e.target.name)}
                                  }}
                            />
                            {item.type}
                        </label>
                    </div>
                ))}
            </form>

               </div>
           </div>
        );

        }
    }
  export default connect(
      state => ({roles: state.usersReducers.roles,
      searchText:state.usersReducers.searchText}),
      dispatch => bindActionCreators({requestUsersList:requestUsersList,changeCheckedStatus:changeCheckedStatus}, dispatch)
  )(FilterComponent);