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
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(logOut());
    toast.success("Logout successfully");
    navigate("/login");
  };

  return (
    <div className="bg-white shadow-md p-6 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="brand">
          <Link
            to={"/"}
            className="font-semibold text-xl text-emerald-800"
            style={{ fontFamily: "cursive" }}
          >
            LiveCoding.in
          </Link>
        </div>
        <div className="content hidden md:flex items-center justify-between gap-10">
          <ul className="flex items-center justify-between gap-10">
            <li className="mr-5">
              <Link to={isLoggedIn ? "/" : "/login"}>
                {isLoggedIn ? "Home" : "Login"}
              </Link>
            </li>
            <li className="mr-5">
              <Link to={"/courses"}>Courses</Link>
            </li>
            <li className="mr-5">
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li className="mr-5">
              <Link to={"/contact"}>Contact</Link>
            </li>
            {isLoggedIn && (
              <li className="mr-5">
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            )}
          </ul>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 pl-8 pr-4 border rounded-full focus:outline-none focus:border-emerald-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <FaSearch className="text-gray-500 border-b-2 " />
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed bottom-0 left-0 bg-white bg-opacity-90 w-full z-50 shadow-lg">
          <ul className="flex justify-between py-4 px-6">
            <li>
              <Link
                to={"/login"}
                onClick={toggleMenu}
                className="text-emerald-800"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to={"/courses"}
                onClick={toggleMenu}
                className="text-emerald-800"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to={"/blogs"}
                onClick={toggleMenu}
                className="text-emerald-800"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                onClick={toggleMenu}
                className="text-emerald-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
