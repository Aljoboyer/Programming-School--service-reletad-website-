import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Allcourses = (props) => {
    const {_id,name,price,img,description,duration} = props.course
    return (
        <div class="card-container courses col-lg-4 col-md-6 col-sm-12">
                <div class="card "><div className="courses details" href="hottub">
                    <div class="card--display">
                        <img width="150px" height="150px" src={img} alt="" />
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    <p><b>{duration}</b></p>
                    <Link to={`/enrolldetails/${_id}`}><Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button></Link>
                    </div>
                    <div class="card--hover ">
                    <Link to={`/enrolldetails/${_id}`}><Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button></Link>
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
