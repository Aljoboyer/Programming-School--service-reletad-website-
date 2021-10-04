import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Courses.css';
import Button from 'react-bootstrap/Button';

const Course = (props) => {
    const {name,price,img,description,duration} = props.courses
    return (
        <div className="ms-4 col-lg-4 col-md-6 courses col-sm-12">
            <div>
                <img width="200px" className="mt-2 rounded mx-4" height="200px" src={img} alt="" />
                <h3>{name}</h3>
                <h4>$ {price}</h4>
                <p><b>{duration}</b></p>
                <Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button>
                <br />
                <small>{description}</small>
            </div>
        </div>
    );
};

export default Course;