import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Brand from "./components/Brand/Brand";
import Services from "./components/Services/Services";
const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Hero />
        <Brand />
        <Services />
      </div>
    </>
  );
};
export default App;
