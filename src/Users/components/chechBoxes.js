import React from 'react';
import '../../css/users.css'
import { requestUserRoles } from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import FilterComponent from './FilterComponent';
class CheckBox extends React.Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        requestUserRoles(this.props.roles);
    }

    render() {
        return (
            <form className="check-box">
            <h3 className="check-title">Category</h3>
                {this.props.roles.map(item => (
                    <div className="category-text">
                        <label className="category-text-style">
                            <input
                                type="checkbox"
                                name={item.type}
                                checked={item.isChecked}
                            />
                            {item.type}
                        </label>
                    </div>
                ))}
            </form>
        )
    }
}
export default connect(
    state => state.userRoles,
    dispatch => bindActionCreators(requestUserRoles, dispatch)
)(CheckBox);