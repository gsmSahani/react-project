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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-500">
          {/* Render common topics message */}
          {commonTopics.length > 0 && (
            <div className="p-3 rounded-lg text-center font-medium bg-green-700 text-black">
              All basic topics covered here
            </div>
          )}

          {/* Render unique topics */}
          {uniqueTopics.length > 0 && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default renderAdvancedTopics;
