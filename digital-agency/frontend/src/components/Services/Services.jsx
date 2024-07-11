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
            <h1 className="text-3xl font-semibold text-violet-950 dark:text-purple-400">
              Explore Our Services
            </h1>
            <p>
              we are cutratetraveller we provide you a best guidance to expolre
              the most beautiful place across the globe with minimum cost
            </p>
          </div>
          {/* card sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {SkillData.map((skill) => (
              <div key={skill.name} className="card space-y-3 sm:space-y-4 p-4">
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
          {/* button sections */}
          <div className="text-center mt-4 sm:mt-8">
            <button className="btn-primary">Explore More</button> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
