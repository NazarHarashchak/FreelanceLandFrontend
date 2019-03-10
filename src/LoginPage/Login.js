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
        console.log(this.state.login);
    }

    passwordChange(event) {
        this.setState({ password: event.target.value });
    }

    addLogoutButton() {
        document.getElementById('loginButton').style.visibility = 'hidden';
        document.getElementById('RegistrationButton').style.visibility = 'hidden';
        if(!document.getElementById('logoutButton'))
        {
            var li1 = document.createElement("LI");
            var profile = document.createElement("BUTTON"); 
            profile.id = "logoutButton";
            profile.innerHTML = 'Log Out';
            profile.onclick = function() {
                document.getElementById('loginButton').style.visibility = 'visible';
                document.getElementById('RegistrationButton').style.visibility = 'visible';
                sessionStorage.removeItem('tokenKey');
                profile.parentElement.removeChild(profile);
            };
            li1.appendChild(profile); 
            document.getElementById('LoginNavigation').appendChild(li1);
        }
    }

    authenticationSubmit(event) {
        event.preventDefault();
        if (!this.state.login)
            alert('Username is required!');
        if (!this.state.password)
            alert('Password is required!');

        

        if (this.state.login && this.state.password) {
            this.props.requestLogin(this.state.login, this.state.password);
        }

        if (this.props.user.username !== this.state.login) {
            console.log('There isn\'t such user!');
        }
        else
        {
            this.addLogoutButton();
            console.log("Success!");
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
            <div className="signInForm">
                <div className="signIn">
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
                    <button type="submit" className="signin" onClick={this.authenticationSubmit}>
                        SIGN IN
                    </button>
                    <input type="checkbox" name="remember" />
                    <label for="remember">Remember me</label>
                    <span className="password">
                        <a className="forgotPass" href="#">
                            Forgot your password?
                            </a>
                    </span>
                </div>
                <div className="swaper">
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
