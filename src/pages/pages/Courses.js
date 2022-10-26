import { Sidebar } from "flowbite-react";
import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import SiteBar from "../shearedPages/SiteBar";

const Courses = () => {
  const courses = useLoaderData();
  // console.log(courses);

  return (
    <div className="container lg:flex gap-5 mx-auto">
      <span>
        <SiteBar></SiteBar>
      </span>
      <span className="w-full">
        <Outlet></Outlet>
      </span>
    </div>
  );
};

export default Courses;
