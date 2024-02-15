import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 overflow-y-hidden">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
