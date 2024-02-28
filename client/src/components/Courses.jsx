import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/Loader";
import { GoArrowUpRight } from "react-icons/go";
import { getAllCourses } from "../redux/courseSlice";
import { hideLoading } from "../redux/alertSlice";

const Courses = () => {
  const { courses, isLoading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();
  const memoizedCourseCards = useMemo(
    () =>
      courses?.data?.map((course) => (
        <CourseCard key={course._id} course={course} />
      )),
    [courses]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        alert("Loading is taking longer than expected.");
      }
    }, 10000);
    // cleanup function
    return () => clearTimeout(timer);
  }, [isLoading]);

  useEffect(() => {
    dispatch(getAllCourses({}));
  }, [dispatch]);

  return (
    <div className="pt-[6rem] pb-6">
      <Heading text={"Explore our Courses"} />
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {memoizedCourseCards}
        </div>
      )}
    </div>
  );
};

export default Courses;

export const CourseCard = ({ course }) => {
  const { isAdmin } = useSelector((state) => state.admin);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const discountedPrice = course.price - (course.price * course.discount) / 100;
  const discountPercentage = course.discount;
  const navigate = useNavigate();
  const handlePurchase = () => {
    if (isLoggedIn) {
      navigate(`/course/${course.title}/${course._id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <motion.div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3
          className="text-xl font-bold text-gray-800 dark:text-white truncate hover:cursor-pointer hover:text-emerald-700 hover:underline ease-linear "
          onClick={() => {
            const formattedTitle = course.title.replace(/\s+/g, "-");
            navigate(`/course/${formattedTitle}/${course._id}`);
          }}
        >
          {course.title}
        </h3>
        <span
          className="text-gray-600 dark:text-gray-400 cursor-pointer"
          onClick={() => {
            const formattedTitle = course.title.replace(/\s+/g, "-");
            navigate(`/course/${formattedTitle}/${course._id}`);
          }}
        >
          <GoArrowUpRight />
        </span>
      </div>
      <img
        src={course?.thumbnail?.image}
        alt={course.title}
        className="w-full h-40 object-cover mb-4 rounded-md"
      />
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {course.description}
      </p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-gray-800 dark:text-gray-200 font-bold">
            Price: ₹{discountedPrice}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Created By: {course.createdBy}
          </p>
        </div>
        <div>
          <p className="text-red-500 dark:text-red-400 font-bold line-through">
            ₹{course.price}
          </p>
          <p className="text-green-500 dark:text-green-400 font-bold">
            ₹{discountedPrice}
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            ({discountPercentage}% Off)
          </p>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <FiUsers className="text-gray-600 mr-2" />
        <p className="text-gray-600 dark:text-gray-300">
          {course.Enrolled} Enrolled
        </p>
      </div>
      {isAdmin ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/admin/edit-course/${course?.title}/${course._id}`);
          }}
        >
          Edit
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handlePurchase}
        >
          {isLoggedIn ? "Buy Now" : "Login to Buy"}
        </button>
      )}
    </motion.div>
  );
};
