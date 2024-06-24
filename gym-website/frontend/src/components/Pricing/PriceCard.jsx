import React from "react";
export const pricingData = [
  {
    name: "Gold Card",
    price: 14999,
    link: "#",
    description: [
      "Monthly Access to Fitness Area",
      "Training Session on Demand",
      "Personal Training on Demand",
      "Live class on Demand",
    ],
    duration: "12 Month",
    aosDelay: "0",
  },
  {
    name: "Flexible Card",
    price: 8999,
    link: "#",
    description: [
      "Monthly Access to Fitness Area",
      "Training Session on Demand",
      "Personal Training on Demand",
      "Live class on Demand",
    ],
    duration: "9 Month",
    aosDelay: "500",
  },
  {
    name: "General Card",
    price: 2999,
    link: "#",
    description: [
      "Monthly Access to Fitness Area",
      "Training Session on Demand",
      "Personal Training on Demand",
      "Live class on Demand",
    ],
    duration: "6 Month",
    aosDelay: "800",
  },
];
const PriceCard = () => {
  return (
    <>
      <div className="my-12 py-14">
        <div className="container">
          <h1 className="text-3xl text-center sm:text-5xl font-bold text-primary">
            Pricing
          </h1>

          {/* card section*/}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {pricingData.map((data, index) => (
              <div
                key={index}
                className="space-y-3 text-center bg-gray-200 dark:bg-dark text-black dark:text-white p-4 sm:py-16 rounded-lg group shadow-2xl hover:bg-primary/20 dark:hover:bg-primary/50 duration-200"
              >
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <h1 className="text-4xl font-semibold text-primary">
                  {data.price}
                </h1>

                {data.description.map((description) => (
                  <p>{description}</p>
                ))}
                <p className="font-semibold text-xl">{data.duration}</p>
                <button className="primary-btn">Subscribe</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default PriceCard;
