import { useState } from "react";

const App = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  // logic for calculatioon
  const bmiCalculator = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter height and weight");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are underweight work on yourself");
        setColor("blue");
      } else if (bmi >= 18.5 && bmi <= 25) {
        setMessage("You are healthy maintain this consistency");
        setColor("green");
      } else {
        setMessage("You are obese");
        setColor("red");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        <form onSubmit={bmiCalculator} className="bmi-form">
          <h1>BMI Calculator</h1>
          <div className="input">
            <div className="weight">
              <label for="Weight">Weight: (lbs) </label>
              <input
                type="text"
                placeholder="Enter Your Weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="height">
              <label for="Height">Height: (Inch) </label>
              <input
                type="text"
                placeholder="Enter Your Height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="op-display">
              <h3>Your BMI is: {bmi}</h3>
              <p style={{ color }}>{message}</p>
            </div>
            <div className="button">
              <button type="submit" className="btn">
                Calculate
              </button>
              <button type="submit" className="btn reset-btn" onClick={reload}>
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default App;
