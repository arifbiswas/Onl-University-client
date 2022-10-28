import React, { useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext";

const Register = () => {
  const {createUserWithGmailPassword,userProfileUpdate} = useContext(AuthProvider);
  const [error,setError] = useState('');
  const navigate = useNavigate()

  const handleCreateUserWithEmail =e=>{
    e.preventDefault();
    const form = e.target ;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
  
    if(!/(?=.*?[0-9])/.test(password)){
    
      setError('should contain at least one digit')
      return
    }
    if(!/(?=.*?[!@#$&*~])/.test(password)){
      
      setError('should contain at least one Special character')
      return
    }
    if(!/.{8,}/.test(password)){
      
      setError('Must be at least 8 characters in length ')
      return
    }
    if(!/(?=.*[a-z])/.test(password)){
     
      setError('should contain at least one lower case')
      return
    }
    if(!/(?=.*[A-Z])/.test(password)){
      
      setError('should contain at least one upper case')
      return
    }
    createUserWithGmailPassword(email,password)
    .then(r =>{
      const user = r.user;
      console.log(user);
     
      form.reset();
      handleUserProfileUpdate(name,photoURL)
      setError('')
      navigate('/')
    })
    .catch(e =>{console.error(e)
      setError(e.message)
    })
  }

  const handleUserProfileUpdate =(name,photoURL)=>{
    const userUpdate = {
      displayName : name,
      photoURL: photoURL,
    }
    userProfileUpdate(userUpdate)
    .then(()=>{})
    .catch(e=>{console.error(e)
      setError(e.message)
    })
  }

  return (
    <div className="w-96 mx-auto border border-gray-300 py-4 px-5 rounded-lg">
      <h2 className="text-3xl text-center text-rose-900 my-4 font-black">
        Register
      </h2>
     

      <form onSubmit={handleCreateUserWithEmail}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="name"
            required
            
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="photoURL"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            PhotoURL
          </label>
          <input
            type="photoURL"
            name="photoURL"
            id="photoURL"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="photoURL"
            required
            
          />
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
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="email"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
        >
          Register
        </button>
        <p className="p-3 text-red-600 text-center ">{error}</p>
      </form>
      <div className="flex flex-col items-center mt-5">
        <p className="mt-1 text-xs font-light text-gray-500">
          Register already?
          <NavLink to='/login' className="ml-1 font-medium text-rose-400">Login now</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
