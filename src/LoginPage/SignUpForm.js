import React, { Component } from 'react';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            confirmedPass: ''
        };

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmedPassChange = this.confirmedPassChange.bind(this);
        this.registrationSubmit = this.registrationSubmit.bind(this);
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
        if (!this.state.login)
            alert('Username is required!');
        if (!this.state.password)
            alert('Password is required!');
        if (!this.state.confirmedPass)
            alert('Confirmed password is required!');
        if (this.state.login && this.state.password && this.state.confirmedPass) {
            if (this.state.password === this.state.confirmedPass) {
                //this.props.requestRegister();
                alert("You registered successful!");
            }
            else {
                alert("Passwords have to coincides!");
            }
        }        
        event.preventDefault();
    }

    render() {
        return (
            <form class="SignUpForm" onSubmit={this.registrationSubmit}>
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
                <button type="submit" class="signup">SIGN UP</button>
            </form>
        );
    }
}

export default SignUpForm;