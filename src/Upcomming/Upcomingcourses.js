import React from 'react';

const Upcomingcourses = (props) => {
    const {name, price,img,duration,description} = props.course
    return (
        <div class="card-container courses col-lg-4 col-md-6 col-sm-12">
        <div class="card "><div className="courses details" href="hottub">
            <div class="card--display">
                <img width="150px" height="150px" src={img} alt="" />
            <h3>{name}</h3>
            <h4>$ {price}</h4>
            <p><b>{duration}</b></p>
            </div>
            <div class="card--hover ">
            <br />
            <small className="sml" >{description}</small>
            </div>
        </div>
        <div class="card--border"></div>
        </div>
</div>
    );
};

export default Upcomingcourses;

