import React, { Component } from 'react';
import './LoginControl.css';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm.js';

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
        this.state = { isLoggedIn: true };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleRegistrationClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <RegistrationButton onClick={this.handleRegistrationClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        if (isLoggedIn) {
            return (
                <div class="greeting">
                    <Greeting isLoggedIn={isLoggedIn} />
                    {button}
                </div>);
        } else {
            return (
                <div class="greeting">
                    {button}
                    <Greeting isLoggedIn={isLoggedIn} />
                </div>);
        }
    }
}

function UserGreeting(props) {
    return ( <div class="signIn">
        <h1>Sign in to Freelance-land</h1>
        <SignInForm />
        <input type="checkbox" name="remember" />
        <label for="remember">Remember me</label>
        <span class="password"><a class="forgotPass" href="#">Forgot your password?</a></span>
    </div>);
}

function GuestGreeting(props) {
    return (<div class="createAccount">
        <h1>Create Account</h1>
        <SignUpForm />
    </div>);
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <div class="swaper">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please</p>
            <p>login with your personal info</p>
            <button type="submit" class="sign" onClick={props.onClick}>SIGN IN</button>
        </div>
    );
}

function RegistrationButton(props) {
    return (
        <div class="swaper">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details</p>
            <p>and start journey with us</p>
            <button type="submit" class="sign" onClick={props.onClick}>SIGN UP</button>
        </div>
    );
}

export default LoginControl;
