import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import API from "../redux/API";
import { hideLoading, showLoading } from "../redux/alertSlice";
import { useNavigate } from "react-router-dom";

const CourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [topicTags, setTopicTags] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alerts);
  const navigate = useNavigate();

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setThumbnailPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setThumbnailPreview(null);
    }
  };

  // create course
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("discount", discount);
      formData.append("thumbnail", thumbnail);
      formData.append("topicTags", topicTags);
      const response = await API.post("/admin/create-course", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { data } = response;
      if (data?.success) {
        toast.success("Course created successfully");
        setTitle("");
        setDescription("");
        setPrice(0);
        setDiscount(0);
        setThumbnail(null);
        setThumbnailPreview(null);
        setTopicTags([]);
        navigate("/courses");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to create course");
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <div className="pt-[6rem]">
      <div className="container max-w-[800px] mx-auto bg-gray-100 p-8 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Add Course</h1>
        <form onSubmit={handleCreateCourse}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 font-semibold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border border-orange-500 rounded-md w-full outline-none"
              placeholder="Add course title.."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-semibold">
              Description
            </label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Add course description.."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-semibold">
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="p-2 border border-orange-500 rounded-md w-full outline-none"
              placeholder="Add course price.."
              min="0"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="discount" className="block mb-2 font-semibold">
              Discount
            </label>
            <input
              type="number"
              name="discount"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              required
              className="p-2 border border-orange-500 rounded-md w-full outline-none"
              placeholder="Add course discount.."
              min="0"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="topicTags" className="block mb-2 font-semibold">
              Topic Tags
            </label>
            <input
              type="text"
              name="topicTags"
              id="topicTags"
              value={topicTags}
              // onChange={(e) => setTopicTags(e.target.value.split(","))}
              onChange={(e) => setTopicTags(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddTag(e)}
              className="p-2 border border-orange-500 rounded-md w-full outline-none"
              placeholder="Add topic tags (comma-separated).."
            />
          </div>
          <div className="mb-4">
            <label htmlFor="thumbnail" className="block mb-2 font-semibold">
              Thumbnail
            </label>
            <label
              htmlFor="thumbnail"
              className="py-2 px-4 text-white border-2 border-gray-600 rounded-md cursor-pointer hover:bg-blue-100 flex items-center justify-center"
            >
              <input
                type="file"
                accept="image/*"
                name="thumbnail"
                id="thumbnail"
                className="hidden"
                onChange={handleThumbnailChange}
              />
              <span className="text-2xl text-red-400 font-bold">
                <MdOutlineFileUpload />
              </span>
            </label>
          </div>
          {thumbnailPreview && (
            <div className="mb-4">
              <img
                src={thumbnailPreview}
                alt="Thumbnail Preview"
                className="max-w-[200px] h-auto"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            {loading ? "Adding Course" : "Add course"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
