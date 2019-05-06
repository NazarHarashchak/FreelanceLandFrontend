import React, { Component } from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';
import { Icon } from 'semantic-ui-react';
import * as signalR from '@aspnet/signalr';
import Popup from 'reactjs-popup';
import NotificationIcon from './Notifications';
import { actionCreators } from '../components/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ROOT } from '../services/api-config';

function onClickLogout() {
    sessionStorage.removeItem('tokenKey');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('count');
    document.location.replace('loginPage');
}

function addTask() {
    if (sessionStorage.getItem("id") !== null) {
        return (
            <LinkContainer to={'/AddTask'}>
                <NavItem>
                    <Glyphicon glyph='plus' /> Add Task
                </NavItem>
            </LinkContainer>
        );
    }
}

class NavMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hubConnection: null,
            count: Number(sessionStorage.count)
        };
        this.onClickNotif = this.onClickNotif.bind(this);
        this.hideNotifications = this.hideNotifications.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('tokenKey')) {
            let hubUrl = ROOT + '/notification';
            const hubConnection = new signalR.HubConnectionBuilder()
                .withUrl(hubUrl, { accessTokenFactory: () => sessionStorage.getItem('tokenKey') })
                .configureLogging(signalR.LogLevel.Information)
                .build();

            hubConnection.on('sendMessage', function (id) {
                if (id === Number(sessionStorage.getItem('id'))) {
                    sessionStorage.count = Number(sessionStorage.count) + 1;
                    this.setState({ count: Number(sessionStorage.count) });
                }
            }.bind(this));

            hubConnection.on('chatNotification', function (userId, message) {
                if (window.location.href.indexOf("ChatRoom") < 0) {
                    if (userId === Number(sessionStorage.getItem('id'))) {
                        sessionStorage.count = Number(sessionStorage.count) + 1;
                        this.setState({ count: Number(sessionStorage.count) });
                        hubConnection.invoke("AddNotification", userId, message);
                    }
                }
            }.bind(this));

            hubConnection.on('deleteNotification', function (id) {
                this.setState({ count: (Number(this.state.count) - 1) });
                console.log('deleted 1 notification');
                console.log(this.state.count);
            }.bind(this));

            hubConnection.start()
                .then(() => console.info('SignalR Connected'))
                .catch(err => console.error('SignalR Connection Error: ', err));

            this.setState({ hubConnection: hubConnection });
        }
    }

    onClickNotif() {
        this.props.requestGetNotifications(Number(sessionStorage.getItem('id')));
    }

    hideNotifications() {
        this.props.requestHide(Number(sessionStorage.getItem('id')))
            .then(() => {
                sessionStorage.setItem('count', '0');   
                this.setState({ count: Number(sessionStorage.count) });
            }
        );
    }
       
    
    render() {
        return (
            <form>                
                <Navbar inverse fixedTop collapseOnSelect fluid >                    
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={'/main'}>FreelanceLand</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>

                            <LinkContainer to={'/tasks/#'}>
                                <NavItem>
                                    <Glyphicon glyph='tasks' /> Tasks
                    </NavItem>
                            </LinkContainer>
                            <LinkContainer to={'/Users'}>
                                <NavItem>
                                    <Glyphicon glyph='th-list' /> Freelancers & Customers
                    </NavItem>
                            </LinkContainer>
                            {addTask()}
                        </Nav>
                        {(sessionStorage.getItem('tokenKey')) ?
                            (
                                <Nav pullRight id="LogoutNavigation">
                                    <NavItem onClick={this.onClickNotif}>
                                        <Popup className="mm-popup"
                                        trigger=
                                            {
                                            <Icon className='alarm outline'>
                                                <NotificationBadge count={this.state.count} effect={Effect.SCALE} />
                                                </Icon>
                                            } position="bottom center">
                                            <div className="notifications">
                                                {this.props.isLoading ?
                                                    (<h2>Loading...</h2>)
                                                    :
                                                    (<div className="notifications">
                                                        {(Number(this.state.count) > 0) ?
                                                            (<button className="ui green button" onClick={this.hideNotifications}>
                                                            Hide all
                                                        </button>) : null}
                                                        <hr />
                                                        <ul width="100%">
                                                            <li>
                                                                {this.props.notif.map(item => (
                                                                    <NotificationIcon
                                                                        key={item.id}
                                                                        item={item}
                                                                        requestDelete={this.props.requestDelete}
                                                                    />
                                                                ))}
                                                            </li>
                                                        </ul>
                                                    </div>)}
                                            </div>
                                        </Popup>
                                    </NavItem>
                                    <LinkContainer to={'/Message'} exact>
                                        <NavItem>
                                            <Glyphicon glyph='envelope' /> Chat
                                    </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/home'} exact>
                                        <NavItem>
                                            <Glyphicon glyph='home' /> {sessionStorage.getItem('login')}
                                        </NavItem>
                                    </LinkContainer>
                                    <LinkContainer to={'/loginPage'}>
                                        <NavItem id="logoutButton">

                                            <button className="logout-button" onClick={onClickLogout}> Logout </button>

                                        </NavItem>
                                    </LinkContainer>
                                </Nav>
                            ) :
                            (<Nav pullRight id="LoginNavigation">
                                <LinkContainer to={'/registrationPage'}>
                                    <NavItem id="RegistrationButton">
                                        <Glyphicon glyph='log-in' /> Registration
                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to={'/loginPage'}>
                                    <NavItem id="loginButton">
                                        <Glyphicon glyph='log-in' /> Login
                    </NavItem>
                                </LinkContainer>
                            </Nav>)}


                    </Navbar.Collapse>
                </Navbar>
            </form>
        );
    }
}

export default connect(
    state => state.notificationReducer,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(NavMenu);
