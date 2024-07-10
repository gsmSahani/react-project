import React, { useState } from "react";
const UseStateTutorial = () => {
  const [isSearch, setIsSearch] = useState("gautam");
  const onChange = (event) => {
    const newValue = event.target.value;
    setIsSearch(newValue);
  };
  return (
    <>
      <div className="text-center py-12">
        <h1>{isSearch}</h1>
        <input
          type="text"
          value={isSearch}
          onChange={onChange}
          placeholder="search"
          className="outline"
        />
      </div>
    </>
  );
};
export default UseStateTutorial;
