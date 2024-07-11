import React from "react";
import { BiPhoneCall } from "react-icons/bi";

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
const Footer = () => {
  return (
    <nav className="shadow-md w-full dark:bg-dark dark:text-white">
      <h4 className="text-center dark:">CopyRight gautam sahani</h4>
    </nav>
  );
};

export default Footer;
