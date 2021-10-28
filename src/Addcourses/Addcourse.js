import React from 'react';
import { useForm } from "react-hook-form";
import { Col, Row } from 'react-bootstrap';

const Addcourse = () => {
    const { register,reset, handleSubmit, watch, formState: { errors } } =useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(courses => {
            if(courses.insertedId)
            {
                alert('Successfully added')
                reset()
            }
        })
    }
    return (
        <div className="container-fluid">
        <Row className="justify-content-center mt-4">
            <Col lg={6} md={12} sm={12} className="login-form">
                   <form onSubmit={handleSubmit(onSubmit)} >
                   <h2 className="title text-center mt-1">Add A Course</h2>
                <label htmlFor="">Name</label>
                <input className="w-100" type ="text" {...register("name", { required: true })} />
                    {errors.name && <p className="text-danger">This field is required</p>}

                    <label htmlFor="">Image Url</label>
                    <input className="w-100" type="type" {...register("img", { required: true })} />
                    {errors.img && <p className="text-danger">This field is required</p>}

                    <label htmlFor="">Price</label>
                    <input className="w-100" type ="number" {...register("price", { required: true})} />
                    {errors.price && <p className="text-danger">This field is required</p>}
                    <label htmlFor="">Duration</label>
                    <input className="w-100" type ="text" {...register("duration", { required: true})} />
                    {errors.duration && <p className="text-danger">This field is required</p>}
                    <label htmlFor="">Description</label>
                    <textarea className="w-100" type ="text" {...register("description", { required: true, min:6,})} />
                    {errors.description && <p className="text-danger">This field is required</p>}
                           
                       <input className="mb-3" type="submit" value="Add Course" />
                      
               </form>
            </Col>
        </Row>
   </div>
    );
};

export default Addcourse;