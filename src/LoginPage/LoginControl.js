import React, { Component } from 'react';
import './LoginControl.css';
class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: true };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
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
        <label for="username"><b>Username</b></label>
        <input type="text" placeholder="Enter username" name="username" />
        <label for="password"><b>Password</b></label>
        <input type="text" placeholder="Enter password" name="password" />
        <button type="submit" class="signin">SIGN IN</button>
        <input type="checkbox" name="remember" />
        <label for="remember">Remember me</label>
        <span class="password"><a class="forgotPass" href="#">Forgot your password?</a></span>
    </div>);
}

function GuestGreeting(props) {
    return (<div class="createAccount">
        <h1>Create Account</h1>
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter username" name="uname" />
        <label for="password"><b>Password</b></label>
        <input type="text" placeholder="Enter password" name="password" />
        <label for="confirmPassword"><b>Confirm password</b></label>
        <input type="text" placeholder="Confirm password" name="confirmPassword" />
        <button type="submit" class="signup">SIGN UP</button>
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

function LogoutButton(props) {
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
