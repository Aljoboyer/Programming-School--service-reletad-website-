import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid footers">
            <div className="row p-3">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h3>LEGAL</h3>
                    <a href="/home"><li>Policies and Legal Documents</li></a>
                    <a href="/home"><li>Privacy</li></a>
                    <a href="/home"><li>Cookie Policy</li></a>
                    <a href="/home"><li>Money Back and Refund Policy</li></a>
                    <a href="/home"><li>Term and Service</li></a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h3>INSTRUCTORS and PARTNERS</h3>
                    <a href="/home"><li>Learning Management system</li></a>
                    <a href="/home"><li>Become an Instructor</li></a>
                    <a href="/home"><li>Become Our Partner</li></a>
                    <a href="/home"><li>Hire Talent with us</li></a>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h3>FOLLOW US</h3>
                    <i className="fab fa-twitter fa-2x"></i> <i className="fab fa-facebook fa-2x"></i> <i className="fab fa-linkedin fa-2x"></i> <i className="fab fa-youtube-square fa-2x"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;