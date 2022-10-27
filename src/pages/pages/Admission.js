import React from "react";
import { useState } from "react";
import { useContext } from "react";

import { Link, Navigate, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext";


const Admission = () => {
  const navigate = useNavigate();
  const [disable,setdisable] = useState(true)
  const {user} = useContext(AuthProvider)
  const course = useLoaderData();
 
  const { name, courses_length ,courses_id} =
    course;
    
    const admissionFrom = (e)=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const preCollage = form.preCollage.value;
      const number = form.number.value;
      const ssc = form.ssc.value;
      const hsc = form.hsc.value;
      const email = form.email.value;
      const bkash = form.bkash.value;
      
      const admissionInfo = {name,preCollage,number,ssc,hsc,email,bkash}
      const admissionInfoJson =JSON.stringify(admissionInfo);
      localStorage.setItem('fromInfo',admissionInfoJson)
      navigate(`/pdf/${courses_id}`)
    }

    // const handlNavigate =()=>{
    //   return <Navigate to='/lol'></Navigate>
    // }

  return (
    <div className="container mx-auto mb-8" >
     <div className="text-center my-2">
     <h1 className="text-1xl lg:text-3xl font-black text-rose-500">ADMISSION OF {name.toUpperCase()}</h1>
      <h2 className="text-[18px] lg:text-3xl mb-0 font-extralight "> OnL University From Bangladesh</h2>
      <h2 className="text-[10px] lg:text-[20px]  mb-10 font-semibold text-rose-400">COURSE FOR {courses_length.toUpperCase()}</h2>
     </div>
      <form 
      onSubmit={admissionFrom}
      className="w-[80%] lg:w-[60%] mx-auto"> 
        <div className="grid gap-6 mb-6 md:grid-cols-1 ">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Full Name
            </label>
            <input
            
              type="text"
              id="first_name"
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 "
              placeholder="first name"
              value={user?.displayName}
              required
            />
          </div>
          
          <div>
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Previous Collage 
            </label>
            <input
              type="text"
              id="company"
              name="preCollage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
              placeholder="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
              placeholder="'01871063074'"
              
              required
            />
          </div>
          <div>
            <label
              htmlFor="ssc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              SSC GPA
            </label>
            <input
              type="number"
              id="ssc"
              name="ssc"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
              placeholder="5.00 GPA"
              required
            />
          </div>
          <div>
            <label
              htmlFor="hsc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              HSC GPA
            </label>
            <input
              type="number"
              id="hsc"
              name="hsc"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
              placeholder="5.00 GPA"
              required
            />
          </div>
          <div>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Bkash Transaction Id 
            </label>
            <input
              type="text"
              id="visitors"
              name="bkash"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
              placeholder="Teo51asd875asd85"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email 
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="email"
            value={user?.email}
            required
          />
        </div>
        
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-rose-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-rose-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
          onClick={()=>setdisable(!disable)}
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            I agree with the{" "}
            <a
              
              className="text-rose-600 hover:underline dark:text-rose-500"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
       
       <button
          // onClick={handlNavigate}
          type="submit"
          className="text-white bg-rose-700 hover:bg-rose-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          disabled={disable}
        >
          Form Submit
        </button>
       
      </form>
    </div>
  );
};

export default Admission;
