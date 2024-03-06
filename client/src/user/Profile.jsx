import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertSlice";
import toast from "react-hot-toast";
import { updateProfile } from "../redux/userSlice";
import API from "../redux/API";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [bio, setBio] = useState(user.bio || "");
  const [github, setGithub] = useState(user.github || "");
  const [linkedin, setLinkedin] = useState(user.linkedin || "");
  const [degree, setDegree] = useState(user.degree || "");
  const [major, setMajor] = useState(user.major || "");
  const [university, setUniversity] = useState(user.university || "");
  const [graduationYear, setGraduationYear] = useState(
    user.graduationYear || ""
  );
  const [resume, setResume] = useState(user.resume || "");
  const dispatch = useDispatch();

  const handleUpdate = async () => {
    dispatch(showLoading());
    try {
      // const formData = {
      //   bio,
      //   github,
      //   linkedin,
      //   degree,
      //   major,
      //   university,
      //   graduationYear,
      //   resume,
      // };
      // dispatch(updateProfile({formData, userId: user._id}));
      const response = await API.put(
        `/user/profile/update`,
        {
          bio,
          github,
          linkedin,
          degree,
          major,
          university,
          graduationYear,
          resume,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data } = response;
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Try Again....", {
        duration: 1000,
      });
    } finally {
      dispatch(hideLoading());
    }
  };

  return (
    <div className=" px-4 pt-[8rem] max-w-md m-auto">
      <h1 className="text-3xl font-semibold mb-4">Profile</h1>

      <div className="space-y-4">
        <label htmlFor="Bio"></label>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Add Bio"
          className="text-gray-800 border-2 border-green-500 rounded-md p-2 w-full outline-none focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
        />
        <input
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="Github"
          className="input"
        />
        <input
          type="text"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholder="Linkedin"
          className="input"
        />
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree"
          className="input"
        />
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="Major"
          className="input"
        />
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          placeholder="University"
          className="input"
        />
        <input
          type="text"
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
          placeholder="Graduation Year"
          className="input"
        />
        <input
          type="text"
          value={resume}
          onChange={(e) => setResume(e.target.value)}
          placeholder="Resume"
          className="input"
        />
        <button onClick={handleUpdate} className="btn">
          Update
        </button>
      </div>
    </div>
  );
};

export default Profile;
