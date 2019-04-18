import React, { Component } from 'react';
import './LoginControl.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../LoginPage/actions';
import { Redirect } from 'react-router';
import SweetAlert from 'sweetalert2-react';
import PropTypes from 'prop-types';


class LoginPage extends Component {
    static propTypes = {
        requestLogin: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            login: localStorage.login,
            loginError: '',
            loginColor: '',
            password: localStorage.password,
            passwordError: '',
            passwordColor: '',
            checkBox: localStorage.checked,
            swaper: false,
            errorPop: false
        };

        this.loginChange = this.loginChange.bind(this);
        this.boxRememberMeChange = this.boxRememberMeChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.authenticationSubmit = this.authenticationSubmit.bind(this);
        this.swap = this.swap.bind(this);
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

    validatePassword(Pass) {
        let pass = Pass;
        let passwordError = '';
        if (!(pass.length > 0)) {
            passwordError = "Password can not be blank!";
        }
        this.setState({ passwordError: passwordError });
        if (passwordError) {
            this.setState({ passwordColor: "red" });
            return false;
        }
        this.setState({ passwordColor: "green" });
        return true;
    }

    validationForm() {
        const validLogin = this.validateLogin(this.state.login);
        const validPass = this.validatePassword(this.state.password);
        if (validLogin && validPass)
            return true;
        else
            return false;
    }

    swap() {
        this.setState({ swaper: true });
    }

    loginChange(event) {
        this.validateLogin(event.target.value);
        this.setState({ login: event.target.value });
    }

    passwordChange(event) {
        this.validatePassword(event.target.value);
        this.setState({ password: event.target.value });
    }

    boxRememberMeChange() {
        this.setState({ checkBox: !this.state.checkBox });
    }

    authenticationSubmit(event) {
        event.preventDefault();
        const validation = this.validationForm();
        if (validation) {
            this.props.requestLogin(this.state.login, this.state.password)
                .then(() => {
                    if (this.props.user === null) { this.setState({ errorPop: true }) }
                    else {
                        if (this.state.checkBox)
                        {
                            localStorage.setItem('login', this.state.login);
                            localStorage.setItem('password', this.state.password);
                            localStorage.setItem('checked', true);
                        }
                    }
                    this.props.requestNotificationsCount(sessionStorage.getItem('id'))
                        .then(() => {
                            console.log('Get count');
                            if (this.props.user !== null) {
                                if (this.props.user.access_token === sessionStorage.getItem("tokenKey")) {
                                    (document.location.replace('main'));
                                }
                            }
                        });
                });
        }
    }

    render() {

        if (this.state.swaper === true) {
            return <Redirect to='/registrationPage' />
        }
        

        return (
            <div className="signInForm">

                <SweetAlert
                    show={this.state.errorPop}
                    title="Fail!"
                    text="Username or password is incorrect!"
                    confirmButtonColor='#075232'
                    onConfirm={() => this.setState({ errorPop: false })}
                />
                <div className="signIn">
                    <h1>Sign in to Freelance-land</h1>
                    <label htmlFor="username">
                        <b>Username</b>
                    </label>
                    {this.state.loginError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.loginError}</div>) : null}
                    <input type="text" placeholder="Enter username" name="username"
                        value={this.state.login || ''} onChange={this.loginChange} />
                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    {this.state.passwordError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.passwordError}</div>) : null}
                    <input type="password" placeholder="Enter password" name="password"
                        value={this.state.password || ''} onChange={this.passwordChange} />
                    <button type="submit" className="signin" onClick={this.authenticationSubmit}>
                        SIGN IN
                    </button>
                    <input type="checkbox" name="remember" checked={Boolean(this.state.checkBox)} onChange={this.boxRememberMeChange} />
                    <label htmlFor="remember">Remember me</label>
                    <span className="password">
                        <a className="forgotPass" href="/restorePass">
                            Forgot your password?
                            </a>
                    </span>
                </div>
                <div className="swaper">
                    <h1>Hello, Friend!</h1>
                    <h3 className="text-detais">Enter your personal details</h3>
                    <h3 className="text-detais">and start journey with us</h3>
                    <button type="submit" className="sign" onClick={this.swap}>
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
