import React, { useContext } from "react";
import Homepage from "../../assets/image/hero.jpg";

import ThemeContext from "../../helper/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext); // Example context for theme mode

  const heroImage = {
    backgroundImage: `url(${Homepage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
  };

  const overlayStyles = {
    position: "absolute",
    inset: 0,
    backgroundColor: isDarkMode ? "rgba(0, 0, 0, 0.7)" : "rgba(0, 0, 0, 0.5)",
    transition: "opacity 0.3s ease",
    opacity: isDarkMode ? 0.7 : 0.5,
  };

  return (
    <div
      style={heroImage}
      className="relative flex items-center justify-center"
    >
      <div style={overlayStyles}></div>
      {/* Overlay */}
      <div className="relative text-white w-11/12 sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 max-w-4xl mx-auto p-4 sm:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
          Modern English Classes
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-center mb-4 sm:mb-6">
          Modern spoken English classes prioritize practical communication
          skills, emphasizing fluency, pronunciation, and cultural
          understanding. Through interactive methods and contemporary resources,
          these classes cater to diverse learning styles, offering personalized
          feedback and engaging activities. Designed for academic, professional,
          and social contexts, they empower learners to confidently navigate
          multicultural environments with proficiency and cultural sensitivity.
        </p>
        <div className="text-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
