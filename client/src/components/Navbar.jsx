// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`bg-white shadow-md p-6 fixed w-full z-10 ${
//         isOpen ? "bg-opacity-50 " : ""
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="brand">
//           <Link
//             to={"/"}
//             className="font-semibold text-xl text-emerald-800"
//             style={{ fontFamily: "cursive" }}
//           >
//             LiveCoding.in
//           </Link>
//         </div>
//         <div className="content hidden md:flex items-center justify-between gap-10">
//           <ul className="flex items-center justify-between gap-10">
//             <li className="mr-5">
//               <Link to={"/login"}>Login</Link>
//             </li>
//             <li className="mr-5">
//               <Link to={"/courses"}>Courses</Link>
//             </li>
//             <li className="mr-5">
//               <Link to={"/blogs"}>Blogs</Link>
//             </li>
//             <li className="mr-5">
//               <Link to={"/contact"}>Contact</Link>
//             </li>
//           </ul>
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="py-2 pl-8 pr-4 border rounded-full focus:outline-none focus:border-emerald-500"
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//               <FaSearch className="text-gray-500 border-b-2 " />
//             </div>
//           </div>
//         </div>
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-xl focus:outline-none">
//             {isOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden fixed top-16 left-0 bg-white bg-opacity-90 h-full w-full z-50 flex flex-col items-center justify-center animate__animated animate__fadeIn shadow-lg rounded-md">
//           <ul className="text-center py-0">
//             <li className="my-2">
//               <Link
//                 to={"/login"}
//                 onClick={toggleMenu}
//                 className="text-2xl text-emerald-800 hover:text-emerald-600"
//               >
//                 Login
//               </Link>
//             </li>
//             <li className="my-2">
//               <Link
//                 to={"/courses"}
//                 onClick={toggleMenu}
//                 className="text-2xl text-emerald-800 hover:text-emerald-600"
//               >
//                 Courses
//               </Link>
//             </li>
//             <li className="my-2">
//               <Link
//                 to={"/blogs"}
//                 onClick={toggleMenu}
//                 className="text-2xl text-emerald-800 hover:text-emerald-600"
//               >
//                 Blogs
//               </Link>
//             </li>
//             <li className="my-2">
//               <Link
//                 to={"/contact"}
//                 onClick={toggleMenu}
//                 className="text-2xl text-emerald-800 hover:text-emerald-600"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//           {/* <div>
//             <input
//               type="search"
//               placeholder="enter something"
//               className="text-xl m-2 border-b-2 border-b-emerald-800 outline-none"
//             />
//           </div> */}
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="py-2 pl-8 pr-4 border rounded-full focus:outline-none focus:border-emerald-500"
//             />
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
//               <FaSearch className="text-gray-500" />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { FiHome, FiBook, FiUsers, FiSettings } from "react-icons/fi"; // Importing icons from react-icons library

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="bg-emerald-400 p-8 fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center ">
        <Link to="/" className="text-white text-xl font-bold">
          EdTech
        </Link>
        <div className="flex gap-10">
          <Link to="/" className="text-white mr-4 text-xl font-semibold">
            <FiHome className="inline mr-1" /> Login
          </Link>
          <Link to="/courses" className="text-white mr-4">
            <FiBook className="inline mr-1" /> Courses
          </Link>
          <Link to="/contact" className="text-white mr-4">
            <FiUsers className="inline mr-1" /> Contact
          </Link>
          <Link to="/about" className="text-white">
            <FiSettings className="inline mr-1" /> About
          </Link>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-500 p-4 z-10">
        <div className="flex justify-between items-center navli">
          <Link to="/login" className="text-white">
            <FiHome className="inline mr-1" />
            <span>Login</span>
            <span className="hidden md:inline">Login</span>
          </Link>
          <Link
            to="/courses"
            className="text-white"
          >
            <FiBook className="inline mr-1" />
            <span>Courses</span>
            <span className="hidden md:inline">Courses</span>
          </Link>
          <Link to="/contact" className="text-white">
            <FiUsers className="inline mr-1" />
            <span>Contact</span>
            <span className="hidden md:inline">Contact</span>
          </Link>
          <Link to="/about" className="text-white">
            <FiSettings className="inline mr-1" />
            <span>About</span>
            <span className="hidden md:inline">About</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
