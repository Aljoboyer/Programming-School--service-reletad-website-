import { useEffect, useState } from "react"

const CoursesShowing = () => {
    const [courses, setCourses] = useState([]);
    const [totalpage, setTotalpage] = useState(0);
    const [pageno, setPageno] = useState(0);
    const size = 5;

    useEffect(() => {
        fetch(`http://localhost:5000/services?page=${pageno}&&size=${size}`)
        .then(res => res.json())
        .then(data => {
            setCourses(data.services);
            const count = data.count;
            const page = Math.ceil(count / size)
            setTotalpage(page)
        })
    },[pageno])
   

    return {courses, setCourses,pageno,setPageno,totalpage, setTotalpage};
}
const Upcomingcourse = () => {
    const [upcomingcourse, setUpcomingcourse] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/upcomingservices')
        .then(res => res.json())
        .then(data => setUpcomingcourse(data))
    },[])
    return [upcomingcourse, setUpcomingcourse];
}
export {CoursesShowing,Upcomingcourse}