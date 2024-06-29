import React from "react";
import { useContext } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Cards from "../Cards/Cards";
import Tesitimonials from "../Testimonials/Tesitimonials";
import Blog from "../Blog/Blog";
import ThemeContext from "../../helper/ThemeContext";
const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Hero />
      <About />
      <Cards />
      <Tesitimonials />
      {/* <Blog /> */}
    </>
  );
};

export default Home;
