import React from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export default props => (
    <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={'/'}>FreelanceLand</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to={''} exact>
                    <NavItem>
                        <Glyphicon glyph='home' /> Home
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={'/TaskInf'}>
                    <NavItem>
                        <Glyphicon glyph='tasks' /> Tasks
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={''}>
                    <NavItem>
                        <Glyphicon glyph='th-list' /> Freelancers & Customers
                    </NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <LinkContainer to={''}>
                    <NavItem>
                        <Glyphicon glyph='user' /> Sign Up
                    </NavItem>
                </LinkContainer>
                <LinkContainer to={'/fetchdata'}>
                    <NavItem>
                        <Glyphicon glyph='log-in' /> Login
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);
