import React from "react";
import basicTopics from "../../config/basicsTopics";
import bgColorTopics from "../../helper/bgColorTopics";
import renderAdvancedTopics from "../../helper/renderTopics";
const Courses = () => {
  return (
    <>
      <div className="bg-slate-200 py-12">
        <div className="flex justify-center container dark:bg-black ">
          {/* Basic English Course Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden container">
            <h1 className="text-center font-bold text-4xl lg:my-5">
              Basic English Course
            </h1>
            <div className="p-8">
              <div>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Cirriculam Details
                </div>
                <h2 className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  Spoken English Course
                </h2>
                <p className="mt-2 text-gray-500">
                  Duration: 60 days (or 2 months)
                  <br />
                  Schedule: Monday to Saturday
                  <br />
                  Learning Period: 2 hours daily
                  <br />
                  Fees: $4000
                </p>
              </div>

              <div className="mt-4">
                <p className="font-semibold lg:my-3">Topics Included:</p>
                <div className="grid grid-cols-3 gap-4 text-gray-500">
                  {basicTopics.map((topic, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg text-center font-medium ${
                        bgColorTopics[index % bgColorTopics.length]
                      }`}
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Courses;
