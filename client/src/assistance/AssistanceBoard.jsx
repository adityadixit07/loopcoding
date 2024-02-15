import React, { useState } from "react";
import { FaQuestionCircle, FaRegQuestionCircle } from "react-icons/fa";
import "./assitance.css";

const AssistanceBoard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const handleSubmit = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="assistance-board" onClick={handleClick}>
        <FaQuestionCircle size={20} color="red" />
      </div>
      {isOpen && (
        <div className="form-overlay">
          <div className="form">
            <form action="">
              <div className="flex flex-col items-start py-2 gap-2">
                <div className="flex flex-row items-center gap-2">
                  <label htmlFor="problem" className="font-normal text-xl">
                    Problem
                  </label>
                  <FaRegQuestionCircle />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  className="resize-none border border-gray-400 outline-none px-2 py-1"
                  placeholder="Add your query here......I am happy to resolve the issues"
                ></textarea>
              </div>
              <div className="flex flex-col py-2 gap-2">
                <label htmlFor="email" className="text-xl">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Please enter you email"
                  className="border border-gray-400 px-2 py-2 outline-none"
                />
              </div>
            </form>
            <div className="py-2">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 w-full rounded-sm py-2 text-white hover:bg-blue-600"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssistanceBoard;
