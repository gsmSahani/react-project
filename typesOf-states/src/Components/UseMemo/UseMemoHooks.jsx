import React, { useMemo, useState } from "react";

const UseMemoHooks = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    if (counterOne > 0) {
      setCounterTwo(counterTwo + 1);
    }
  };

  const isEven = useMemo(() => {
    console.warn("Calculating...");
    let i = 0;
    while (i < 200000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div className="flex bg-yellow-300 justify-center min-h-screen space-x-12 p-2 items-center">
      <button
        onClick={incrementOne}
        className="bg-green-300 h-32 content-center my-32 p-2 hover:bg-slate-300 transition duration-300 ease-in-out transform hover:scale-105"
      >
        CounterOne - {counterOne}
      </button>
      <span className="font-bold text-red-600">
        {isEven ? "Even" : "Odd"}
      </span>
      <button
        onClick={incrementTwo}
        className="bg-purple-300 h-32 content-center my-32 p-2 hover:bg-slate-300 transition duration-300 ease-in-out transform hover:scale-105"
      >
        CounterTwo - {counterTwo}
      </button>
    </div>
  );
};

export default UseMemoHooks;
