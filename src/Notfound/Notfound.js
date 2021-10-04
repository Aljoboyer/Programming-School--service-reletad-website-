import React from 'react';
import logo from '../asset/image/404notfound.png';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Notfound = () => {
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-item-center">
                <div className="text-center ">
                    <img height="400px" width="500px" src={logo} alt="" />
                    <br />
                    <Link to="/"><Button className="w-50 mb-4 bg-warning text-dark fw-bold" >Go to Home</Button>
</Link>
                </div>
            </div>
        </div>
    );
};

export default Notfound;