import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
        <details className="group p-6" open>
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
              What is cors??
            </h2>

            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
            In order to keep a website and its users secure from the security
            risks involved with sharing resources across multiple domains the
            use of CORS is recommended, but what is CORS? CORS, also known as
            Cross-Origin Resource Sharing, allows resources such as JavaScript
            and web fonts to be loaded from domains other than the origin parent
            domain. These days, a web page commonly loads images, style sheets,
            scripts, etc. from other domains. Although, a few years ago due to
            security reasons, web fonts and AJAX (XML Http Requests) were
            normally restricted to the same-origin policy which restricted their
            use between domains. Now however, with the use of CORS, the browser
            and server can communicate to determine whether it is safe to allow
            a cross-origin request
          </p>
        </details>

        <details className="group p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
            Why are you using firebase? 
            </h2>

            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience
          </p>
        </details>
        <details className="group p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
            How does the private route work? 
            </h2>

            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in
          </p>
        </details>
        <details className="group p-6">
          <summary className="flex cursor-pointer items-center justify-between">
            <h2 className="text-lg font-medium text-gray-900">
            What is Node? How does Node work? 
            </h2>

            <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Blog;
