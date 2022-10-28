import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="relative bg-[url(https://img.freepik.com/free-vector/students-walking-relaxing-campus-park_1262-20690.jpg?w=740&t=st=1666707271~exp=1666707871~hmac=92a741d1a11295c8c55604c4dbd385c76bd2440532c0d26e3d9bf41b0c90d8cc)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
              Choice and grow up make your life easy.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Engineering is an exciting subject because it combines scientific and mathematical knowledge with creative thinking. It teaches you to question the established ways of doing things and to come up with new ideas. In order to do this, you need creativity and an ability to look beyond what has been done before.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <NavLink
                to="/courses"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Courses
              </NavLink>

              <NavLink
                to="/blog"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Blog
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
