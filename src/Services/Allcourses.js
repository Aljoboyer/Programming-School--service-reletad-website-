import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
const Allcourses = (props) => {
    const {name,price,img,description,duration} = props.course
    return (
        <div class="card-container courses col-lg-4 col-md-6 col-sm-12">
                <div class="card "><div className="courses details" href="hottub">
                    <div class="card--display">
                        <img width="150px" height="150px" src={img} alt="" />
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    <p><b>{duration}</b></p>
                    <Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button>
                    </div>
                    <div class="card--hover ">
                    <Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button>
                    <br />
                    <small className="sml" >{description}</small>
                    </div>
                </div>
                <div class="card--border"></div>
                </div>
        </div>
    );
};

export default Allcourses;
