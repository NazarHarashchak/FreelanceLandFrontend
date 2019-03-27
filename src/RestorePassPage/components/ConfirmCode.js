import React, { Component } from 'react';
import SweetAlert from 'sweetalert2-react';
import ChangePass from '../components/ChangePass';


class ConfirmCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            valid: false,
            errorPop: false
        };

        this.codeChange = this.codeChange.bind(this);
        this.codeSubmit = this.codeSubmit.bind(this);
    }

    componentWillMount() {
        this.props.requestSend(this.props.user.Email);
    }

    codeChange(event) {
        this.setState({ code: event.target.value });
    }

    codeSubmit() {
        if (Number(this.state.code) === this.props.code.Code) {
            this.setState({ valid: true });
        }
        else {
            this.setState({ errorPop: true });
        }
    }

    render() {
        if (this.props.code !== null && this.state.valid) {
            return (<ChangePass requestChange={this.props.requestChange}
                updatedUser={this.props.updatedUser}
                user={this.props.user} />);
        }
        else {
            return (
                <div className="validateUser">
                    <SweetAlert
                        show={this.state.errorPop}
                        title="Fail!"
                        text="Code is not correct!"
                        confirmButtonColor='#075232'
                        onConfirm={() => this.setState({ errorPop: false })}
                    />
                    <h2>We have sent you a verification code. </h2>
                    <h3>Please check your email for a text message with your code. Your code is 6 characters long.</h3>
                    <input type="text" placeholder="Enter code" value={this.state.code}
                        onChange={this.codeChange} />
                    <button type="submit" className="resetPass" onClick={this.codeSubmit}>
                        Continue
                </button>
                </div>
            );
        }
    }
}
export default ConfirmCode;
