import React from "react";
import Categories from "./Categories";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";
import TopInstructors from "./TopInstructers";
import AssistanceBoard from "../assistance/AssistanceBoard";

const Home = () => {
  return (
    <div className="pt-[5rem] min-h-screen">
      {/* Hero Section */}
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

      <AssistanceBoard />

      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Home;
