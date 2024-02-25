// import React, { useMemo } from "react";
// import { useParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FiClock, FiDollarSign, FiUsers } from "react-icons/fi";
// import { useSelector } from "react-redux";

// const CourseDetail = () => {
//   const { title, id } = useParams();
//   const { courses, isLoading } = useSelector((state) => state.courses);
//   const course = useMemo(
//     () => courses?.data?.find((course) => course._id === id),
//     [courses, id]
//   );

//   const discountedPrice =
//     course?.price - (course?.price * course?.discount) / 100;
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="container mx-auto py-8"
//     >
//       <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow-lg">
//           <img
//             src={
//               course?.thumbnail?.image ||
//               `https://via.placeholder.com/400x200?text=${title}`
//             }
//             alt={title}
//             className="object-cover w-full h-48 mb-4 rounded-md"
//           />
//           <p className="text-gray-700 mb-4">{course?.description}</p>
//           <div className="flex items-center mb-2">
//             <FiClock className="text-gray-600 mr-2" />
//             <p className="text-gray-600">Duration: {course?.duration}</p>
//           </div>
//           <div className="flex items-center mb-2">
//             <FiDollarSign className="text-gray-600 mr-2" />
//             <p className="text-gray-600">Price: ₹{course?.price}</p>
//           </div>
//           <div className="flex items-center mb-2">
//             <FiDollarSign className="text-gray-600 mr-2" />
//             <p className=" text-gray-600">Discount:{discountedPrice}</p>
//           </div>
//           <div className="flex items-center">
//             <FiUsers className="text-gray-600 mr-2" />
//             <p className="text-gray-600">
//               Students Enrolled: {course?.Enrolled}
//             </p>
//           </div>
//         </div>
//         <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
//           <h2 className="text-xl font-bold mb-4">Course Overview</h2>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CourseDetail;

import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiClock, FiDollarSign, FiUsers } from "react-icons/fi";
import { useSelector } from "react-redux";

const CourseDetail = () => {
  const { title, id } = useParams();
  const { courses, isLoading } = useSelector((state) => state.courses);
  const [modules] = useState([
    { title: "Module 1", description: "This is module 1 description." },
    { title: "Module 2", description: "This is module 2 description." },
    { title: "Module 3", description: "This is module 3 description." },
  ]);

  // Find the course data based on the id parameter
  const course = useMemo(
    () => courses?.data?.find((course) => course._id === id),
    [courses, id]
  );

  const discountedPrice =
    course?.price - (course?.price * course?.discount) / 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto py-8"
    >
      <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={
              course?.thumbnail?.image ||
              `https://via.placeholder.com/400x200?text=${title}`
            }
            alt={title}
            className="object-cover w-full h-48 mb-4 rounded-md"
          />
          <p className="text-gray-700 mb-4">{course?.description}</p>
          <div className="flex items-center mb-2">
            <FiClock className="text-gray-600 mr-2" />
            <p className="text-gray-600">Duration: {course?.duration}</p>
          </div>
          <div className="flex items-center mb-2">
            <FiDollarSign className="text-gray-600 mr-2" />
            <p className="text-gray-600">Price: ₹{course?.price}</p>
          </div>
          <div className="flex items-center mb-2">
            <FiDollarSign className="text-gray-600 mr-2" />
            <p className=" text-gray-600">Discount:{discountedPrice}</p>
          </div>
          <div className="flex items-center">
            <FiUsers className="text-gray-600 mr-2" />
            <p className="text-gray-600">
              Students Enrolled: {course?.Enrolled}
            </p>
          </div>
        </div>
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Course Modules</h2>
          <ul className="space-y-4">
            {modules.map((module, index) => (
              <li key={index}>
                <details className="mb-2">
                  <summary className="font-semibold">{module.title}</summary>
                  <p>{module.description}</p>
                </details>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Sample Video</h2>
            {/* Add your sample video here */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXceQ"
              title="Sample Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetail;
