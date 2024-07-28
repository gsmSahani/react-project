import React from "react";
import { FaYoutube, FaStar } from "react-icons/fa";
import HeroImg from "../../../public/assets/dora-hero.png";
import Dora from "../../../public/assets/dora.png";
const Hero = () => {
  return (
    <>
      <div className="min-h-[700px] center relative">
        <div className="container mt-12 sm:mt-0 pb-20 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
            {/* text section  */}
            <div className="space-y-3 md:spacey-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0">
              <div data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold">Watch Now in</h1>
                <h1 className="text-6xl font-bold text-primary">3D</h1>
              </div>
              <p className="text-gray-500 text-sm font-semibold">
                The first full story in the Doraemon series was published in
                January 1970
              </p>
              <div className="mx-auto sm:mx-0">
                <button className="primary-btn flex items-center justify-center gap-4">
                  Play On
                  <span>
                    <FaYoutube className="text-2xl" />
                  </span>
                </button>
              </div>
            </div>
            {/* image section */}
            <div className="relative">
              <img
                src={HeroImg}
                className="relative w-[180px] sm:w-[240px] lg:w-[340px] mx-auto z-30"
              />
              <div className="absolute z-0 bottom-0 left-0 bg-black w-[300px] h-[20px] blur-2xl mx-auto"></div>
            </div>
            {/* Reviews sections */}
            <div className="sm:pl-16 md:pl-24 flex justify-center sm:justify-end">
              <div className="flex items-center justify-end">
                <div className="space-y-4">
                  <img
                    src={Dora}
                    alt=""
                    className="w-full h-[100] object-cover rounded-xl shadow-md hover:scale-110 duration-200 cursor-pointer"
                  />
                  <p className="text-sm flex items-center gap-2">
                    4.7
                    <span>
                      <FaStar className="text-primary" />
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
