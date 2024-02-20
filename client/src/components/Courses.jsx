import React from "react";
import { useSelector } from "react-redux";
import Heading from "./Heading";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Courses = () => {
  const { courses, isLoading } = useSelector((state) => state.courses);

  return (
    <div className="pt-[8rem]">
      <Heading text={"Explore our Courses"} />
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
          {courses?.data?.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}

      <div className="flex justify-center items-center mt-8">
        <Typewriter
          options={{
            strings: [
              "Hurry! Limited seats available.",
              "Enroll now and start learning!",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
};

export default Courses;

export const CourseCard = ({ course }) => {
  const discountedPrice = course.price - (course.price * course.discount) / 100;
  const discountPercentage = course.discount;

  return (
    <motion.div
      className="bg-white p-6 rounded-md shadow-lg border border-gray-200 cursor-pointer transition-transform duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={
          // course.thumbnail.image ||
          "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=sph"
        }
        alt={course.title}
        className="object-contain w-full h-32 mb-4 rounded-md"
      />
      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
      <p className="text-gray-700 mb-4">{course.description}</p>
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
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
        Purchase Now
      </button>
    </motion.div>
  );
};
