import React from "react";

const UserCart = () => {
  const courses = [
    {
      id: 1,
      title: "React.js Masterclass",
      thumbnail:
        "https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg",
      price: 49.99,
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      thumbnail:
        "https://www.javascripttutorial.net/wp-content/uploads/2021/04/JavaScript-Tutorial.svg",
      price: 29.99,
    },
  ];

  // Calculate subtotal
  const subtotal = courses.reduce((acc, course) => acc + course.price, 0);

  return (
    <div className="container mx-auto px-4 py-8 pt-[6rem]">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex items-center justify-between px-6 py-4"
          >
            <div className="flex items-center">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-20 h-20 object-cover mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-gray-600">${course.price.toFixed(2)}</p>
              </div>
            </div>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>
      {/* Subtotal */}
      <div className="mt-8 flex justify-end items-center">
        <h2 className="text-xl font-semibold mr-4">
          Subtotal: ${subtotal.toFixed(2)}
        </h2>
        <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default UserCart;
