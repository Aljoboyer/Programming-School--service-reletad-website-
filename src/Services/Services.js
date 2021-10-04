import React from 'react';
import { CoursesShowing } from '../Hooks/Hook';
import Allcourses from './Allcourses';

const Services = () => {
    const [courses] = CoursesShowing()
    return (
        <div className="container-fluid ">
            <div className="row gy-4 mt-4 mb-4 ms-4 mx-auto">
                {
                    courses.map(course => <Allcourses
                         key={Math.random()}
                         course={course}
                    ></Allcourses>)
                }
            </div>
        </div>
    );
};

export default Services;