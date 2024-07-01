import React, { useState, useContext } from "react";
import ThemeContext from "../../helper/ThemeContext";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  //
  return (
    <nav className="bg-white shadow-md  relative dark:bg-black dark:text-white duration-400">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="">
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 dark:bg-black dark:text-white"
          >
            Ami Tutor
          </Link>
        </div>

        <div className="hidden md:flex space-x-8 gap-5">
          <NavLink
            to="/"
            end
            className={`${({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"}dark:bg-black dark:text-white`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={`${({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"}dark:bg-black dark:text-white`}
          >
            About
          </NavLink>
          <NavLink
            to="/courses"
            className={`${({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600"}dark:bg-black dark:text-white`}
          >
            Course
          </NavLink>

          <DarkMode />
        </div>

        <div className="md:hidden flex items-center ">
          <DarkMode />
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none dark:bg-black dark:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 w-3/4 z-50 dark:bg-black dark:text-white`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:bg-black dark:text-white">
          <h2 className="text-2xl font-bold text-gray-800 dark:bg-black dark:text-white">
            Ami Tutor
          </h2>
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none dark:bg-black dark:text-white"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4 dark:bg-black dark:text-white">
          <li>
            <NavLink
              to="/"
              end
              className={`${({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"}dark:bg-black dark:text-white`}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`${({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"}dark:bg-black dark:text-white`}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={`${({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"}dark:bg-black dark:text-white`}
              onClick={closeMenu}
            >
              Course
            </NavLink>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
