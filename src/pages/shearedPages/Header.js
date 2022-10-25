import React from "react";
import { NavLink } from "react-router-dom";
import { FaBookOpen } from 'react-icons/fa';
import { useState } from "react";

const Header = () => {
    const [on,setOn] = useState(false);
    const [open,setOpen]=useState(false);
    const handleDarkMod = ()=>{
        setOn(!on)
    }

  return (
    <div>
      <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <NavLink to="/home" className="flex items-center" >
              <span className="text-2xl mr-2 font-black text-rose-700"><FaBookOpen></FaBookOpen></span>
              <span className="self-center text-xl font-semibold whitespace-nowrap font-black text-rose-700">
                OnL University
              </span>
            </NavLink>
            <button
            onClick={()=>setOpen(!open)}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-500 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={false}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden={false}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              className={`${open ? '' :'hidden'} w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-500">
               
                <li>
                  <NavLink
                    to="/home"
                    className={({isActive})=>isActive ?"block py-2 pr-4 pl-3 text-white bg-rose-500  rounded md:bg-transparent md:text-rose-500 md:p-0 dark:text-white  border-2  border-b-rose-600" : "block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500  dark:hover:text-white md:dark:hover:bg-transparent "}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className={({isActive})=>isActive ?"block py-2 pr-4 pl-3 text-white bg-rose-500  md:bg-transparent md:text-rose-500 md:p-0 dark:text-white border-2  border-b-rose-600 rounded" : "block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent "}
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={({isActive})=>isActive ?"block py-2 pr-4 pl-3 text-white bg-rose-500  md:bg-transparent md:text-rose-500 md:p-0 dark:text-white border-2  border-b-rose-600 rounded" : "block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent "}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="register"
                    className={({isActive})=>isActive ?"block py-2 pr-4 pl-3 text-white bg-rose-500  md:bg-transparent md:text-rose-500 md:p-0 dark:text-white border-2  border-b-rose-600 rounded" : "block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent "}
                  >
                    Register
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="faq"
                    className={({isActive})=>isActive ?"block py-2 pr-4 pl-3 text-white bg-rose-500  md:bg-transparent md:text-rose-500 md:p-0 dark:text-white border-2  border-b-rose-600 rounded" : "block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent "}
                  >
                    FAQ
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="blog"
                    className={({isActive})=>isActive ?"block py-2 pr-4 pl-3 text-white bg-rose-500  md:bg-transparent md:text-rose-500 md:p-0 dark:text-white border-2  border-b-rose-600 rounded" : "block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent "}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="profile"
                    className="block py-2 pr-4 pl-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-rose-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-500 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    User Profile
                  </NavLink>
                </li>
                <li>
                  <label
                    htmlFor="checked-toggle"
                    className="inline-flex relative items-center cursor-pointer"
                  >
                    <input
                    onClick={handleDarkMod}
                      type="checkbox"
                      value=""
                      id="checked-toggle"
                      className="sr-only peer"
                      checked={on}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-rose-300 dark:peer-focus:ring-rose-800 dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-600"></div>

                  </label>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
