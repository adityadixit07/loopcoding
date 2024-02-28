import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiClock, FiUsers, FiChevronDown } from "react-icons/fi";
import { useSelector } from "react-redux";
import { IoPricetags } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi";

const CourseDetail = () => {
  const { title, id } = useParams();
  const { courses } = useSelector((state) => state.courses);

  const course = useMemo(
    () => courses?.data?.find((course) => course._id === id),
    [courses, id]
  );

  const discountedPrice =
    course?.price - (course?.price * course?.discount) / 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-8 pt-[6rem] px-4"
    >
      <div className="pt-6 px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
            <img
              src={
                course?.thumbnail?.image ||
                `https://via.placeholder.com/400x200?text=${title}`
              }
              alt={title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {course?.title}
            </h2>
            <p className="text-gray-600 mb-4">{course?.description}</p>
            <div className="flex items-center text-gray-600 mb-2">
              <FiClock className="mr-2" />
              <p>Duration: {course?.duration}</p>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <HiCurrencyRupee className="mr-2" />
              <p>Price: ₹{course?.price}</p>
              <p className="text-red-500 ml-2">{course?.discount}% off</p>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <IoPricetags className="mr-2" />
              <p>Offered Price: {discountedPrice}</p>
            </div>
            <div className="flex items-center text-gray-600">
              <FiUsers className="mr-2" />
              <p>Students Enrolled: {course?.Enrolled}</p>
            </div>
          </div>
          {course?.modules && course?.modules.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Course Modules
              </h2>
              <ul className="space-y-4">
                {course.modules.map((module, index) => (
                  <li key={index}>
                    <details className="mb-2">
                      <summary className="flex items-center justify-between cursor-pointer bg-gray-100 rounded-lg px-4 py-2">
                        <span className="font-semibold">{module.title}</span>
                        <FiChevronDown className="text-gray-500" />
                      </summary>
                      <p className="text-gray-600 ml-4">{module.description}</p>
                    </details>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-gray-300 mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Let's Understand Concept Through Video
          </h2>
          {course?.video ? (
            <iframe
              width="100%"
              height="315"
              src={course.video}
              title="Sample Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-gray-600">No video available Yet</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetail;
