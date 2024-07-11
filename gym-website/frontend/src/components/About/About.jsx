import React from "react";
import Cycling from "../../assets/cycling.jpg";
const About = () => {
  return (
    <>
      <div className="py-16 dark:bg-black bg-slate-100  duration-200">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center">
            {/* image sections */}
            <div>
              <img
                src={Cycling}
                alt=""
                className="sm:scale-105  max-h-[300px] drop-shadow-md mx-auto"
              />
            </div>
            {/* text sections */}
            <div>
              {/* heading sections */}
              <div className="flex items-center gap-4">
                <div className="text-primary text-7xl ">
                  <h1 className="font-bold">1</h1>
                </div>
                <div>
                  <p className="text-primary">Global Fitness</p>
                  <h1 className="text-2xl sm:text-4xl font-bold"> About Us</h1>
                </div>
              </div>
              {/* bottom section */}
              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Porro asperiores assumenda quia commodi similique labore illum
                  perferendis amet consequatur illo doloremque deserunt mollitia
                  sed hic earum alias accusamus tempore tenetur, optio rem
                  pariatur? Similique amet id officiis error at debitis. Odit,
                  magnam. Eos nesciunt maiores minus doloremque sint
                  necessitatibus ipsum!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
              <button className="outline-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
