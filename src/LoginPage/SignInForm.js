import React, { Component } from 'react';

class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
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
        alert('Welcome ' + this.state.login + '!');
        event.preventDefault();
    }

    render() {
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

export default SignInForm;