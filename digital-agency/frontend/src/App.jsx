import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Brand from "./components/Brand/Brand";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import BlogCard from "./components/Blog/BlogCard";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogComp from "./components/Blog/BlogComp";
const App = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-white dark:bg-black duration-400">
        <Navbar />
        <Hero />
        <Brand />
        <Services />
        <Testimonials />
        <BlogComp />
        <BlogCard />
        <Footer />
      </div>
    </>
  );
};
export default App;
