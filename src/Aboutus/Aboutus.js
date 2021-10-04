import React from 'react';
import img from '../asset/image/aboutus.png'
import Chart from './Chart';
const Aboutus = () => {
    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="img col-lg-6 col-md-5 col-sm-12">
                    <img width="400px" src={img} alt="" />
                </div>
                <div className="description col-lg-5 col-md-5 col-sm-12 mt-4">
                    <h2>About us</h2>
                    <p>We are trying to create a great learning environment for programmer.
                        We started our journey from 2015, since our beging we did a great job.
                        we teaching around 10thousand student.We always concern about students
                        learning.
                    </p>
                </div>
            </div>
            <div className="row">
                <h1 className="text-center">Our Visitors Actitvity</h1>
                <div className="col-lg-7 col-md-12 col-sm-12 h-50">
                    <Chart></Chart>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 mt-4">
                    <div className="d-flex justify-content-between">
                        <div>
                            <small><b>Total visitors</b></small>
                            <h2>10.6M</h2>
                        </div>
                        <div>
                            <small><b>Bounce Rate</b></small>
                            <h2>43.03%</h2>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                            <div>
                                <small><b>Pages per Visit</b></small>
                                <h2>3.00</h2>
                            </div>
                            <div>
                                <small><b>Avg Visit Duration</b></small>

                                <h2>00.03.58</h2>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;