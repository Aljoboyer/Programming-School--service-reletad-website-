import React from 'react';
import './Home.css'
import Button from 'react-bootstrap/Button';
import Regularcourses from '../Regularcourses/Regularcourses';
import Motivation from '../Motivation/Motivation';
import { Link } from 'react-router-dom';
import useAuth from '../Context/useAuth';
import { CoursesShowing } from '../Hooks/Hook';
const Home = () => {
    const {user} = useAuth();

    
    return (
        <div className="container-fluid"> 
            <div className="homepage row justify-content-center ">
                <div className="col-lg-8 col-md-8 col-sm-10 p-4 mt-4  row-container">
                        <h1 className="mt-4">We take learning to new heights</h1>
                        <h3>The Top Coding Education Platform For Programming enthusiastic student</h3>
                    {
                        user.email ? '' : <div className="d-flex justify-content-evenly flex-lg-nowrap flex-md-wrap mt-4 mb-4">
                        <div><Link to="/login"><Button className="button1">Log-in</Button></Link></div>
                        <div><Link  to="/register"><Button className=" button2">Registration</Button></Link></div>
                    </div>
                    }
                </div>
            </div>
            <div className="mt-4 mb-4">
                <h1 className="text-center title mt-4 mb-4 pt-4">Our Regular Courses</h1>
                <Regularcourses></Regularcourses>
            </div>
            <Motivation></Motivation>
        </div>
    );
};

export default Home;