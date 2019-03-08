import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import $ from 'jquery';

class LoginTest extends Component {
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
        console.log(this.state);
    }

    passwordChange(event) {
        this.setState({ password: event.target.value });
        console.log(this.state);
    }

    authenticationSubmit(event) {
        event.preventDefault();
        var tokenKey = "accessToken";
            var loginData = {
                grant_type: 'password',
                username: this.state.login,
                password: this.state.login.password
            };

           

            fetch('https://localhost:44331/api/account/token', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: loginData
            }).then((response) => response.text())
            .then((responseText) => {
              alert("it works.." + responseText);
            })
            .catch((error) => {
              console.error(error);
            });

        console.log(this.state);
    }

    render() {

        
        return (
            <div>
            <div>
                <p>Вы вошли как: <span class="userName"></span></p>
                <input type="button" value="Выйти" id="logOut" />
            </div>
            <div class="loginForm">
                <h3>Вход на сайт</h3>
                <label>Введите email</label><br />
                <input type="email" id="emailLogin"  value={this.state.login} onChange={this.loginChange}/> <br /><br />
                <label>Введите пароль</label><br />
                <input type="password" id="passwordLogin"  value={this.state.password} onChange={this.passwordChange}/><br /><br />
                <input type="submit" id="submitLogin" value="Логин"  onClick={this.authenticationSubmit}/>
            </div>
                <div>
                    <input type="submit" id="getDataByLogin" value="Данные по логину" />
            </div>
            <div>
                <input type="submit" id="getDataByRole" value="Данные по роли" />
            </div>
            </div>
        );
    }
}

export default (LoginTest);
