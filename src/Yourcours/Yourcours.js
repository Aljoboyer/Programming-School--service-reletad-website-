import React, { useEffect, useState } from 'react';
import { Col, Row ,Button} from 'react-bootstrap';
import useAuth from '../Context/useAuth';
import { CoursesShowing } from '../Hooks/Hook';
import Courses from './Courses';

const Yourcours = () => {
    const {user} = useAuth()
    const [ordercourse, setOrdercourses] = useState([])
    
    useEffect(() => {
        const epmty = [];
        const emails = [...epmty, user.email]
        fetch('http://localhost:5000/confirm/byemail', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(emails)
        })
        .then(res => res.json())
        .then(order => {
            setOrdercourses(order)
        })
    },[])
    const DeleteHanlder = (id) => {
       fetch(`http://localhost:5000/confirm/${id}`, {
           method: 'DELETE'
       })
       .then(res => res.json())
       .then(data => {
           if(data.deletedCount > 0)
           {    
               const remain = ordercourse.filter(course => course._id !== id)
               setOrdercourses(remain)
               alert('Deleted SuccessFully')
           }
       })
    }
    return (
        <div className="container-fluid">
            <Row className="mt-4 mb-4 p-3">
              {
                  ordercourse.length ? ordercourse.map(course =>  <Courses DeleteHanlder={DeleteHanlder} key={Math.random()} course={course}></Courses>) : <Row>
                    <h1>No Courses Added Yet</h1>
                </Row>
              }
            </Row>
        </div>
    );
};

export default Yourcours;