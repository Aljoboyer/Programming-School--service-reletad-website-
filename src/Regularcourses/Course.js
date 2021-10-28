import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './Courses.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Course = (props) => {
    const {_id,name,price,img,description,duration} = props.courses
    return (
        
        <div className="card-container courses col-lg-4 col-md-6 col-sm-12">
                <div className="card "><div className="courses details" href="hottub">
                    <div className="card--display">
                        <img width="150px" height="150px" src={img} alt="" />
                    <h3>{name}</h3>
                    <h4>$ {price}</h4>
                    <p><b>{duration}</b></p>
                    <Link to={`/enrolldetails/${_id}`}><Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button></Link>                    </div>
                    <div className="card--hover ">
                    <Link to={`/enrolldetails/${_id}`}><Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button></Link>                    <br />
                    <small className="sml" >{description}</small>
                    </div>
                </div>
                <div className="card--border"></div>
                </div>
        </div>

    );
};

export default Course;



{/* <Card className="card-container courses col-lg-4 col-md-6 col-sm-12" style={{ width: '24rem' }}>
            <Card.Img variant="top" className="mt-2 rounded-circle mx-auto" height="150px" src={img}/>
            <Card.Body className="card">
            <div className="card--display">
                <Card.Title>{name}</Card.Title>
                <h4>$ {price}</h4>
                <p><b>{duration}</b></p>
            </div>
                <Card.Text className="card--hover">
                    <Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button>
                    <small>{description}</small>
                </Card.Text>
            </Card.Body>
            <div className="card--border"></div>
        </Card> */}