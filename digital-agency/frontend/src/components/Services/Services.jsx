import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

export const SkillData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-purple-400" />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-purple-400" />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla",
    aosDelay: "300",
  },
  {
    name: "Graphics Designing",
    icon: <SlNote className="text-4xl text-purple-400" />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla",
    aosDelay: "500",
  },
  {
    name: "Data Mining",
    icon: <FaCameraRetro className="text-4xl text-purple-400" />,
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit blanditiis debitis, fugit vitae iste ipsa repudiandae perspiciatis facilis voluptas neque fugiat voluptates nulla",
    aosDelay: "800",
  },
];

const Services = () => {
  return (
    <>
      <div className="bggray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* header sections */}
          <div className="pb-12 text-center space-y-3">
            <h1 className="text-3xl font-semibold text-violet-950 dark:text-purple-400">Explore Our Services</h1>
            <p>
              we are cutratetraveller we provide you a best guidance to expolre
              the most beautiful place across the globe with minimum cost
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
