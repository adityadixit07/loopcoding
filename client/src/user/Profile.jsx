import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  FaUser,
  FaGraduationCap,
  FaFileAlt,
  FaAngleDown,
  FaAngleUp,
  FaEdit,
} from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const user1 = {
    data: {
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Passionate learner and tech enthusiast and a full-stack developer. I love to learn and share my knowledge with others.",
    },
    education: {
      degree: "Bachelor of Science",
      major: "Computer Science",
      university: "University of Example",
      graduationYear: "2022",
      // Add more education details
    },
    resume: "Link to user's resume",
    purchases: [
      {
        id: 1,
        courseName: "React.js Masterclass",
        instructor: "Jane Smith",
        price: 49.99,
        date: "2023-12-15",
      },
      // Add more purchased courses
    ],
    payments: [
      {
        id: 1,
        description: "Monthly subscription",
        amount: 9.99,
        date: "2023-12-01",
      },
      // Add more payment history
    ],
  };

  const [showPaymentHistory, setShowPaymentHistory] = useState(false);
  const [showPurchasedCourses, setShowPurchasedCourses] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8 pt-[6rem]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center py-8 text-gray-800">
          Dashboard
        </h1>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-800 ">
                  <FaUser className="inline-block mr-2 text-lg" />
                  {user?.data.name}
                </p>
              </div>
              <img
                src={user1.data.avatar}
                alt="profile"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">{user?.data.email}</p>
            <p className="text-sm text-gray-600 mt-4">{user1.data.bio}</p>
            <p className="text-sm text-gray-600 mt-2">{user1.data.location}</p>
            {/* Education */}
            {user1.education.degree && (
              <div className="flex items-center mt-4">
                <FaGraduationCap className="text-lg text-gray-500 mr-2" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {user1.education.degree}
                  </p>
                  <p className="text-sm text-gray-600">
                    {user1.education.major}
                  </p>
                  <p className="text-sm text-gray-600">
                    {user1.education.university},{" "}
                    {user1.education.graduationYear}
                  </p>
                </div>
              </div>
            )}
            {/* Resume */}
            {user1.resume && (
              <div className="flex items-center mt-4">
                <FaFileAlt className="text-lg text-gray-500 mr-2" />
                <a href={user1.resume} className="text-sm text-blue-500">
                  {user1.resume}
                </a>
              </div>
            )}
            {/* Profile Completion */}

            {/* Show/hide options */}
            <div className="mt-6 flex items-center">
              <button
                className="text-sm text-blue-500 flex items-center focus:outline-none mr-4"
                onClick={() => setShowPaymentHistory(!showPaymentHistory)}
              >
                {showPaymentHistory ? (
                  <>
                    <FaAngleUp className="mr-1" />
                    Hide Payment History
                  </>
                ) : (
                  <>
                    <FaAngleDown className="mr-1" />
                    Show Payment History
                  </>
                )}
              </button>
              <button
                className="text-sm text-blue-500 flex items-center focus:outline-none"
                onClick={() => setShowPurchasedCourses(!showPurchasedCourses)}
              >
                {showPurchasedCourses ? (
                  <>
                    <FaAngleUp className="mr-1" />
                    Hide Purchased Courses
                  </>
                ) : (
                  <>
                    <FaAngleDown className="mr-1" />
                    Show Purchased Courses
                  </>
                )}
              </button>
            </div>
            {/* Payment History */}
            {showPaymentHistory && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Payment History
                </h2>
                <ul className="list-disc pl-6">
                  {user1.payments.map((payment) => (
                    <li key={payment.id} className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold">
                        {payment.description}
                      </span>{" "}
                      - ${payment.amount} ({payment.date})
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Purchased Courses */}
            {showPurchasedCourses && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Purchased Courses
                </h2>
                <ul className="list-disc pl-6">
                  {user1.purchases.map((purchase) => (
                    <li
                      key={purchase.id}
                      className="text-sm text-gray-600 mb-2"
                    >
                      <span className="font-semibold">
                        {purchase.courseName}
                      </span>{" "}
                      - ${purchase.price} ({purchase.date})
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="mt-6">
              <button className="text-sm text-blue-500 flex items-center focus:outline-none">
                <FaEdit className="mr-1" />
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
