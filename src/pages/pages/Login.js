import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-96 mx-auto border border-gray-300 py-4 px-5 rounded-lg">
        <h2 className="text-3xl text-center text-blue-900 my-4 font-bold">Login</h2>
        <hr className="border border-zinc-300 " />
        <button
          className="my-3 btn border w-full rounded-lg py-3 flex bg-blue-800 justify-center"
        >
            <span className="text-2xl mr-2 text-white"><FaGoogle></FaGoogle></span>
          <span className="text-white font-bold">Login with Google</span>
        </button>
        <button
          className="my-3 btn border w-full rounded-lg py-3 flex bg-black justify-center"
        >
            <span className="text-2xl mr-2 text-white"><FaGithub></FaGithub></span>
          <span className="text-white font-bold">Login with Github</span>
        </button>
        <hr className="border border-zinc-300 mb-5" />
        
      <form>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
