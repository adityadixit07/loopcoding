import React from "react";
import Heading from "./Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Full Stack Developer",
      comment:
        "I stumbled upon LiveCoding.in and it has been a game-changer for me. The courses are top-notch, providing in-depth insights and practical skills. The instructors are industry experts, and the community support is phenomenal. I highly recommend LiveCoding.in for anyone looking to upskill in the tech industry.",
    },
    {
      id: 2,
      name: "Emma Davis",
      position: "Machine Learning Engineer",
      comment:
        "LiveCoding.in has been instrumental in my journey as a machine learning enthusiast. The courses are well-structured, covering a broad spectrum of topics. The hands-on projects and real-world scenarios have significantly boosted my confidence. The platform's interactive learning environment sets it apart from others.",
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      position: "UX/UI Designer",
      comment:
        "Being a designer, I value creativity and innovation. LiveCoding.in exceeded my expectations with its design courses. The engaging content, industry-relevant projects, and expert guidance have enhanced my skills. I've not only learned the latest design trends but also applied them to real-world projects.",
    },
  ];

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <section className="py-16 px-10">
      <Heading text={"What our students say"} />
      <div className="container mx-auto text-center overflow-y-hidden">
        <div className="lg:hidden">
          <Slider
            {...slickSettings}
            className="overflow-y-hidden py-8 overflow-x-hidden"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="overflow-y-hidden px-3">
                <div className="bg-white p-6 rounded-md shadow-md border-2 border-gray-200 overflow-y-hidden">
                  <p className="text-gray-700 mb-4 relative overflow-y-hidden">
                    {`" `}
                    {testimonial.comment}
                    {` "`}
                  </p>
                  <p className="text-emerald-500 font-bold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Show regular testimonials on desktop view */}
        <div className="hidden lg:flex lg:justify-between gap-6 overflow-y-hidden ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-md shadow-md border-2 border-gray-200 testimonials-slider"
            >
              <p className="text-gray-700 mb-4 relative overflow-y-hidden">
                {`" `}
                {testimonial.comment}
                {` "`}
              </p>
              <p className="text-emerald-500 font-bold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
