import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            
                {
                    courses.map(c => <li className="text-center pb-2 border"><Link to={`/courses/${c.courses_id}`}>{c.name}</Link></li>)
                }
            
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SiteBar;
