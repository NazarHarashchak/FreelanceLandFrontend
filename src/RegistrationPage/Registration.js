import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../RegistrationPage/actions';
import { Redirect } from 'react-router'
import SweetAlert from 'sweetalert2-react';

const initialState = {
    email: '',
    emailValid: false,
    emailColor: '',
    emailError: '',
    login: '',
    loginValid: false,
    loginColor: '',
    loginError: '',
    password: '',
    passwordValid: '',
    passwordColor: '',
    passwordError: '',
    confirmedPass: '',
    confirmedPassValid: '',
    confirmPasswordColor: '',
    confPassError: ''
}

class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailColor: '',
            emailError: '',
            login: '',
            loginColor: '',
            loginError: '',
            password: '',
            passwordColor: '',
            passwordError: '',
            confirmedPass: '',
            confirmPasswordColor: '',
            confPassError: '',
            swaper: false,
            showPop: false,
            errorPop: false
        };

        this.emailChange = this.emailChange.bind(this);
        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.confirmedPassChange = this.confirmedPassChange.bind(this);
        this.registrationSubmit = this.registrationSubmit.bind(this);
        this.swap = this.swap.bind(this);
    }

    validateEmail(Email){
        let email = Email;
        let emailError = '';
        let emailReg = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        if(!(email.length > 0))
        {
            emailError = "Email can not be blank!";
        }
        else if(!emailReg.test(email))
        {
            emailError = "Email is not valid!";
        }
        this.setState({emailError: emailError});
        if(emailError)
        {
            this.setState({emailColor: "red"});
            return false;
        }
        this.setState({emailColor: "green"});
        return true;
    }

    validateLogin(Login){
        let login = Login;
        let loginError = '';
        if(!(login.length > 0))
        {
            loginError = "Username can not be blank!";
        }
        else if(login.length < 6)
        {
            loginError = "Username must contain at least 6 characters!";
        }
        this.setState({loginError: loginError});
        if(loginError)
        {
            this.setState({loginColor: "red"});
            return false;
        }
        this.setState({loginColor: "green"});
        return true;
    }

    validatePassword(Pass){
        let pass = Pass;
        let passwordError = '';
        var passReg = /\d/g;
        this.validateConfirmPassword(this.state.confirmedPass, pass)
        if(!(pass.length > 0))
        {
            passwordError = "Password can not be blank!";
        }
        else if(pass.length < 6)
        {
            passwordError = "Password must contain at least 6 characters and one digit!";
        }
        else if(!passReg.test(pass))
        {
            passwordError = "Password must contain at least one digit!";
        }
        this.setState({passwordError: passwordError});
        if(passwordError)
        {
            this.setState({passwordColor: "red"});
            return false;
        }
        this.setState({passwordColor: "green"});
        return true;
    }

    validateConfirmPassword(ConfPass, Pass){
        let confPass = ConfPass;
        let confPassError = '';
        if(!(confPass.length > 0))
        {
            confPassError = "Confirmed password can not be blank!";
        } else if(confPass != Pass)
        {
            confPassError = "Passwords must match!";
        }
        this.setState({confPassError: confPassError});
        if(confPassError)
        {
            this.setState({confirmPasswordColor: "red"});
            return false;
        }
        this.setState({confirmPasswordColor: "green"});
        return true;
    }

    validationForm(){
        const validLogin = this.validateLogin(this.state.login);
        const validEmail = this.validateEmail(this.state.email);
        const validPass = this.validatePassword(this.state.password);
        const validConfirmPassword = this.validateConfirmPassword(this.state.confirmedPass, this.state.password);
        if(validLogin && validEmail && validPass && validConfirmPassword)
            return true;
        else
            return false;
    }

    swap() {
        this.setState({ swaper: true });
    }

    emailChange(event) {
        var val = event.target.value;
        this.validateEmail(val);
        this.setState({ email: event.target.value});
    }

    loginChange(event) {
        var val = event.target.value;
        this.validateLogin(val);
        this.setState({ login: val});
    }

    passwordChange(event) {
        var val = event.target.value;
        this.validatePassword(val);
        this.setState({ password: val});
    }

    confirmedPassChange(event) {
        var val = event.target.value;
        this.validateConfirmPassword(val, this.state.password);
        this.setState({ confirmedPass: val});
    }

    registrationSubmit(event) {
      
       const validation = this.validationForm();
       if(validation)
       {
            this.props.requestRegister(this.state.email, this.state.login, this.state.password)
                .then(() => {
                    if(this.props.user != null) { this.setState({showPop: true})}
                    else 
                    {this.setState({errorPop: true})}
                });
            this.setState(initialState);
        }      
        event.preventDefault();
    }

    render() {
        if (this.state.swaper === true) {
            return <Redirect to='/loginPage' />
        }

        return (
            <div class="signUpForm">
            <SweetAlert
                show={this.state.showPop}
                title="Cool!"
                text="Your Registration was successfull, now you can sign in!"
                confirmButtonColor='#075232'
                onConfirm={() => this.setState({ showPop: false })}
            />
            <SweetAlert
                show={this.state.errorPop}
                title="Fail!"
                text="User with the same login already exists!"
                confirmButtonColor='#075232'
                onConfirm={() => this.setState({ errorPop: false })}
            />
                <div class="createAccount" >
                    <h1>Create Account</h1>
                    <label for="email">
                        <b>Email</b>
                    </label>
                    {this.state.emailError ? (<div style = {{ fontSize: 14, color: "red"}}>{this.state.emailError}</div>) : null}
                    <input type="text" placeholder="Enter email" name="email"
                        value={this.state.email} onChange={this.emailChange} style={{borderColor: this.state.emailColor}}/>
                    <label for="uname">
                        <b>Username</b>
                    </label>
                    {this.state.loginError ? (<div style = {{ fontSize: 14, color: "red"}}>{this.state.loginError}</div>) : null}
                    <input type="text" placeholder="Enter username" name="uname"
                        value={this.state.login} onChange={this.loginChange} style={{borderColor: this.state.loginColor}}/>
                    <label for="password">
                        <b>Password</b>
                    </label>
                    {this.state.passwordError ? (<div style = {{ fontSize: 14, color: "red"}}>{this.state.passwordError}</div>) : null}
                    <input type="password" placeholder="Enter password" name="password"
                        value={this.state.password} onChange={this.passwordChange} style={{borderColor: this.state.passwordColor}}/>
                    <label for="confirmPassword">
                        <b>Confirm password</b>
                    </label>
                    {this.state.confPassError ? (<div style = {{ fontSize: 14, color: "red"}}>{this.state.confPassError}</div>) : null}
                    <input type="password" placeholder="Confirm password" name="confirmPassword"
                        value={this.state.confirmedPass} onChange={this.confirmedPassChange} style={{borderColor: this.state.confirmPasswordColor}}/>
                    <button type="submit" class="signup" onClick={this.registrationSubmit}>
                        SIGN UP
                    </button>
                </div>
                <div class="swaper">
                    <h1>Welcome Back!</h1>
                    <h3 className="text-detais">To keep connected with us please</h3>
                    <h3 className="text-detais">login with your personal info</h3>
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