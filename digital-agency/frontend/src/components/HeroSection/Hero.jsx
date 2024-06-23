import React from "react";
import HeroImage from "../../assets/contactpage.jpg";
const Hero = () => {
  return (
    <>
      <main className="bg-white dark:bg-gray-950 dark:text-white duration-400">
        <div className="container min-h-[620px] flex mt-10 sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
            {/* image sections */}
            <div className="order-1 sm:order-2 relative">
              <img src={HeroImage} alt="" />
              <div className="bg-white dark:bg-900 px-4 py-2 rounded-xl shadow-md absolute -bottom-5 -right-8 ">
                <p>Projects</p>
                <h1 className="font-bold">Done</h1>
              </div>
            </div>
            {/* text content section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
              <h1 className="text-4xl sm:text-5xl font-semibold">
                Building Traveller Soul with{" "}
                <span className="text-purple-500">Cutratetraveller</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                blanditiis debitis, fugit vitae iste ipsa repudiandae
                perspiciatis facilis voluptas neque fugiat voluptates nulla
                inventore rem ipsum nobis delectus ducimus et quidem accusantium
                deleniti? Dolorum culpa adipisci veritatis quis, modi tenetur
                dignissimos voluptates cupiditate optio velit reprehenderit
                officia, unde quia maiores!
              </p>
              <button type="button" className="btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
