import React from 'react';
import { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/AuthContext';

const DownloadPDF = () => {
    
    const course = useLoaderData();
  
    const { name, courses_length ,courses_id} =
      course;
    const {user} = useContext(AuthProvider);
    
    const pdf = () =>{
        window.print()
    }

    // localStorage
    const fromInfo = localStorage.getItem('fromInfo');
    const fromInfoParse =JSON.parse(fromInfo) 
    
    const {bkash,hsc,number,preCollage,ssc} = fromInfoParse;

    return (
        <div>
            
            <div className="container mx-auto my-8" >
     <div className="text-center my-2">
     <h1 className="text-1xl lg:text-3xl font-black text-rose-500">ADMISSION OF {name.toUpperCase()}</h1>
      <h2 className="text-[18px] lg:text-3xl mb-0 font-extralight "> OnL University From Bangladesh</h2>
      <h2 className="text-[10px] lg:text-[20px]  mb-10 font-semibold text-rose-400">COURSE FOR {courses_length.toUpperCase()}</h2>
     </div>
      <form 
      className="w-[80%] lg:w-[60%] mx-auto"> 
        <div className="grid gap-6 mb-6 grid-cols-3 ">
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 border-none"
              placeholder="first name"
              value={user?.displayName}
              disabled
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 border-none"
              placeholder="name"
              value={preCollage}
              disabled
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 border-none"
              placeholder="'01871063074'"
              value={number}
              disabled
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 border-none"
              placeholder="5.00 GPA"
              value={ssc}
              disabled
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 border-none"
              placeholder="5.00 GPA"
              value={hsc}
              disabled
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 border-none"
              placeholder="Teo51asd875asd85"
              value={bkash}
              disabled
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 border-none"
            placeholder="email"
            value={user?.email}
            disabled />
        </div>
        <div className='text-center'>
        <button onClick={pdf} className="text-white bg-rose-700 hover:bg-rose-800  font-medium rounded-lg text-sm w-full sm:w-auto px-16 py-5 text-center ">Print PDF</button>
        </div>
      </form>
      
    </div>
        </div>
    );
};

export default DownloadPDF;