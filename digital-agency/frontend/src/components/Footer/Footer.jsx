import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
const footerLinks = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const helpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery details",
  },
  {
    title: "Terms & Conditions",
    link: "/#termsandconditions",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];

const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className="grid">
          {/* company details */}
          <div className="">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 ">
              Gautam Sahani
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laborum quidem labore harum ad dolorem amet illo velit ea,
              consequatur dolorum earum modi? Nemo obcaecati consequuntur est
              quae repudiandae quam laboriosam? In nostrum tempora cum
              repellendus, ipsum quidem adipisci!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
