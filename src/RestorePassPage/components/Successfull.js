import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Successfull extends Component {

    render() {
        return (
            <div className="validateUser">
                <h1>Your password was changed successfull!</h1>
                <Link className="revertPass" to='/loginPage'>
                    <h3>Now you can back and login</h3>
                </Link>
            </div>
            );
    }
}
export default Successfull;

