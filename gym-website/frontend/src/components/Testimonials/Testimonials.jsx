import React from "react";
import Slider from "react-slick";
const testimonialsData = [
  {
    id: 1,
    name: "Pradeep Sahoo",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Porro asperiores assumenda quia commodi similique labore illumperferendis amet consequatur illo doloremque deserunt mollitiased hic earum alias accusamus tempore tenetur, optio rempariatur? Similique amet id officiis error at debitis. Odit,magnam. Eos nesciunt maiores minus doloremque sintnecessitatibus ipsum!",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Pradeep Sahoo",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Porro asperiores assumenda quia commodi similique labore illumperferendis amet consequatur illo doloremque deserunt mollitiased hic earum alias accusamus tempore tenetur, optio rempariatur? Similique amet id officiis error at debitis. Odit,magnam. Eos nesciunt maiores minus doloremque sintnecessitatibus ipsum!",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Pradeep Sahoo",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Porro asperiores assumenda quia commodi similique labore illumperferendis amet consequatur illo doloremque deserunt mollitiased hic earum alias accusamus tempore tenetur, optio rempariatur? Similique amet id officiis error at debitis. Odit,magnam. Eos nesciunt maiores minus doloremque sintnecessitatibus ipsum!",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Pradeep Sahoo",
    text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Porro asperiores assumenda quia commodi similique labore illumperferendis amet consequatur illo doloremque deserunt mollitiased hic earum alias accusamus tempore tenetur, optio rempariatur? Similique amet id officiis error at debitis. Odit,magnam. Eos nesciunt maiores minus doloremque sintnecessitatibus ipsum!",
    img: "https://picsum.photos/200/300",
  },
];
const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="py-10 my-10">
        <div className="container">
          {/* heaader section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold">Testimonials</h1>
          </div>
          {/* testimonial section */}
          <div>
            <Slider {...settings}>
              {testimonialsData.map((data) => (
                <div className="my-6" key={data.id}>
                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-dark bg-primary/10">
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20 mx-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4">
                      <div className="space-y-3">
                        <p className="text-xs text-gray-500">{data.text}</p>
                        <p className="text-xl font-bold text-black/80 dark:text-primary">
                          {data.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
