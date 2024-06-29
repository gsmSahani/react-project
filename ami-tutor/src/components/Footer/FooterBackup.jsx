import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center mb-4 md:mb-0">
          <span className="text-center md:text-left">
            Made by <FaHeart className="text-red-500 inline-flex" /> Gautam Sahani
          </span>
        </div>
        <div className="text-lg font-bold text-center md:text-center md:ml-4 md:flex-1">
          Modern Spoken English
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <AiFillInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-gray-400 mx-2">
            <AiFillFacebook className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
