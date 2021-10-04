import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './nav.css'
const Nave = () => {
    return (
<div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Programming School</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
            <NavLink   className="NavLink text-light me-4 fw-bold" to="/">Home</NavLink>
            <NavLink  className="NavLink text-light me-4 fw-bold"  to="/service">Services</NavLink>
            <NavLink  className="NavLink text-light me-4 fw-bold"  to="/aboutus">About Us</NavLink>
            <NavLink  className="NavLink text-light me-4 fw-bold"  to="/upcommingcourse">Upcoming Courses</NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
    );
};

export default Nave;