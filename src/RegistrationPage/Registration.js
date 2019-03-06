import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../RegistrationPage/actions';
import { Redirect } from 'react-router'

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            login: '',
            password: '',
            confirmedPass: '',
            swaper: false,
            allowRedirect: false
        };

        this.emailChange = this.emailChange.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmedPassChange = this.confirmedPassChange.bind(this);
        this.registrationSubmit = this.registrationSubmit.bind(this);
        this.swap = this.swap.bind(this);
    }

    swap() {
        this.setState({ swaper: true });
    }

    emailChange(event) {
        this.setState({ email: event.target.value });
    }

    loginChange(event) {
        this.setState({ login: event.target.value });
    }

    passwordChange(event) {
        this.setState({ password: event.target.value });
    }

    confirmedPassChange(event) {
        this.setState({ confirmedPass: event.target.value });
    }

    registrationSubmit(event) {
        if (!this.state.email)
            alert('Email is required!');
        if (!this.state.login)
            alert('Username is required!');
        if (!this.state.password)
            alert('Password is required!');
        if (!this.state.confirmedPass)
            alert('Confirmed password is required!');
        if (this.state.login && this.state.password && this.state.confirmedPass) {
            if (this.state.password !== this.state.confirmedPass) {
                alert("Passwords have to coincides!");
            }
            else {
                this.props.requestRegister(this.state.login, this.state.password);
            }
        }        
        event.preventDefault();
    }

    render() {
        if (this.state.swaper === true) {
            return <Redirect to='/loginPage' />
        }
        if (this.state.allowRedirect === true) {
            //here will be page for registration
        }

        return (
            <div class="signUpForm">
                <div class="createAccount" >
                    <h1>Create Account</h1>
                    <label for="email">
                        <b>Email</b>
                    </label>
                    <input type="text" placeholder="Enter email" name="email"
                        value={this.state.email} onChange={this.emailChange} />
                    <label for="uname">
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter username" name="uname"
                        value={this.state.login} onChange={this.loginChange} />
                    <label for="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter password" name="password"
                        value={this.state.password} onChange={this.passwordChange} />
                    <label for="confirmPassword">
                        <b>Confirm password</b>
                    </label>
                    <input type="password" placeholder="Confirm password" name="confirmPassword"
                        value={this.state.confirmedPass} onChange={this.confirmedPassChange} />
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