import React from 'react';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Regularcourses from '../Regularcourses/Regularcourses';
const Home = () => {
    return (
        <div className="container-fluid"> 
            <div className=" homepage row justify-content-center">
                <div className="col-lg-8 col-md-8 col-sm-10 p-4 mt-4  row-container">
                        <h1 className="mt-4">We take learning to new heights</h1>
                        <h3>The Top Coding Education Platform For Programming enthusiastic student</h3>
                    <div className="d-flex justify-content-evenly mt-4 mb-4">
                        <Button className="w-25 button1">Log-in</Button>
                        <Button className="w-25 button2">Registration</Button>
                    </div>
                </div>
            </div>
            <div className="mt-4 ms-4 mb-4">
                <h1 className="text-center title mb-4">Our Regular Courses</h1>
                <Regularcourses></Regularcourses>
            </div>
        </div>
    );
};

export default Home;