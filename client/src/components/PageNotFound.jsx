import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 py-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Page Not Found 💔</p>
        <Link
          to="/"
          className="text-blue-500 hover:underline transition duration-300 ease-in-out"
        >
         {"< "} Go back to home{" >"}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
