import React, { Component } from 'react';
import './LoginControl.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../LoginPage/actions';
import { Redirect } from 'react-router';
import SweetAlert from 'sweetalert2-react';
import chechBoxes from '../Users/components/chechBoxes';


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            loginError: '',
            loginColor: '',
            password: '',
            passwordError: '',
            passwordColor: '',
            checkBox: false,
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
        console.log(this.state.checkBox);
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
                            localStorage.setItem('tokenKey', sessionStorage.getItem('tokenKey'));
                            localStorage.setItem('id', sessionStorage.getItem('id'));
                            localStorage.setItem('login', sessionStorage.getItem('login'));
                            localStorage.setItem('role', sessionStorage.getItem('role'));
                        }
                    }
                });
        }
    }

    render() {

        if (this.state.swaper === true) {
            return <Redirect to='/registrationPage' />
        }
        if (this.props.user !== null) {
            if (this.props.user.access_token === sessionStorage.getItem("tokenKey")) {
                console.log("Success!");
                const link = '/home/';
                return (<Redirect to={link} />);
            }
        }

        if (!sessionStorage.getItem('tokenKey') && !localStorage.getItem('tokenKey')) {
            return (
                <div className="signInForm">

                    <SweetAlert
                        show={this.state.errorPop}
                        title="Fail!"
                        text="User with this login doesn`t exist!"
                        confirmButtonColor='#075232'
                        onConfirm={() => this.setState({ errorPop: false })}
                    />
                    <div className="signIn">
                        <h1>Sign in to Freelance-land</h1>
                        <label for="username">
                            <b>Username</b>
                        </label>
                        {this.state.loginError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.loginError}</div>) : null}
                        <input type="text" placeholder="Enter username" name="username"
                            value={this.state.login} onChange={this.loginChange} />
                        <label for="password">
                            <b>Password</b>
                        </label>
                        {this.state.passwordError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.passwordError}</div>) : null}
                        <input type="password" placeholder="Enter password" name="password"
                            value={this.state.password} onChange={this.passwordChange} />
                        <button type="submit" className="signin" onClick={this.authenticationSubmit}>
                            SIGN IN
                    </button>
                        <input type="checkbox" name="remember" onChange={this.boxRememberMeChange} />
                        <label for="remember">Remember me</label>
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
                        <button type="submit" class="sign" onClick={this.swap}>
                            SIGN UP
                    </button>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="signInForm">
                    <h2>
                        You already authenticated!
                    </h2>
                </div>);
        }
    }
}

export default connect(
    state => state.loginReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(LoginPage);
