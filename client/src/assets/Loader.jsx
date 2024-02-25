import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Loader;

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex space-x-2 mb-4">
        <div className="w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-green-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce"></div>
      </div>
      <p className="text-lg font-semibold text-gray-800">Loading...</p>
    </div>
  );
};
