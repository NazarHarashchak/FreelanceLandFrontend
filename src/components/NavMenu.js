import React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';
function onClickLogout() {
    sessionStorage.removeItem('tokenKey');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('login');
    sessionStorage.removeItem('role');
    document.location.replace('loginPage');
}

export default props => (
    <Navbar inverse fixedTop fluid collapseOnSelect>
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
            </Nav>
            {sessionStorage.getItem('tokenKey') ?
                (
                    <Nav pullRight id="LogoutNavigation">
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

);
