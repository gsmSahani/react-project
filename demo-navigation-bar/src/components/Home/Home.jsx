import React from "react";
import Blog from "../Blog/Blog";
const Home = () => {
  return (
    <>
      <div className="w-full">
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/951076/pexels-photo-951076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <Blog />
    </>
  );
};

export default Home;
