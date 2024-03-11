import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertSlice";
import toast from "react-hot-toast";
import API from "../redux/API.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loader from "../assets/Loader.jsx";
import { CiSquarePlus } from "react-icons/ci";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alerts);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    dispatch(showLoading());
    try {
      const response = await API.get("/blog/all-blogs");
      const { data } = response;
      if (data?.success) {
        setBlogs(data?.data);
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "An error occurred",
        {
          duration: 1000,
        }
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="pt-[8rem]">
      <div className="flex justify-evenly">
        <h1 className="text-center text-2xl text-emerald-800 font-semibold">
          Explore Feeds
        </h1>
      </div>

      {loading ? (
        <div className="text-center mt-8">
          <Loader />
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-3 gap-4 mx-10">
          {blogs.map((blog) => (
            <>
              <BlogButton onClick={handleEditClick}>
                <CiSquarePlus style={{ fontSize: "5rem" }} /> Create Blog
              </BlogButton>
              <motion.div
                key={blog.id}
                className="bg-white drop-shadow-lg p-4 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BlogItem blog={blog} />
              </motion.div>
            </>
          ))}
        </div>
      )}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CreateBlog onClose={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
};

export default Blog;

export const CreateBlog = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { loading } = useSelector((state) => state.alerts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("thumbnail", thumbnail);
      const response = await API.post("/blog/create-blog", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { data } = response;
      if (data?.success) {
        toast.success(data.message, {
          duration: 1000,
        });
        navigate("/blogs");
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message || "An error occurred",
        {
          duration: 1000,
        }
      );
    } finally {
      dispatch(hideLoading());
      onClose();
    }
  };

  return (
    <div className="pt-0  text-white">
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-md ">
        <h1 className="text-3xl font-bold text-center mb-6 text-emerald-700">
          Share Your Thoughts
        </h1>
        <form onSubmit={handleSubmit} className="text-black">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-xl text-gray-700  font-medium"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the title"
              className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-xl font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter the description"
              rows="4"
              className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="thumbnail"
              className="block text-sm font-medium text-gray-700"
            >
              Thumbnail
            </label>
            <input
              type="file"
              id="thumbnail"
              name="thumbnail"
              onChange={(e) => setThumbnail(e.target.files[0])}
              className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {loading ? "Creating..." : "Create Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const BlogItem = ({ blog }) => {
  // Function to calculate the time difference between the current date and the creation date
  const getTimeDifference = (createdAt) => {
    const currentDate = new Date();
    const blogDate = new Date(createdAt);
    const difference = currentDate.getTime() - blogDate.getTime();

    const daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
    return daysDifference === 0 ? "Today" : `${daysDifference} days ago`;
  };

  return (
    <motion.div
      className="transition duration-300 transform"
      whileHover={{
        scale: 1.05,
        rotate: [0, -5, 5, -5, 0], 
        transition: {
          duration: 0.1,
        },
      }}
    >
      <div className="flex items-center mb-2">
        <img
          src={blog.avatar ? blog.avatar : "https://via.placeholder.com/50"}
          alt="Avatar"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <h2 className="text-lg font-semibold">{blog.title}</h2>
          <p className="text-gray-500 text-sm">
            {getTimeDifference(blog.createdAt)}
          </p>
        </div>
      </div>
      <p className="text-gray-700">
        {blog.description.length > 20
          ? blog.description.substring(0, 20) + "....read more"
          : blog.description}
      </p>
      <img
        src={blog?.thumbnail?.image}
        alt=""
        className="mt-2 rounded-md w-full h-48 object-cover"
      />
    </motion.div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-md z-50 max-w-md mx-auto"
        style={{ width: "90%" }} // Adjust width here
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose}>Close</button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
};
export const BlogPage = () => {
  return (
    <div>
      <Blog />
    </div>
  );
};

export const BlogButton = ({ onClick, children }) => {
  return (
    <motion.button
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className="w-full h-full flex items-center justify-center px-4 py-2 text-lg font-medium text-black bg-white rounded-md border-2 border-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      <span className="text-gray-500 font-semibold flex justify-center items-center gap-2 text-3xl">
        {children}
      </span>
    </motion.button>
  );
};
