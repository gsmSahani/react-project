import React, { useState } from "react";

const Counter3 = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div>
        <h1>{counter}</h1>
        <button onClick={increment}>Click Me+</button>
        <button onClick={decrement}>Click Me-</button>
      </div>
    </>
  );
};

export default Counter3;
