import React from 'react';
import Button from 'react-bootstrap/Button';
const Allcourses = (props) => {
    const {name,price,img,description,duration} = props.course
    return (
        <div className="col-lg-4 ms-4 col-md-6 col-sm-12 courses">

                <div>
                    <img width="250px" height="200px" className="mt-2 rounded mx-4"  src={img} alt="" />
                    <h3>{name}</h3>
                    <h4>{price}</h4>
                    <p><b>{duration}</b></p>
                    <Button className="w-75 bg-warning text-dark fw-bold">To Enroll see Details</Button>
                    <br />
                    <small>{description}</small>
                </div>
        </div>
    );
};

export default Allcourses;