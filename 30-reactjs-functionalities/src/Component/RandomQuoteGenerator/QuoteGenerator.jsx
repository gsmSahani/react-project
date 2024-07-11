import React, { useState } from "react";

const QuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState("");
  
  const fetchQuote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRandomQuote(`${data.quote} - ${data.author}`);
      })
      .catch((error) => {
        console.log("Error while fetching quote:", error);
      });
  };

  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center">
      <div className="bg-blue-600 w-96 h-96 rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">
          Random Quote Generator
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-4 my-8">
          {randomQuote && (
            <blockquote className="text-center">
              <p className="text-lg">{randomQuote}</p>
            </blockquote>
          )}
        </div>
       
        
        <div className="text-center">
          <button
            onClick={fetchQuote}
            className="bg-slate-900 text-white rounded-xl py-3 px-6 text-sm"
          >
            Get Quote
          </button>
      </div>
      </div>
    </div>
    
  );
};

export default QuoteGenerator;
