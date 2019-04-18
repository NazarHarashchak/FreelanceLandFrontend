import React, { Component } from 'react';
import './NavMenu.css';
import { Icon } from 'semantic-ui-react';

class NotificationIcon extends Component {
    constructor(props) {
        super(props);
        this.deleteNotif = this.deleteNotif.bind(this);
    }

    deleteNotif() {
        this.props.requestDelete(this.props.item.Id)
            .then(() => { sessionStorage.count -= 1 });   
    }

    render() {
        const date = new Date(this.props.item.DateAndTime);
        return (
            <div className='notification'>
                <Icon className='close icon' onClick={this.deleteNotif}></Icon>
                <h5>{this.props.item.Message}</h5>
                <h6 className="notificationDateTime">{date.toDateString()} {date.toLocaleTimeString()}</h6>
            </div>
        );
    }
}

export default NotificationIcon;