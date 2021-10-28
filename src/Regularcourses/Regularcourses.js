import React from 'react';
import { CoursesShowing } from '../Hooks/Hook';
import Course from './Course';

const Regularcourses = () => {
    const {courses} = CoursesShowing();
    const newcourse = courses.splice(5,14)
    return (
        <div className="container-fluid">
            <div className="mx-auto row gap-4">
                {
                    courses.map(course => <Course key={Math.random()} courses={course} ></Course>)
                }
            </div>
        </div>

    );
};

export default Regularcourses;