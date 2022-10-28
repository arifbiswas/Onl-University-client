
import React from "react";
import { Outlet } from "react-router-dom";
import SiteBar from "../pages/shearedPages/SiteBar";

const Courses = () => {
  
  return (
    <div className="container lg:flex lg:gap-5 justify-center  mx-auto">
      <span>
        <SiteBar></SiteBar>
      </span>
      <span className="w-full">
        <Outlet/>
      </span>
    </div>
  );
};

export default Courses;
