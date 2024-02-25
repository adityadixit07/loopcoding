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
      className="container mx-auto py-8"
    >
      <div className="pt-[6rem] mx-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg border border-orange-400"
          >
            <img
              src={
                course?.thumbnail?.image ||
                `https://via.placeholder.com/400x200?text=${title}`
              }
              alt={title}
              className="object-cover w-full h-48 mb-4 rounded-md"
            />
            <p className="text-gray-700 mb-4 font-semibold">{course?.title}</p>
            <p className="text-gray-700 mb-4">{course?.description}</p>
            <div className="flex items-center mb-2">
              <FiClock className="text-gray-600 mr-2" />
              <p className="text-gray-600">Duration: {course?.duration}</p>
            </div>
            <div className="flex items-center mb-2">
              <HiCurrencyRupee className="text-gray-600 mr-2" />
              <p className="text-gray-600">Price: ₹{course?.price}</p>
              <p className="text-red-500 ml-2"> {course?.discount}% off</p>
            </div>
            <div className="flex items-center mb-2">
              <IoPricetags className="text-gray-600 mr-2" />
              <p className=" text-gray-600">Offered Price: {discountedPrice}</p>
            </div>
            <div className="flex items-center">
              <FiUsers className="text-gray-600 mr-2" />
              <p className="text-gray-600">
                Students Enrolled: {course?.Enrolled}
              </p>
            </div>
          </motion.div>
          {course?.modules && course?.modules.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 bg-white p-6 rounded-lg shadow-lg border border-orange-400"
            >
              <h2 className="text-xl font-bold mb-4">Course Modules</h2>
              <ul className="space-y-4">
                {course.modules.map((module, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <details className="mb-2">
                      <summary className="flex items-center justify-between cursor-pointer bg-gray-100 rounded-lg px-4 py-2">
                        <span className="font-semibold">{module.title}</span>
                        <FiChevronDown className="text-gray-500" />
                      </summary>
                      <p>{module.description}</p>
                    </details>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Sample Video</h2>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXceQ"
                  title="Sample Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetail;
