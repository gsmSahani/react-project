import React, { useState } from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonyImg from "../../assets/image/gautam-testimonials.webp";
import { Helmet } from "react-helmet-async";

const testimonialsData = [
  {
    name: "Gautam Sahani",
    feedback:
      "The classes were amazing! I improved my English skills significantly. The classes were amazing! I improved my English skills significantly. The classes were amazing! I improved my English skills significantly.",
    image: testimonyImg,
    rating: 5,
  },
  {
    name: "Jane Smith",
    feedback:
      "A wonderful experience with great teachers and interactive lessons.",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    feedback:
      "Highly recommend these classes for anyone looking to improve their English.",
    image: "https://via.placeholder.com/150",
    rating: 3,
  },
];

const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

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

  const [userRatings, setUserRatings] = useState(
    testimonialsData.map((testimonial) => testimonial.rating)
  );

  const handleStarClick = (index, rating) => {
    const newRatings = [...userRatings];
    newRatings[index] = rating;
    setUserRatings(newRatings);
  };

  const renderStars = (rating, index) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar
            key={i}
            className="cursor-pointer text-yellow-500"
            onClick={() => handleStarClick(index, i + 1)}
          />
        ))}
        {halfStar === 1 && (
          <FaStarHalfAlt
            className="cursor-pointer text-yellow-500"
            onClick={() => handleStarClick(index, fullStars + 0.5)}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar
            key={i}
            className="cursor-pointer text-gray-300"
            onClick={() =>
              handleStarClick(index, fullStars + halfStar + i + 0.5)
            }
          />
        ))}
        <span className="ml-2">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title> Spoken English Coaching in Pardi Valsad</title>
        <meta
          name="description"
          content="Read testimonials from our students and learn how our English coaching center in Pardi Valsad, Gujarat, has helped them improve their skills."
        />
      </Helmet>
      <div className="dark:bg-gray-600 dark:text-white">
        <h2 className="text-3xl font-bold text-center dark:text-white">
          Testimonials
        </h2>
        <div className="container mx-auto w-full px-4 py-8 overflow-x-hidden dark:text-white dark:bg-gray-600 rounded-2xl">
          <Slider {...settings} className="dark:bg-gray-600">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 flex justify-center overflow-x-hidden dark:text-white"
              >
                <div className="max-w-lg mx-auto rounded-lg shadow-lg p-6 flex flex-col items-center text-center bg-slate-200 dark:bg-black">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                  {renderStars(userRatings[index], index)}
                  <p className="text-gray-600 overflow-hidden overflow-ellipsis max-h-32">
                    {truncateText(testimonial.feedback, 50)}
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
