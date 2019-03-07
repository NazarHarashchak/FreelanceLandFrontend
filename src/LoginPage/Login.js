import React, { Component } from 'react';
import './LoginControl.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../LoginPage/actions';
import { Redirect } from 'react-router'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            swaper: false
        };

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.authenticationSubmit = this.authenticationSubmit.bind(this);
        this.swap = this.swap.bind(this);
    }

    swap() {
        this.setState({ swaper: true });
    }

    loginChange(event) {
        this.setState({ login: event.target.value });
    }

    passwordChange(event) {
        this.setState({ password: event.target.value });
    }

    authenticationSubmit(event) {
        event.preventDefault();
        if (!this.state.login)
            alert('Username is required!');
        if (!this.state.password)
            alert('Password is required!');
        if (this.state.login && this.state.password) {
            this.props.requestLogin(this.state.login, this.state.password);
            if (this.props.user.login !== this.state.login) {
                alert('There isn\'t such user!');
            }
        }
    }

    render() {
        
        if (this.state.swaper === true) {
            return <Redirect to='/registrationPage' />
        }
        if (this.props.user.login === this.state.login) {
            return (<Redirect to='/tasks' />);
        }
        

        return (
            <div class="signInForm">
                <div class="signIn">
                    <h1>Sign in to Freelance-land</h1>
                    <label for="username">
                        <b>Username</b>
                    </label>
                    <input type="text" placeholder="Enter username" name="username"
                        value={this.state.login} onChange={this.loginChange} />
                    <label for="password">
                        <b>Password</b>
                    </label>
                    <input type="password" placeholder="Enter password" name="password"
                        value={this.state.password} onChange={this.passwordChange} />
                    <button type="submit" class="signin" onClick={this.authenticationSubmit}>
                        SIGN IN
                    </button>
                    <input type="checkbox" name="remember" />
                    <label for="remember">Remember me</label>
                    <span class="password">
                        <a class="forgotPass" href="#">
                            Forgot your password?
                            </a>
                    </span>
                </div>
                <div class="swaper">
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details</p>
                    <p>and start journey with us</p>
                    <button type="submit" class="sign" onClick={this.swap}>
                        SIGN UP
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(
    state => state.loginReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LoginPage);
