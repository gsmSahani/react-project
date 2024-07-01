import React from "react";
import advanceTopics from "../config/advanceTopics";
import basicsTopics from "../config/basicsTopics";
import bgColorTopics from "./bgColorTopics";

const renderAdvanceTopics = () => {
  // Find common topics between basic and advanced courses
  const commonTopics = basicsTopics.filter((topic) =>
    advanceTopics.includes(topic)
  );

  // Filter out unique topics for advanced course
  const uniqueTopics = advanceTopics.filter(
    (topic) => !basicsTopics.includes(topic)
  );

  // Prepare message for common topics
  const commonTopicsMessage =
    commonTopics.length > 0 ? "All basic topics covered here" : "";

  return {
    commonTopicsMessage,
    uniqueTopics,
  };
};

export default renderAdvanceTopics;
