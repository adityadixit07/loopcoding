import React from "react";
import webdevelopement from "../assets/webdevelopement.avif";
import datascience from "../assets/datascience.avif";
import graphicdesign from "../assets/graphicdesign.avif";
import Heading from "./Heading";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Learn the fundamentals of web development and build interactive websites.",
      instructor: "John Doe",
      image: webdevelopement,
    },
    {
      id: 2,
      title: "Data Science",
      description:
        "Explore the world of data science, analyze data, and make data-driven decisions.",
      instructor: "Jane Smith",
      image: datascience,
    },
    {
      id: 3,
      title: "Graphic Design",
      description:
        "Unlock your creativity with graphic design tools and techniques.",
      instructor: "Alice Johnson",
      image: graphicdesign,
    },
  ];

  return (
    <div className="pt-[8rem]">
      <Heading text={"Explore our Courses"} />
      <section className="py-10">
        <div className="flex flex-wrap gap-6 mx-4 justify-between">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-md shadow-lg mx-auto max-w-sm border-2 border-gray-200"
            >
              <img
                src={course.image}
                alt={course.title}
                className="object-contain w-full h-32 mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-4">{course.description}</p>
              <p className="text-emerald-500 font-bold">
                Instructor: {course.instructor}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
