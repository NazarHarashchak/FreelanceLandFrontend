import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import SweetAlert from 'sweetalert2-react';
import ConfirmCode from '../components/ConfirmCode';


class ValidateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            loginError: '',
            loginColor: '',
            errorPop: false
        };

        this.loginChange = this.loginChange.bind(this);
        this.validateUserSubmit = this.validateUserSubmit.bind(this);
    }

    validateLogin(Login) {
        let login = Login;
        let loginError = '';
        if (!(login.length > 0)) {
            loginError = "Username can not be blank!";
        }

        this.setState({ loginError: loginError });
        if (loginError) {
            this.setState({ loginColor: "red" });
            return false;
        }
        this.setState({ loginColor: "green" });
        return true;
    }

    validationForm() {
        const validLogin = this.validateLogin(this.state.login);
        if (validLogin)
            return true;
        else
            return false;
    }

    loginChange(event) {
        this.validateLogin(event.target.value);
        this.setState({ login: event.target.value });
    }

    validateUserSubmit() {
        if (this.validationForm()) {
            this.props.requestValidate(this.state.login)
                .then(() => {
                    if (this.props.user === null) { this.setState({ errorPop: true }) }
                });
        }
    }

    render() {
        if (this.props.user !== null && this.props.user.Login === this.state.login) {
            return (
                <ConfirmCode user={this.props.user}
                    requestSend={this.props.requestSend}
                    code={this.props.code}
                    requestChange={this.props.requestChange}
                    updatedUser={this.props.updatedUser}
                />);
        }
        else {
            return (
                <div className="validateUser">
                    <SweetAlert
                        show={this.state.errorPop}
                        title="Fail!"
                        text="User with this login doesn`t exist!"
                        confirmButtonColor= '#075232'
                        onConfirm={() => this.setState({ errorPop: false })}
                    />
                    <h1>Forgot password?</h1>
                    <h3>Enter your username to reset your password.</h3>
                    {this.state.loginError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.loginError}</div>) : null}
                    <input type="text" placeholder="Enter username" name="username"
                        value={this.state.login} onChange={this.loginChange} style={{ borderColor: this.state.loginColor }} />
                    <button type="submit" className="resetPass" onClick={this.validateUserSubmit}>
                        Reset password
                    </button>
                </div>);
        }
    }
}
export default connect(
    state => state.restorePassReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(ValidateUser);
