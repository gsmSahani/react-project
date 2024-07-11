import React, { useState } from "react";
import LightOn from "/assets/lightOn.jpg";
import LightOff from "/assets/lightOff.jpg";
const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const handleChange = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <div className="h-96 w-96 mx-auto py-20">
          <img
            className="h-96 w-96"
            src={isToggled ? LightOn : LightOff}
            alt="LightBulb"
          />
        </div>
        <div className="text-center my-32">
          <button
            className="text-black font-bold hover:bg-red-600 animate-pulse bg-slate-200  w-32 rounded-lg p-2 py-2"
            onClick={handleChange}
          >
            {isToggled ? "Turn On" : "Turn Off"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Toggle;
