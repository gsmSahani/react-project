import React from "react";
import Slider from "react-slick";

export const testimonialsData = [
  {
    id: 1,
    names: "Pradeep Sahooo",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla inventore rem ipsum nobis delectus ducimus et quidem accusantium",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    names: "Jhonny Sins",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla inventore rem ipsum nobis delectus ducimus et quidem accusantium",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    names: "Rehman Shaikh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla inventore rem ipsum nobis delectus ducimus et quidem accusantium",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    names: "Rintu Reji",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla inventore rem ipsum nobis delectus ducimus et quidem accusantium",
    img: "https://picsum.photos/200/300",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className="py-10 dark:text-white">
      <div className="container">
        <div className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6">
          <Slider {...settings}>
            {testimonialsData.map(({ id, names, text, img }) => (
              <div key={id} className="my-6">
                <div className="flex felx-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800  relative">
                  <img
                    src={img}
                    alt={names}
                    className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                  />

                  <div className="space-y-4">
                    <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                      {text}
                    </p>
                    <h1 className="text-xl font-bold">{names}</h1>
                  </div>
                  <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                    ''
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
