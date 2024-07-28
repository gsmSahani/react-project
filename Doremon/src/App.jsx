import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-sine",
      offset: 100,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};
export default App;
