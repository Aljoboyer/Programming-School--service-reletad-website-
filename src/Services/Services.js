import React from 'react';
import { Row,Button, Col, Spinner } from 'react-bootstrap';
import { CoursesShowing } from '../Hooks/Hook';
import Allcourses from './Allcourses';
import './allservices.css';
const Services = () => {
    const {courses, setCourses,pageno,setPageno,totalpage, setTotalpage} = CoursesShowing()
    return (
        <> { courses.length ? 
        <div className="container-fluid ">
            <Row className="d-flex justify-content-center">
               <Col lg={6}>
               {
                    [...Array(totalpage).keys()].map(number =>
                    
                    <button className={pageno === number ? 'selected' : 'unselected'} key={number} onClick={() => setPageno(number)} >{number}</button>)
                }
               </Col>
            </Row>
            <div className="row gap-4 mt-4 mb-4">
                {
                    courses.map(course => <Allcourses
                         key={Math.random()}
                         course={course}
                    ></Allcourses>)
                }
            </div>
        </div> :  <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button>
}
        </>
    );
};

export default Services;