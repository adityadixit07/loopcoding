import React, { useState } from "react";
import Categories from "./Categories";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import TopInstructors from "./TopInstructers";
import axios from "axios";
const Home = () => {
  return (
    <div className="pt-[5rem] min-h-screen">
      <section
        className="bg-gradient-to-r from-teal-500 to-indigo-500
 text-white py-16"
      >
        <div className="container mx-auto text-center overflow-y-hidden">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 overflow-y-hidden">
            Unlock Your Potential with Our Courses
          </h1>
          <div className="py-3">
            <p className="text-lg md:text-xl mb-8">
              Explore high-quality courses taught by experts in various fields.
            </p>
            <Link
              to="/courses"
              className="bg-white text-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-6 rounded-full font-bold text-lg md:text-xl transition duration-300"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* top instructors */}
      <TopInstructors />

      {/* Popular Categories */}
      <Categories />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-10 bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
        <div className="mx-auto text-center overflow-y-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 overflow-y-hidden">
            Ready to Start Your Learning Journey?
          </h2>
          <div className="py-3">
            <p className="text-lg md:text-xl mb-8">
              Join thousands of learners who have transformed their lives
              through our courses.
            </p>
            <Link
              to="/courses"
              className="bg-white text-emerald-500 hover:bg-emerald-500 hover:text-white py-2 px-6 rounded-full font-bold text-lg md:text-xl transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Home;

export const SearchCourse = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `/api/courses/search?title=${searchInput}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for courses..."
        className="w-full px-4 py-2 mb-4 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
      />
      <button
        onClick={handleSearch}
        className="block w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Search
      </button>
      <div className="mt-4">
        {searchResults.map((course) => (
          <div
            key={course._id}
            className="mb-4 p-4 bg-white rounded-md shadow-md"
          >
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
