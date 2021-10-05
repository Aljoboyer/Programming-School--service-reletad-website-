import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './nav.css'
const Nave = () => {
    return (
<div className="navber ">
    <Navbar collapseOnSelect className="" expand="lg">
    <Container>
    <Navbar.Brand className="title2" href="#home">Programming School</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <i class="fas fa-chalkboard-teacher fa-3x"></i>
        </Nav>
        <Nav>
            <NavLink   className="NavLink  me-4 fw-bold" to="/">Home</NavLink>
            <NavLink  className="NavLink  me-4 fw-bold"  to="/service">Services</NavLink>
            <NavLink  className="NavLink  me-4 fw-bold"  to="/aboutus">About Us</NavLink>
            <NavLink  className="NavLink  me-4 fw-bold"  to="/upcommingcourse">Upcoming Courses</NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
    );
};

export default Nave;