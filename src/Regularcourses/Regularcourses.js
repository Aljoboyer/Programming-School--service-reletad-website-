import React from 'react';
import { CoursesShowing } from '../Hooks/Hook';
import Course from './Course';

const Regularcourses = () => {
    const [courses] = CoursesShowing();
    const newcourse = courses.splice(5,14)
    return (
        <div className="container-fluid">
            <div className="row g-4 ms-4 mx-auto">
                {
                    courses.map(course => <Course key={Math.random()} courses={course} ></Course>)
                }
            </div>
        </div>
    );
};

export default Regularcourses;