import React from "react";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Aditya Kumar Dixit",
      image:
        "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=sph",
      topic: "Web Development",
      experience: "1 years of experience",
    },
    {
      id: 2,
      name: "Suneel Kumar",
      image:
        "https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=sph",
      topic: "Data Science",
      experience: "1.3 years of experience",
    },
  ];

  return (
    <section className="py-16">
      <Heading text={"Top Instructors"} />
      <div>
        <div className="flex justify-center items-center flex-wrap gap-20">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;

export const InstructorCard = ({ instructor }) => {
  return (
    <div className="group relative bg-white p-6 rounded-md shadow-md overflow-hidden w-[300px] flex flex-col items-center flex-wrap border-animation">
      <img
        src={instructor.image}
        alt={instructor.name}
        className="w-40 h-40 rounded-full object-cover mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
      <p className="text-gray-700 mb-2">{instructor.topic}</p>
      <p className="text-gray-500 mb-4">{instructor.experience}</p>
      <Link
        to={"/instructor-profile"}
        className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600"
      >
        View Profile
      </Link>
    </div>
  );
};
