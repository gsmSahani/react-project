import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import DarkMode from "./DarkMode";
const navLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#home",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Membership",
    link: "/#membership",
  },
  {
    id: 4,
    name: "Join Us",
    link: "/#join-us",
  },
];
const Navbar = () => {
  return (
    <nav className="shadow-md w-full dark:bg-dark dark:text-white">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group">
            <BiPhoneCall className="text-primary text-2xl animate-pulse group-hover:scale-105 duration-200" />
            <span>+91 7046016354</span>
          </div>

          <div>
            <p className="logo w-16 sm:w-24 m-2">GSM Fitness</p>
          </div>
          <div className="flex ">
            <ul className="flex items-center gap-8">
              {navLinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold hover:text-primary duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <DarkMode />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
