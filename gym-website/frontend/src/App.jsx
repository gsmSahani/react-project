import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PriceCard from "./components/Pricing/PriceCard";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <>
      <div className="overflow-x-hidden bg-white dark:bg-black dark:text-white text-black">
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <PriceCard />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};
export default App;
