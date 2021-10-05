import React from 'react';
import Upcomingcourses from './Upcomingcourses';
import {Upcomingcourse} from '../Hooks/Hook'
const Upcommingcourse = () => {
    const [upcomingcourse] = Upcomingcourse()
    console.log(upcomingcourse)
    return (
        <div className="container-fluid">
            <div className="row gap-4 mt-4 mb-4">
                {
                    upcomingcourse.map(course => <Upcomingcourses key={Math.random()}
                    course={course}
                    ></Upcomingcourses>)
                }
            </div>
        </div>
    );
};

export default Upcommingcourse;