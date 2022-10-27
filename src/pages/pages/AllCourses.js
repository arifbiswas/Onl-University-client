import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCoursesInfo from './AllCourseInfo';

const AllCourses = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses);
    return (
        <div>
            {
                allCourses.map(course=> <AllCoursesInfo key={course._id}
                    course={course}
                ></AllCoursesInfo>)
            }
        </div>
    );
};

export default AllCourses;