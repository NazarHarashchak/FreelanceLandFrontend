import React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

function onClickLogout() {
    localStorage.removeItem('tokenKey');
    localStorage.removeItem('id');
    localStorage.removeItem('login');
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
                <LinkContainer to={'/home'} exact>
                    <NavItem>
                        <Glyphicon glyph='home' /> Home
                    </NavItem>
                </LinkContainer>
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
            {localStorage.getItem('tokenKey') ?
                (
                    <Nav pullRight id="LogoutNavigation">
                        <LinkContainer to={'/loginPage'}>
                            <NavItem id="logoutButton">

                                <button onClick={onClickLogout}> Logout </button>

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
