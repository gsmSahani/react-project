import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [counterOne, setCounterOne] = useState(0);
  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  return (
    <>
      <Child />
      <button
        onClick={incrementOne}
        className="bg-green-300 h-32 content-center my-32 p-2 hover:bg-slate-300 transition duration-300 ease-in-out transform hover:scale-105"
      >
        CounterOne - {counterOne}
      </button>
    </>
  );
};

export default Parent;
