import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const initialValue = 0;
  // const increment = () => {
  //   setCounter(counter + 1);
  // };
  // const decrement = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };
  // const reset = () => {
  //   setCounter(initialValue);
  // };
  return (
    <>
      <div className="bg-yellow-400 min-h-screen ">
        <div className="py-16">
          <div className="h-3/4 w-96 bg-black text-white mx-auto shadow-2xl shadow-red-950">
            <div className="py-12">
              <div className="bg-slate-500 h-48 w-72 content-center mx-auto shadow-md shadow-orange-400">
                <h1 className="text-center font-bold text-3xl">{counter}</h1>
              </div>
              <div className="flex justify-center space-x-5">
                <button
                  className="bg-red-300 hover:bg-red-500 text-black font-bold rounded-full p-3 my-4"
                  onClick={() => {
                    if (counter > 0) {
                      setCounter(counter - 1);
                    }
                  }}
                >
                  Decrement(-)
                </button>
                <button
                  className="bg-green-300 hover:bg-green-500 text-black font-bold rounded-full p-3 my-4"
                  onClick={() => setCounter(counter + 1)}
                >
                  Increment(+)
                </button>
              </div>
              <div className="text-center">
                <button
                  className="bg-green-700 hover:bg-green-500 text-black font-bold rounded-full p-3 w-32"
                  onClick={() => setCounter(initialValue)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
