import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Heading from "./Heading";
import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/Loader";
import toast from "react-hot-toast";
import { GoArrowUpRight } from "react-icons/go";

const Courses = () => {
  const { courses, isLoading } = useSelector((state) => state.courses);

  const memoizedCourseCards = useMemo(
    () =>
      courses?.data?.map((course) => (
        <CourseCard key={course._id} course={course} />
      )),
    [courses]
  );
  return (
    <div className="pt-[6rem] pb-6">
      <Heading text={"Explore our Courses"} />
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 ">
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
  const handlePurchase = () => {
    toast.success("Wait few days..... You can able to do purchase very soon");
  };
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white p-6 rounded-md shadow-lg border border-gray-200 cursor-pointer transition-transform duration-300 hover:scale-105  hover:border hover:border-orange-400 transition-ease-in-out"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={course?.thumbnail?.image}
        alt={course.title}
        className="object-contain w-full h-32 mb-4 rounded-md"
      />
      <h3
        className="text-xl font-bold mb-2 underline hover:text-emerald-800 hover:ease-linear transition-transform duration-300 flex items-center justify-start gap-1"
        onClick={() => {
          const formattedTitle = course.title.replace(/\s+/g, "-"); // Replace spaces with hyphens
          navigate(`/course/${formattedTitle}/${course._id}`);
        }}
      >
        {course.title}
        <span className="text-xl font-semibold">
          <GoArrowUpRight />
        </span>
      </h3>

      <p className="text-gray-700 mb-4">{course.description}</p>
      <div className="flex justify-between items-center">
        {/* toic tags */}
        <div className="flex justify-start items-center flex-row  gap-3 flex-wrap">
          {course.topicTags?.map((tag, index) => (
            <span
              key={index}
              className="border shadow-innner text-gray-700  rounded-md px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-emerald-500 font-bold">Price: ₹{course.price}</p>
          <p className="text-gray-700 mb-2">Created By: {course.createdBy}</p>
        </div>
        <div>
          <p className="text-red-500 font-bold line-through">₹{course.price}</p>
          <p className="text-emerald-500 font-bold">₹{discountedPrice}</p>
          <p className="text-gray-700">({discountPercentage}% Off)</p>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <FiUsers className="text-gray-600 mr-2" />
        <p className="text-gray-600">{course.Enrolled} Enrolled</p>
      </div>
      {isAdmin ? (
        <span
          className="text-gray-500 text-sm ml-2"
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/admin/edit-course/${course?.title}/${course._id}`);
          }}
        >
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
            Edit
          </button>
        </span>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600"
          onClick={handlePurchase}
        >
          {isLoggedIn ? "Buy Now" : "Login to Buy"}
        </button>
      )}
    </motion.div>
  );
};
