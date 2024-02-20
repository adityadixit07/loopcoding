import React from "react";
import { RxAvatar } from "react-icons/rx";

const Profile = () => {
  return (
    <div className="container mx-auto py-[8rem]">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        <div className="flex items-center mb-4">
          {/* <img
            src={user.avatar}
            alt="User Avatar"
            className="w-12 h-12 rounded-full mr-4"
          /> */}
          <RxAvatar/>
          <div>
            <h2 className="text-xl font-semibold">asdfsdfasdf</h2>
            <p className="text-gray-600">asdfadas</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Bio</h3>
          <p className="text-gray-600">asdfadfdsa</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Location</h3>
          <p className="text-gray-600">asdfsafdsdas</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Interests</h3>
          <ul className="list-disc list-inside text-gray-600">
            {/* {user.interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))} */}
          </ul>
        </div>
        <div className="mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
