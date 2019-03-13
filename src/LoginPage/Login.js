import React, { Component } from 'react';
import './LoginControl.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../LoginPage/actions';
import { Redirect } from 'react-router'
import { Field, reduxForm} from 'redux-form';



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
            swaper: false
        };

        this.loginChange = this.loginChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.authenticationSubmit = this.authenticationSubmit.bind(this);
        this.swap = this.swap.bind(this);
    }

    validateLogin(Login){
        let login = Login;
        let loginError = '';
        if(!(login.length > 0))
        {
            loginError = "Username can not be blank!";
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
        if(!(pass.length > 0))
        {
            passwordError = "Password can not be blank!";
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

    validationForm(){
        const validLogin = this.validateLogin(this.state.login);
        const validPass = this.validatePassword(this.state.password);
        if(validLogin && validPass)
            return true;
        else
            return false;
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
                document.location.replace('loginPage');
            };
            li1.appendChild(profile); 
            document.getElementById('LoginNavigation').appendChild(li1);
            return (<Redirect to='/loginPage' />);
        }
    }

    authenticationSubmit(event) {
        event.preventDefault();
        const validation = this.validationForm();
        if (validation) {
            this.props.requestLogin(this.state.login, this.state.password);
        }
        else 
        {
            console.log("Validation error!");
        }
        if (this.props.user.username !== this.state.login) {
            console.log('There isn\'t such user!');
        }
        
    }

    render() {
        
        if (this.state.swaper === true) {
            return <Redirect to='/registrationPage' />
        }
        if (this.props.user.access_token === sessionStorage.getItem("tokenKey")) {
            
            this.addLogoutButton();
            console.log("Success!");
            const id = this.props.user.id;
            const link = '/ProfilePage/' + id;
            return (<Redirect to={link}/>);
        }
        

        return (
            <div className="signInForm">
            
            
                <div className="signIn">
                    <h1>Sign in to Freelance-land</h1>
                    <label for="username">
                        <b>Username</b>
                    </label>
                    {this.state.loginError ? (<div style = {{ fontSize: 14, color: "red"}}>{this.state.loginError}</div>) : null}
                    <input type="text" placeholder="Enter username" name="username"
                        value={this.state.login} onChange={this.loginChange} />
                    <label for="password">
                        <b>Password</b>
                    </label>
                    {this.state.passwordError ? (<div style = {{ fontSize: 14, color: "red"}}>{this.state.passwordError}</div>) : null}
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
