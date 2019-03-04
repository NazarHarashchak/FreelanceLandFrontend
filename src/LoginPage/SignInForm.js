import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../LoginPage/loginStore/actions';
import { Redirect } from 'react-router'

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            allowRedirect: false
        };

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.authenticationSubmit = this.authenticationSubmit.bind(this);
    }

    loginChange(event) {
        this.setState({ login: event.target.value });
    }

    passwordChange(event) {
        this.setState({ password: event.target.value });
    }

    authenticationSubmit(event) {
        event.preventDefault();
        const username = this.state.login;
        const pass = this.state.password;
        if (!username)
            alert('Username is required!');
        if (!pass)
            alert('Password is required!');
        if (username && pass)
            this.setState({ allowRedirect: true });
        //if (username && pass) {
        //    this.props.actionCreators.requestLogin(username, pass);
        //}
        console.log(this.props.user);
    }

    render() {
        if (this.state.allowRedirect === true) {
            return <Redirect to='/tasks'/>
        }

        return (
            <form class="signInForm" onSubmit={this.authenticationSubmit}>
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
                <button type="submit" class="signin">
                    SIGN IN
                </button>                    
            </form>
        );
    }
}

connect(
    state => state.loginReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(SignInForm);

export default SignInForm;