import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "John Doe",
    feedback:
      "The classes were amazing! I improved my English skills significantly. The classes were amazing! I improved my English skills significantly. The classes were amazing! I improved my English skills significantly.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Jane Smith",
    feedback:
      "A wonderful experience with great teachers and interactive lessons.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Mike Johnson",
    feedback:
      "Highly recommend these classes for anyone looking to improve their English.",
    image: "https://via.placeholder.com/150",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
  };

  return (
    <>
      <div className="dark:bg-gray-600 dark:text-white">
        <h2 className="text-3xl font-bold text-center  dark:text-white">
          Testimonials
        </h2>
        <div className="container mx-auto w-full px-4 py-8 overflow-x-hidden dark:text-white dark:bg-gray-600 rounded-2xl">
          <Slider {...settings} className=" dark:bg-gray-600">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 flex justify-center overflow-x-hidden dark:text-white"
              >
                <div className="max-w-lg mx-auto rounded-lg shadow-lg p-6 flex flex-col items-center text-center bg-slate-200 dark:bg-black">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                  <p className="text-gray-600 overflow-hidden overflow-ellipsis max-h-32">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
