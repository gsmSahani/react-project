import React from "react";
import BackShowing from "../../assets/back showing.jpg";
const bgStyle = {
  backgroundImage: `url(${BackShowing})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Hero = () => {
  return (
    <>
      <div style={bgStyle} className="bg-white dark:bg-black duration-200">
        <div className="bg-white/10 dark:bg-black/70 duration-200">
          <div className="container min-h-[620px] flex items-center">
            <div className="w-full md:w-[550px] mx-auto text-center space-y-5">
              <p className="text-primary text-2xl">
                {" "}
                Start Your Fitness Journey
              </p>
              <h1 className="text-5xl md:text-7xl font-bold">
                {" "}
                Your Fitness Journey Begins Here...
              </h1>
              <p>The body achieves what the mind belives</p>
              <button className="primary-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
