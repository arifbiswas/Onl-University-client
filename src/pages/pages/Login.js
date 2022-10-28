import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../Contexts/AuthContext";


const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  const [error,setError] = useState('');
  const navigate = useNavigate()
  const location = useLocation()
  
  const from = location.state?.from?.pathname || '/';

  const { createUserWithGoogle, createUserWithGitHub ,loginUser} =
    useContext(AuthProvider);

  const handleGoogleLogin = () => {
    createUserWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      
        setError('')
        navigate(from,{replace:true})
      })
      .catch((error) => {console.error(error)
        setError(error.message)
      });
  };

  const handleGitHubLogin = () => {
    createUserWithGitHub(gitHubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('')
        navigate(from,{replace:true})
      })
      .catch((e) => {
        console.error(e)
        setError(e.message)
      }
      
      );
  };

  const handleLoginWithGmailPassword = e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    
    loginUser(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      
      form.reset();
      setError('')
      navigate(from,{replace:true})
    })
    .catch(e=>{console.error(e)
      setError(e.message)
    })
  }

  return (
    <div className="w-96 mx-auto border border-gray-300 py-4 px-5 rounded-lg">
      <h2 className="text-3xl text-center text-rose-900 my-4 font-black">
        Login
      </h2>
      <hr className="border border-zinc-300 " />
      <button
        onClick={handleGoogleLogin}
        className="my-3 btn border w-full rounded-lg py-3 flex bg-rose-800 justify-center"
      >
        <span className="text-2xl mr-2 text-white">
          <FaGoogle></FaGoogle>
        </span>
        <span className="text-white font-bold">Login with Google</span>
      </button>
      <button
        onClick={handleGitHubLogin}
        className="my-3 btn border w-full rounded-lg py-3 flex bg-black justify-center"
      >
        <span className="text-2xl mr-2 text-white">
          <FaGithub></FaGithub>
        </span>
        <span className="text-white font-bold">Login with Github</span>
      </button>
      <hr className="border border-zinc-300 mb-5" />

      <form onSubmit={handleLoginWithGmailPassword}>
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
            id="password"
            name="password"
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            required
          />
        </div>
        
         
        
        <button
          type="submit"
          className="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-800"
        >
          Login
        </button>
        <p className="p-3 text-red-600 text-center ">{error}</p>
      </form>
      <div className="flex flex-col items-center mt-5">
        <p className="mt-1 text-xs font-light text-gray-500">
          New visit this site?
          <NavLink to="/register" className="ml-1 font-medium text-rose-400">
            Register now
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
