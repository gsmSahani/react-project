import React, { useState } from "react";

const BackgroundChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");
  const handleColorChange = () => {
    const newColor = backgroundColor === "red" ? "blue" : "purple";
    setBackgroundColor(newColor);
  };
  return (
    <>
      <div
        onClick={handleColorChange}
        style={{ backgroundColor, height: "400px", width: "350px" }}
      >
        click me to change the color
      </div>
    </>
  );
};

export default BackgroundChanger;
