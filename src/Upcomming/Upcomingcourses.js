import React from 'react';

const Upcomingcourses = (props) => {
    const {name, price,img,duration,description} = props.course
    return (
        <div className="col-lg-4 ms-4 col-md-6 col-sm-12 courses">
            <img height="200px" width="200" className="rounded ms-4 mt-4" src={img} alt="" />
            <h3>{name}</h3>
            <h3>{price}</h3>
            <p><b>{duration}</b></p>
            <small>{description}</small>
        </div>
    );
};

export default Upcomingcourses;