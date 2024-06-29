import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavbarMenuLinks from "../../config/navbarMenuLinks";
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="logo flex items-center">
          <Link className="text-lg font-bold">CutrateTraveller</Link>
        </div>
        <div>
          <ul className="flex gap-5 items-center">
            {NavbarMenuLinks().map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <NavLink
                    to={link}
                    style={({ isActive }) => ({
                      color: isActive ? "tex-blue-500" : "text-black",
                    })}
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
            <button className="ml-5 py- px-4 bg-blue-500 text-whtie rounded">
              Get In Touch
            </button>
          </ul>
          {/* darkmode section */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
