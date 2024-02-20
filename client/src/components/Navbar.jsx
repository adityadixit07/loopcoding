import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";
import toast from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import { getAllCourses } from "../redux/courseSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
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
            {/* if user is logged in show home courses blogs and cart  */}
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
                  <Link to={"/cart"}>Cart</Link>
                </li>
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

            {isLoggedIn && (
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
