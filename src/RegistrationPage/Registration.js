import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../RegistrationPage/actions';
import { Redirect } from 'react-router'
import SweetAlert from 'sweetalert2-react';

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailValid: false,
            emailColor: '',
            login: '',
            loginValid: false,
            loginColor: '',
            password: '',
            passwordValid: '',
            passwordColor: '',
            confirmedPass: '',
            confirmedPassValid: '',
            confirmPasswordColor: '',
            swaper: false,
            showPop: false
        };

        this.emailChange = this.emailChange.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmedPassChange = this.confirmedPassChange.bind(this);
        this.registrationSubmit = this.registrationSubmit.bind(this);
        this.swap = this.swap.bind(this);
    }

    validateEmail(email){
        return email.length > 0;
    }

    validateLogin(login){
        return login.length > 0;
    }

    validatePassword(pass){
        return pass.length > 0;
    }

    validateConfirmPassword(confPass){
        return confPass.length > 0;
    }

    swap() {
        this.setState({ swaper: true });
    }

    emailChange(event) {
        var val = event.target.value;
        var valid = this.validateEmail(val);
        var emailColor = valid ? "green" : "red";
        this.setState({ email: event.target.value, emailValid: valid, emailColor: emailColor });
    }

    loginChange(event) {
        var val = event.target.value;
        var valid = this.validateLogin(val);
        var loginColor = valid ? "green" : "red";
        this.setState({ login: val, loginValid: valid , loginColor: loginColor});
    }

    passwordChange(event) {
        var val = event.target.value;
        var valid = this.validateLogin(val);
        var passwordColor = valid ? "green" : "red";
        this.setState({ password: val, passwordValid: valid, passwordColor: passwordColor});
    }

    confirmedPassChange(event) {
        var val = event.target.value;
        var valid = this.validateConfirmPassword(val);
        var confirmPasswordColor = valid ? "green" : "red";
        this.setState({ confirmedPass: val, confirmedPassValid: valid, confirmPasswordColor: confirmPasswordColor });
    }

    registrationSubmit(event) {
       if(this.state.loginValid && this.state.emailValid && this.state.passwordValid && this.state.confirmedPassValid)
       {
            this.props.requestRegister(this.state.email, this.state.login, this.state.password)
                .then(this.state.showPop = true);
            this.state.email = "";
            this.state.login = "";
            this.state.password = "";
            this.state.confirmedPass = "";
        }
        else 
        {
            console.log("Validation error!");
        }       
        event.preventDefault();
    }

    render() {
        if (this.state.swaper === true) {
            return <Redirect to='/loginPage' />
        }

        return (
            <div class="signUpForm">
            <SweetAlert
                show={this.state.showPop}
                title="Cool!"
                text="Your Registration was successfull, now you should sign in!"
                onConfirm={() => this.setState({ showPop: false })}
            />
                <div class="createAccount" >
                    <h1>Create Account</h1>
                    <label for="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder="Enter email" name="email"
                        value={this.state.email} onChange={this.emailChange} style={{borderColor: this.state.emailColor}}/>
                    <label for="uname">
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter username" name="uname"
                        value={this.state.login} onChange={this.loginChange} style={{borderColor: this.state.loginColor}}/>
                    <label for="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter password" name="password"
                        value={this.state.password} onChange={this.passwordChange} style={{borderColor: this.state.passwordColor}}/>
                    <label for="confirmPassword">
                        <b>Confirm password</b>
                    </label>
                    <input type="password" placeholder="Confirm password" name="confirmPassword"
                        value={this.state.confirmedPass} onChange={this.confirmedPassChange} style={{borderColor: this.state.confirmPasswordColor}}/>
                    <button type="submit" class="signup" onClick={this.registrationSubmit}>
                        SIGN UP
                    </button>
                </div>
                <div class="swaper">
                    <h1>Welcome Back!</h1>
                    <p>To keep connected with us please</p>
                    <p>login with your personal info</p>
                    <button type="submit" class="sign" onClick={this.swap}>
                        SIGN IN
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.registrationReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(RegistrationPage);