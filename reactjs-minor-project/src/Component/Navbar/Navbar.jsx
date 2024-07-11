import React from "react";
import navMenu from "../../conig/navMenu";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="">
        <ul className="flex gap-5 justify-center bg-blue-500">
          {navMenu.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.menuItem}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
