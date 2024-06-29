import React from "react";

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

  // Function to handle WhatsApp message sending
  const sendWhatsAppMessage = () => {
    const phoneNumber = "1234567890"; // Replace with your WhatsApp number
    const message = "I'm interested in enrolling. Please provide more details."; // Replace with your predefined message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="dark:bg-gray-600 dark:text-white bg-white pt-0">
      <div className="container mx-auto px-4 py-8 overflow-x-hidden dark:text-white dark:bg-gray-600">
        <h1 className="text-center text-3xl font-bold pb-8">Courses Pricing</h1>
        <div className="flex flex-col md:flex-row mb-8 items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative bg-slate-200 rounded-lg shadow-lg p-6 w-full md:w-1/3 transform transition-transform hover:scale-105 dark:bg-black dark:text-white dark:shadow-gray"
            >
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="text-xl text-gray-700 mb-2">₹{card.price}</p>
              <p className="text-gray-600 mb-2">Duration: {card.duration}</p>
              <ul className="text-gray-600 mb-4">
                {card.topics.map((topic, i) => (
                  <li key={i}>• {topic}</li>
                ))}
              </ul>
              <div className="flex justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 mx-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  onClick={() => {
                    // Replace with your enroll functionality
                    console.log(`Enrolling in ${card.title}`);
                  }}
                >
                  Enroll Now
                </button>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={sendWhatsAppMessage}
                >
                  WhatsApp
                </button>
              </div>
              <div className="absolute inset-0 bg-yellow-400 dark:hover:bg-slate-400 dark:hover:rounded opacity-0 hover:opacity-10 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
