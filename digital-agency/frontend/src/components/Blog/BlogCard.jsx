import React from "react";
import { FaArrowRight } from "react-icons/fa6";
const BlogCard = ({ img, title, description }) => {
  return (
    <>
      <div className="dark:text-white group">
        <div className="overflow-hidden">
          <img
            src={img}
            alt=""
            className="mx-auto h-[420px] object-cover group-hover:scale-105 duration-300"
          />
          <div className="space-y-2 p-4 ml-6 bg-white dark:bg-slate-950">
            <h1 className="line-clamp-1 text-2xl font-semibold">{title}</h1>
            <h1 className="line-clamp-4 text-gray-500 text-sm">
              {description}
            </h1>
            <div className="flex justify-end pr-4 text-gray-400 ">
              <FaArrowRight className="group-hover:text-purple-400 group-hover:translate-x-2 duration-300" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
