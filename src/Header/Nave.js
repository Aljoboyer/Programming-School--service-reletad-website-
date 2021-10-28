import React from 'react';
import {Container, Nav, Navbar,Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import './nav.css'
const Nave = () => {
    const {user,LogoutUser} = useAuth();

    const LogOutHandler = () => {
        LogoutUser()
    }
    return (
<div className="navber ">
    <Navbar collapseOnSelect className="" expand="lg">
    <Container>
    <Navbar.Brand className="navtitle2" href="#home">Programming School</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <i className="me-4 fas fa-chalkboard-teacher fa-3x"></i>
        <NavLink  className="NavLink mt-2  ms-4 fw-bold"  to="/yourcours">Your Courses</NavLink>
        </Nav>
        <Nav>
            <NavLink   className="NavLink  me-4 fw-bold" to="/">Home</NavLink>
            <NavLink  className="NavLink  me-4 fw-bold"  to="/service">Services</NavLink>
            <NavLink  className="NavLink  me-4 fw-bold"  to="/aboutus">About Us</NavLink>
            <NavLink  className="NavLink  me-4 fw-bold"  to="/upcommingcourse">Upcoming Courses</NavLink>
           {
               user.email === 'admin@gmail.com' ?  <NavLink  className="NavLink  me-4 fw-bold"  to="/addcourse">Add Course</NavLink> : '' 
           }
            {
               user.email ?  <Button onClick={LogOutHandler}  className="btn btn-dark text-warning fw-bold rounded"  >Log Out</Button> : ''
            }
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
</div>
    );
};

export default Nave;