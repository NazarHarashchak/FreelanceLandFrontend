import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import Successfull from '../components/Successfull';


class ChangePass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordValid: '',
            passwordColor: '',
            passwordError: '',
            confirmedPass: '',
            confirmedPassValid: '',
            confirmPasswordColor: '',
            confPassError: '',
            showPop: false,
            errorPop: false
        };

        this.passwordChange = this.passwordChange.bind(this);
        this.confirmedPassChange = this.confirmedPassChange.bind(this);
        this.buttonSubmit = this.buttonSubmit.bind(this);
    }

    passwordChange(event) {
        this.validatePassword(event.target.value);
        this.setState({ password: event.target.value });
    }

    confirmedPassChange(event) {
        this.validateConfirmPassword(event.target.value, this.state.password);
        this.setState({ confirmedPass: event.target.value });
    }

    validatePassword(Pass) {
        let pass = Pass;
        let passwordError = '';
        var passReg = /\d/g;
        this.validateConfirmPassword(this.state.confirmedPass, pass)
        if (!(pass.length > 0)) {
            passwordError = "Password can not be blank!";
        }
        else if (pass.length < 6) {
            passwordError = "Password must contain at least 6 characters and one digit!";
        }
        else if (!passReg.test(pass)) {
            passwordError = "Password must contain at least one digit!";
        }
        this.setState({ passwordError: passwordError });
        if (passwordError) {
            this.setState({ passwordColor: "red" });
            return false;
        }
        this.setState({ passwordColor: "green" });
        return true;
    }

    validateConfirmPassword(ConfPass, Pass) {
        let confPass = ConfPass;
        let confPassError = '';
        if (!(confPass.length > 0)) {
            confPassError = "Confirmed password can not be blank!";
        } else if (confPass != Pass) {
            confPassError = "Passwords must match!";
        }
        this.setState({ confPassError: confPassError });
        if (confPassError) {
            this.setState({ confirmPasswordColor: "red" });
            return false;
        }
        this.setState({ confirmPasswordColor: "green" });
        return true;
    }

    validationForm() {
        const validPass = this.validatePassword(this.state.password);
        const validConfirmPassword = this.validateConfirmPassword(this.state.confirmedPass, this.state.password);
        if (validPass && validConfirmPassword)
            return true;
        else
            return false;
    }

    buttonSubmit() {
        if (this.validationForm()) {
            this.props.requestChange(this.props.user.Login, this.state.password)
                .then(() => {
                    if (this.props.updatedUser === null) { this.setState({ errorPop: true }) }
                    else { this.setState({ showPop: true }) }                    
                });
        }
    }

    render() {
        if (this.state.showPop)
            return (
                <Successfull />);
        return (
            <div className="validateUser">
                <SweetAlert
                    show={this.state.errorPop}
                    title="Fail!"
                    text="Something went wrong!"
                    confirmButtonColor='#075232'
                    onConfirm={() => this.setState({ errorPop: false })}
                />
                <h1>Enter your new password.</h1>
                <label htmlFor="password">
                    <b>Password</b>
                </label>
                {this.state.passwordError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.passwordError}</div>) : null}
                <input type="password" className="password" placeholder="Enter password" value={this.state.password}
                    onChange={this.passwordChange} style={{ borderColor: this.state.passwordColor }} />
                <label htmlFor="confirmPassword">
                    <b>Confirm password</b>
                </label>
                {this.state.confPassError ? (<div style={{ fontSize: 14, color: "red" }}>{this.state.confPassError}</div>) : null}
                <input type="password" className="confirmPassword" placeholder="Confirm pasword" value={this.state.confirmedPass}
                    onChange={this.confirmedPassChange} style={{ borderColor: this.state.confirmPasswordColor }} />
                <button type="submit" onClick={this.buttonSubmit}>
                    Change password
                </button>
            </div>);
    }
}
export default ChangePass;
