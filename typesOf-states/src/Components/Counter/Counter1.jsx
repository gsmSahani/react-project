import React, { useEffect } from "react";

function Counter1({ number }) {
  useEffect(() => {
    console.log("Functional Component: mounting");
  }, [number]);
  return (
    <>
      <h1>{number}</h1>
    </>
  );
}
export default Counter1;
