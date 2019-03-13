import React from 'react';
import '../../css/users.css'
import { requestUserRoles, changeCheckedStatus} from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class CheckBox extends React.Component {
    componentWillMount() {
        // This method runs when the component is first added to the page
        this.props.requestUserRoles();
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
                                onChange={(e) => this.props.changeCheckedStatus(e.target.name)}
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

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        changeCheckedStatus,requestUserRoles
      },
      dispatch);
  }
export default connect(
    state => state.userRoles,
    matchDispatchToProps
)(CheckBox);