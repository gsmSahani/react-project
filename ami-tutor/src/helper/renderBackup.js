import React from "react";
import advancedTopics from "../config/advanceTopics";
import basicTopics from "../config/basicsTopics";
import bgColorTopics from "./bgColorTopics";

const renderAdvancedTopics = () => {
  // Find common topics between basic and advanced courses
  const commonTopics = basicTopics.filter((topic) =>
    advancedTopics.includes(topic)
  );

  // Filter out unique topics for advanced course
  const uniqueTopics = advancedTopics.filter(
    (topic) => !basicTopics.includes(topic)
  );

  return (
    <>
      <div className="mt-4">
        {/* <p className="font-semibold my-3">Topics Included:</p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-500">
          {/* <div>{commonTopics}</div> */}
          {uniqueTopics.map((topic, index) => (
            <div
              key={topic}
              className={`p-3 rounded-lg text-center font-medium ${
                bgColorTopics[index % bgColorTopics.length]
              }`}
            >
              {topic}
             
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default renderAdvancedTopics;
