import React from "react";

const Footer = () => {
  return (
    <>
      <div className="dark:bg-black dark:text-white bg-gray-900 text-white">
        <nav className="duration-400 custom-shadow flex flex-col md:flex-row justify-between items-center p-4 container drop-shadow-md">
          <div className="text-center md:text-left mb-2 md:mb-0">
            Made by ❣ Gautam Sahani
          </div>
          <div className="text-center mb-2 md:mb-0">
            © All Right Reserved Modern Spoken Classes 2024
          </div>
          <div className="text-center">😀😁😂</div>
        </nav>
      </div>
    </>
  );
};

export default Footer;
