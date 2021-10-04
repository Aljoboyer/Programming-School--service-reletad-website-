import { useEffect, useState } from "react"

const CoursesShowing = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./courses.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return [courses, setCourses];
}
const Upcomingcourse = () => {
    const [upcomingcourse, setUpcomingcourse] = useState([]);
    useEffect(() => {
        fetch('./upcomingcourse.JSON')
        .then(res => res.json())
        .then(data => setUpcomingcourse(data))
    },[])
    return [upcomingcourse, setUpcomingcourse];
}
export {CoursesShowing,Upcomingcourse}