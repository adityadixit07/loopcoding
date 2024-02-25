import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import toast from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import { motion } from "framer-motion";
import {
  MdLogout,
  MdOutlineContactSupport,
  MdOutlineLogin,
} from "react-icons/md";
import { BiSolidBookReader } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { getAllCourses } from "../redux/courseSlice";
import { AdminlogOut } from "../redux/adminSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { isAdmin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    dispatch(logOut());
    toast.success("Logout successfully");
    navigate("/login");
  };

  const handleAdminLogout = async () => {
    dispatch(AdminlogOut());
    toast.success("Logout Successfully");
    navigate("/admin");
  };

  // fetch the courses on page load
  useEffect(() => {
    dispatch(getAllCourses({}));
  }, [dispatch]);

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
            {/* user */}
            {isLoggedIn ? (
              <>
                <li className="mr-5">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="mr-5">
                  <Link to={"/courses"}>Courses</Link>
                </li>
                <li className="mr-5">
                  <Link to={"/blogs"}>Blogs</Link>
                </li>
                <li className="mr-5">
                  <div className="relative">
                    <button
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center space-x-2 focus:outline-none"
                    >
                      <RxAvatar size={20} className="text-green-600" />
                      <span>{user?.name}</span>
                    </button>
                    {showProfileMenu && (
                      <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-32">
                        <ul>
                          <li>
                            <Link
                              to={"/profile"}
                              onClick={() => setShowProfileMenu(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={"/cart"}
                              onClick={() => setShowProfileMenu(false)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              Cart
                            </Link>
                          </li>
                          <li>
                            <button
                              onClick={() => {
                                handleLogout();
                                setShowProfileMenu(false);
                              }}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              </>
            ) : isAdmin ? (
              <>
                <ul className="flex items-center gap-5">
                  <li>
                    <Link to={"/admin/dashboard"}>DashBoard</Link>
                  </li>
                  <li>
                    <Link to={"/courses"}>Courses</Link>
                  </li>
                  <li>
                    <Link to={"/admin/create-course"}>Create Course</Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleAdminLogout();
                      }}
                      className="text-emerald-800 font-semibold text-xl flex items-center gap-2"
                    >
                      <span>
                        <MdLogout />
                      </span>
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <li className="mr-5">
                  <Link to="/login">Login</Link>
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
              </>
            )}
          </ul>
          {isAdmin === false && (
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
          )}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", stiffness: 120 }}
          className=""
        >
          <div className="border-t-2 border-orange-400 mt-10 ">
            {isLoggedIn ? (
              <ul className="flex justify-between py-4 px-6 flex-col gap-4 running-line">
                {isLoggedIn && (
                  <>
                    <li>
                      <Link
                        to={"/cart"}
                        onClick={toggleMenu}
                        className="text-emerald-800 flex items-center gap-2"
                      >
                        <span>
                          <FaShoppingCart />
                        </span>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/profile"}
                        onClick={toggleMenu}
                        className="text-emerald-800 flex items-center gap-2"
                      >
                        <span>
                          <RxAvatar />
                        </span>
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleLogout();
                          toggleMenu();
                        }}
                        className="text-emerald-800 font-semibold text-xl flex items-center gap-2"
                      >
                        <span>
                          <MdLogout />
                        </span>
                        Logout
                      </button>
                    </li>
                  </>
                )}
              </ul>
            ) : (
              <>
                <ul className="flex justify-between py-4 px-6 flex-col gap-4 running-line">
                  <li>
                    <Link
                      to={"/login"}
                      onClick={toggleMenu}
                      className="text-emerald-800 flex items-center gap-2"
                    >
                      <span>
                        <MdOutlineLogin />
                      </span>
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/courses"}
                      onClick={toggleMenu}
                      className="text-emerald-800 flex items-center gap-2"
                    >
                      <span>
                        <BiSolidBookReader />{" "}
                      </span>
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/blogs"}
                      onClick={toggleMenu}
                      className="text-emerald-800 flex items-center gap-2"
                    >
                      <span>
                        <TfiWrite />
                      </span>
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact"}
                      onClick={toggleMenu}
                      className="text-emerald-800 flex items-center gap-2"
                    >
                      <span>
                        <MdOutlineContactSupport />
                      </span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
