import React from "react";
import { useState, useEffect } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });
  return (
    <>
      {theme === "dark" ? (
        <BiSolidSun className="text-2xl" onClick={() => setTheme("light")} />
      ) : (
        <BiSolidMoon className="text-2xl" onClick={() => setTheme("dark")} />
      )}
      <div></div>
    </>
  );
};
export default DarkMode;
