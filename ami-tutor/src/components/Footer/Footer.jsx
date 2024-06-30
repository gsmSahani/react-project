import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const SocialLink = ({ href, icon }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-gray-800 rounded-full "
      >
        {icon}
      </a>
    );
  };
  return (
    <footer className="dark:bg-black dark:text-white bg-gray-900 text-white">
      <div className="container px-4 py-4 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          Made by ❣ Gautam Sahani
        </div>
        <div className="text-center mb-2 md:mb-0">
          © All Rights Reserved Modern Spoken Classes 2024
        </div>
        <div className="text-center">
          <div className="flex space-x-4">
            <SocialLink
              href="https://facebook.com/your-facebook-page-url"
              icon={
                <FaFacebook className="text-2xl hover:bg-blue-500 rounded-full p-2 w-10 h-10" />
              }
            />
            <SocialLink
              href="https://instagram.com/your-instagram-account-url"
              icon={
                <FaInstagram className="text-2xl text-gray-500 rounded-full p-2 w-10 h-10" />
              }
            />
            <SocialLink
              href="https://wa.me/your-whatsapp-number"
              icon={
                <FaWhatsapp className="text-2xl text-green-500 rounded-full p-2 w-10 h-10" />
              }
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
