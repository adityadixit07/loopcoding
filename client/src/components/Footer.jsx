import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About LiveCoding.in</h3>
            <p className="text-gray-300">
              Elevate your learning experience with LiveCoding.in, where passion
              meets expertise. As a leading platform, we are dedicated to
              providing high-quality online courses crafted by seasoned
              professionals. Our diverse range of courses, from web development
              to data science, empowers learners of all levels to stay ahead in
              the dynamic tech landscape.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none p-0">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-300 hover:text-emerald-500 transition duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-300 hover:text-emerald-500 transition duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-emerald-500 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: info@livecoding.in</p>
            <p className="text-gray-300">Phone: +91 705 429 3380</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
