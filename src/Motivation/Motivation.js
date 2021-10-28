import React from 'react';

const Motivation = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-4 mb-4 justify-content-center">
                <div className="col-lg-8 col-sm-8 col-md-8 text-center">
                    <h3 className="title">How it works</h3>
                    <p><b>This is the website we wish we had when we were learning on our own. We scour the internet looking for only the best resources to supplement your learning and present them in a logical order.</b></p>
                </div>
            </div>
            <div className="row mb-4 mt-4">
                <div className="col-lg-4 col-sm-12 col-md-6 mt-4 mb-4 p-4 text-center justify-content-center">
                <i className="fab fa-leanpub fa-10x"></i>
                <h2 className="mb-2 mt-4">Learn</h2>
                    <h6>Learn from a curriculum with the best curated online tutorials, blogs, and courses.</h6>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-6 mt-4 mb-4 p-4 text-center justify-content-center">
                <i className="fas fa-laptop fa-10x"></i>
                <h2  className="mb-2 mt-4">Build</h2>
                <h6>Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites.</h6>
                </div>
                <div className="col-lg-4 col-sm-12 col-md-6 mt-4 mb-4 p-4 text-center justify-content-center">
                <i className="fas fa-link fa-10x"></i>
                <h2  className="mb-2 mt-4">Connect</h2>
                <h6>You’re not alone. Learn and get help from our friendly community of beginner and experienced developers.</h6>
                </div>
            </div>
        </div>
    );
};

export default Motivation;