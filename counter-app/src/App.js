import { useState } from "react";
const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <div className="output-display">
          <h3>{counter}</h3>
        </div>
        <div className="btn">
          <button className="decrement" onClick={decrement}>
            -
          </button>
          <button className="increment" onClick={increment}>
            +
          </button>
        </div>
        <div className="reset">
          <button onClick={reload}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default App;
