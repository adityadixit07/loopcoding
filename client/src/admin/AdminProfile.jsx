import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAdminProfile, updateProfile } from "../redux/adminSlice";
import { showLoading, hideLoading } from "../redux/alertSlice";

const AdminProfile = () => {
  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const [website, setWebsite] = useState("");
  const { loading } = useSelector((state) => state.alerts);

  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    try {
      await dispatch(
        updateAdminProfile({
          name,
          about,
          totalExp: experience,
          website,
        })
      );
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Profile</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="experience" className="block mb-1">
              Experience
            </label>
            <input
              type="text"
              id="experience"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="about" className="block mb-1">
              About
            </label>
            <textarea
              id="about"
              className="w-full border rounded-md px-3 py-2"
              placeholder="About"
              rows="4"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="website" className="block mb-1">
              Website
            </label>
            <input
              type="text"
              id="website"
              className="w-full border rounded-md px-3 py-2"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
