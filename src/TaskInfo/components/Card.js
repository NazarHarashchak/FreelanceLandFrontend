import React, {Component} from "react";
import { Link } from 'react-router-dom';
import "./taskbody.css";
import  logo from '../../store/default-logo.jpg';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
          image: ''
      };
    }
    render() {
        return (
            <div className="row">
              
                <div  className ="col-md-4">
                  <div id="customer-photo">{(this.props.photo !== "empty") ? 
                    <img src={this.props.photo} alt="фото користувача" width="80px"/>:
                    <img src={logo} alt="фото користувача" width="80px"/>}
                  </div>
                  </div>
                    <div className ="col-md-8" id="customer-name"> 
                    <Link to={`/ProfilePage/${this.props.id}`}>
                    {this.props.name 
                      + ' ' +  this.props.secName}
                    </Link></div>
                </div>
        );
    }
}

export default Card;