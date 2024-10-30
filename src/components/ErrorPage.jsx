import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <h1 className="text-9xl font-bold animate-pulse">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="mt-2 text-lg md:text-xl text-gray-200 text-center max-w-md">
          Sorry, the page you are looking for doesn’t exist. It may have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-200 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
