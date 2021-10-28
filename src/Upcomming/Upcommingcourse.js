import React from 'react';
import Upcomingcourses from './Upcomingcourses';
import {Upcomingcourse} from '../Hooks/Hook'
import { Spinner,Button } from 'react-bootstrap';
const Upcommingcourse = () => {
    const [upcomingcourse] = Upcomingcourse()

    return (
        <> { upcomingcourse.length ?
        <div className="container-fluid">
            <div className="row gap-4 mt-4 mb-4">
                {
                    upcomingcourse.map(course => <Upcomingcourses key={Math.random()}
                    course={course}
                    ></Upcomingcourses>)
                }
            </div>
        </div> : <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading...
                    </Button> }
                    </>
    );
};

export default Upcommingcourse;