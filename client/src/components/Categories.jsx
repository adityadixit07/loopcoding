import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "./Heading";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import datastructures from "../assets/datastructures.png";

const Categories = () => {
  const techStackItems = [
    { id: 1, name: "HTML", image: html },
    { id: 2, name: "CSS", image: css },
    { id: 3, name: "JavaScript", image: js },
    { id: 4, name: "React.js", image: react },
    { id: 5, name: "Node.js", image: nodejs },
    { id: 6, name: "DSA", image: datastructures },
  ];

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-8 ">
      <Heading text={"Popular Categories"} />
      <div className="container mx-auto text-center overflow-y-hidden">
        <div className="overflow-x-hidden">
          <Slider
            {...slickSettings}
            className="overflow-y-hidden overflow-x-hidden"
          >
            {techStackItems.map((item) => (
              <div key={item.id} className=" py-8 overflow-x-hidden ">
                <div className="rounded-full w-24 h-24 mx-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-gray-700 mt-2">{item.name}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Categories;
