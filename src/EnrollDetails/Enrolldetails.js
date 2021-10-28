import React, { useEffect, useState } from 'react';
import {Col, Row} from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useAuth from '../Context/useAuth';
import { AddLocalstorage } from '../Localstorage/Localstorages';
const Enrolldetails = () => {
    const { register,reset, handleSubmit, watch, formState: { errors } } =useForm();
    const {user} = useAuth()
    const [course, setCourse] = useState({});
    const {id} = useParams()
    const [added, setAdded] = useState(false)
    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    const onSubmit  = data => {
        const ids = course._id
        fetch('http://localhost:5000/confirm', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
            {
                alert('Confirm Successfull');
                reset()
                AddLocalstorage(ids)
            }
        })
    }

    return (
        <div className="container-fluid">
            <Row className="mt-4 mb-4">
                <Col lg={6} md={6} sm={12}>
                    <img className="img-fluid rounded" src={course.img} alt="" />
                    <h3>{course.name}</h3>
                    <h5>{course.price}</h5>
                    <p><b>{course.duration}</b></p>
                    <p>{course.description}</p>
                </Col>
                <Col lg={6} md={6} sm={12}>
                <form onSubmit={handleSubmit(onSubmit)} >
                   <h2 className="title text-center mt-1">Fill Up The Form To Confirm Enroll</h2>
                         <label htmlFor="">Course Name</label>
                        <input defaultValue={course.name} className="w-100" type ="text" {...register("coursename", { required: true })} />
                           {errors.coursename && <p className="text-danger">This field is required</p>}
                           <label htmlFor="">Course Price</label>
                        <input defaultValue={course.price} className="w-100" type ="number" {...register("price", { required: true })} />
                           {errors.price && <p className="text-danger">This field is required</p>}
                        
                           <label htmlFor="">Image URl </label>
                        <input defaultValue={course.img} className="w-100" type ="text" {...register("img", { required: true })} />
                           {errors.img && <p className="text-danger">Copy The Url and Paste again into field</p>}

                        <label htmlFor="">Your Name</label>
                        <input className="w-100" type ="text" {...register("name", { required: true })} />
                           {errors.name && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Email</label>
                           <input defaultValue={user.email} className="w-100" type="email" {...register("email", { required: true })} />
                           {errors.email && <p className="text-danger">This field is required</p>}

                           <label htmlFor="">Phone</label>
                           <input className="w-100" type ="number" {...register("phone", { required: true})} />
                           {errors.phone && <p className="text-danger">This field is required</p>}
                           
                           <label htmlFor="">Address</label>
                           <input className="w-100" type ="text" {...register("address", { required: true})} />
                           {errors.address && <p className="text-danger">This field is required</p>}

                       <input className="mb-3" type="submit" value="Confirm Enroll" />
               </form>
                </Col>
            </Row>
        </div>
    );
};

export default Enrolldetails;
