import React from 'react';
import { Col ,Button} from 'react-bootstrap';

const Courses = (props) => {
    const {img,_id, price,coursename} = props.course
    return (
        <Col lg={4}>
        <img className="w-75" src={img} alt="" />
        <h2>{coursename}</h2>
        <h3>{price}</h3>
        <Button onClick={() => props.DeleteHanlder(_id)} className="btn btn-danger text-light">Delete Course</Button>
    </Col>
    );
};

export default Courses;