import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);
  return (
    <>
      <div className="bg-yellow-300 min-h-screen">
        <div className="py-16">
          <div className="flex justify-center h-52 w-52 mx-auto  bg-green-600 rounded-full shadow-lg shadow-slate-700">
            <h1 className="font-bold content-center">Timer:{time}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
