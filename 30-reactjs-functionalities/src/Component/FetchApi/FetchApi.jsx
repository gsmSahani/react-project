import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div>
        {data ? (
          <div>
            <div>Title{data.title}</div>
            <div>Body{data.body}</div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default FetchApi;
