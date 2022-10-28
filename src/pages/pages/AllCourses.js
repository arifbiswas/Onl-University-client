import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCoursesInfo from './AllCourseInfo';

const AllCourses = () => {
    const allCourses = useLoaderData();
    // console.log(allCourses);
    return (
        <div className='grid  lg:grid-cols-2 gap-5 '>
            {
                allCourses.map(course=> <AllCoursesInfo key={course.courses_id}
                    course={course}
                ></AllCoursesInfo>)
            }
        </div>
    );
};

export default AllCourses;