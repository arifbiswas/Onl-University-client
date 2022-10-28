import React from "react";
import { NavLink } from "react-router-dom";

const AllCoursesInfo = ({course}) => {
//  console.log(course);
  const { courses_id,name, image, description } = course;
  return (
    <div className="my-10 ">
      <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
          <img
            className="rounded-lg w-[100%] h-[70vh]"
            src={image}
            alt=""
          />
       
        <div className="p-5">
          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {description.slice(0,150)}
          </p>
          <NavLink
            to={`/course/${courses_id}`}
            className="inline-flex justify-center shadow-lg w-full items-center py-5 px-5 my-2 text-1xl font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 lg:mr-5"
         
          >
            More Info
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NavLink>
          <NavLink 
            to={`/admission/${courses_id}`}
            className="inline-flex justify-center shadow-lg w-full items-center py-5 px-5 my-2 text-1xl font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800 lg:mr-5"
          >
            APPLICATION FORM
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllCoursesInfo;
