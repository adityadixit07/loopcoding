import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiClock, FiUsers, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { IoPricetags } from "react-icons/io5";
import { HiCurrencyRupee } from "react-icons/hi";
import API from "../redux/API";
import toast from "react-hot-toast";
import { showLoading, hideLoading } from "../redux/alertSlice";
import { updateCourseDetail } from "../redux/courseSlice";
import { addModules } from "../redux/adminSlice";
import Skeleton from "react-loading-skeleton";

const UpdateCourse = () => {
  const { title, id } = useParams();
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);
  const { loading } = useSelector((state) => state.alerts);
  const course = useMemo(
    () => courses?.data?.find((course) => course._id === id),
    [courses, id]
  );

  const discountedPrice =
    course?.price - (course?.price * course?.discount) / 100;
  const [addingModule, setAddingModule] = useState(false);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");

  // Handler to add a new module
  const handleAddModule = () => {
    setAddingModule(true);
  };

  // Logic to save module in database
  const saveModule = async () => {
    if (!newModuleTitle || !newModuleDescription) {
      toast.error("Please enter module title and description");
      return;
    }
    const newModule = {
      title: newModuleTitle,
      description: newModuleDescription,
    };
    dispatch(showLoading());
    try {
      const id = course?._id;
      const action = await dispatch(
        addModules({ courseId: id, modules: [newModule] })
      );
      dispatch(updateCourseDetail(action.payload.data));
    } catch (error) {
      console.error("Error adding module:", error);
      toast.error("Failed to add module. Please try again later.");
    } finally {
      dispatch(hideLoading());
      setAddingModule(false);
      setNewModuleTitle("");
      setNewModuleDescription("");
    }
  };

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
            {/* Conditional rendering based on whether the course data is available */}
            {course ? (
              <>
                <img
                  src={
                    course?.thumbnail?.image ||
                    `https://via.placeholder.com/400x200?text=${title}`
                  }
                  alt={title}
                  className="object-cover w-full h-48 mb-4 rounded-md"
                />
                <p className="text-gray-700 mb-4 font-semibold">
                  {course?.title}
                </p>
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
                  <p className=" text-gray-600">
                    Offered Price: {discountedPrice}
                  </p>
                </div>
                <div className="flex items-center">
                  <FiUsers className="text-gray-600 mr-2" />
                  <p className="text-gray-600">
                    Students Enrolled: {course?.Enrolled}
                  </p>
                </div>
              </>
            ) : (
              // Render skeleton UI while loading course data
              <>
                <Skeleton height={200} />
                <Skeleton height={20} width={200} />
                <Skeleton count={3} />
                <Skeleton height={20} width={100} />
                <Skeleton height={20} width={150} />
                <Skeleton height={20} width={180} />
                <Skeleton height={20} width={250} />
              </>
            )}
          </motion.div>
        </div>
        {/* Button to add module */}
        {!addingModule && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md mt-4"
            onClick={handleAddModule}
          >
            <FiPlus className="mr-2" /> Add Module
          </button>
        )}
        {addingModule && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Module Title"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-2"
              value={newModuleTitle}
              onChange={(e) => setNewModuleTitle(e.target.value)}
            />
            <textarea
              placeholder="Module Description"
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-24"
              value={newModuleDescription}
              onChange={(e) => setNewModuleDescription(e.target.value)}
            ></textarea>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md mt-2"
              onClick={saveModule}
              disabled={loading}
            >
              {loading ? "Adding..." : "Save Module"}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UpdateCourse;
