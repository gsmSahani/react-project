import React from "react";
import { FaWhatsapp, FaUserGraduate } from "react-icons/fa";
import sendWhatsAppMessage from "../../helper/sendWhatsAppMessage";
import handleEnrollNow from "../../helper/handleEnrollNow";

const Cards = () => {
  const cardData = [
    {
      title: "Basic English",
      price: "4000",
      duration: "60 Days",
      topics: ["Grammar", "Vocabulary", "Basic Conversation"],
    },
    {
      title: "Advance English",
      price: "8000",
      duration: "105 Days",
      topics: [
        "Advanced Grammar",
        "Professional Communication",
        "Accent Reduction",
      ],
    },
  ];

  return (
    <div className="dark:bg-gray-600 dark:text-white bg-white pt-0">
      <div className="container mx-auto px-4 py-8 overflow-x-hidden dark:text-white dark:bg-gray-600">
        <h1 className="text-center text-3xl font-bold pb-8">Courses Pricing</h1>
        <div className="flex flex-col md:flex-row mb-8 items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-slate-200 rounded-lg shadow-lg p-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/3 transform transition-transform hover:scale-105 dark:bg-black dark:text-white dark:shadow-gray"
            >
              <h2 className="text-2xl font-bold my-2">{card.title}</h2>
              <p className="text-xl text-gray-700 mb-2">₹{card.price}</p>
              <p className="text-gray-600 mb-2">Duration: {card.duration}</p>
              <ul className="text-gray-600 mb-4">
                {card.topics.map((topic, i) => (
                  <li key={i}>• {topic}</li>
                ))}
              </ul>

              <div className="flex justify-between mb-4 space-x-4">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
                  onClick={() => sendWhatsAppMessage(card.title)}
                >
                  <FaWhatsapp className="mr-2" /> WhatsApp
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline"
                  onClick={handleEnrollNow}
                >
                  <FaUserGraduate className="mr-2" /> Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
