import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SiteBar = () => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-10-app-server-arifbiswas.vercel.app/courses')
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])
  return (
    <div>
      {/* <h1>Arif Biswas</h1> */}
      <aside className="w-64 border" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-2">
            <li className="text-center text-2xl mb-5 font-bold">
              Courses List
            </li>
            
                {
                    courses.map(c => <li className="text-center pb-2 border"><NavLink 
                    className={({ isActive }) =>
                      isActive
                        ? "block py-2 pr-4 pl-3 text-white bg-rose-500  rounded md:bg-transparent md:text-rose-500 md:p-0 dark:text-white  border-2  border-b-rose-600"
                        : "block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500  dark:hover:text-white md:dark:hover:bg-transparent "
                    }
                    
                    to={`/courses/${c.courses_id}`}>{c.name}</NavLink></li>)
                }
            
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SiteBar;
