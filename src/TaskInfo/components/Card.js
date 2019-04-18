import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./taskbody.css";
import  logo from './123.jpeg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: ''
      };
    }
    render() {
        return (
            <div>
            <table id="user-table">
              <tbody>
                <tr id="bottom-row">
                  <td>
                  <div id="user-photo">{(this.props.photo !== "empty") ? 
                    <img src={this.props.photo} alt="фото користувача" width="80px"/>:
                    <img src={logo} alt="фото користувача" width="80px"/>}
                  </div>
                  </td>
                  <td>
                    <span id="user-link"> 
                    <Link to={`/ProfilePage/${this.props.id}`}>
                    <i className="fa fa-address-book"></i>{this.props.name 
                      + ' ' +  this.props.secName}
                    </Link></span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
        );
    }
}

export default Card;