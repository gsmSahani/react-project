import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import renderAdvancedTopics from "../../helper/renderTopics";
import handleEnrollNow from "../../helper/handleEnrollNow";

const AdvanceOCursejsx = () => {
  return (
    <>
      {/* Advanced English Course Card */}
      <div className="bg-slate-200 py-12 dark:bg-gray-600">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {/* advance english course card */}
            <div className="bg-white dark:bg-black dark:text-white rounded-xl shadow-md overflow-hidden w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3">
              <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl my-5">
                Advance English Course
              </h1>
              <div className="p-6 md:p-8">
                <div>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Curriculum Details
                  </div>
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">
                    Advanced English Course
                  </h2>
                  <p className="mt-2 text-gray-500">
                    Duration: 105 days
                    <br />
                    Schedule: Monday to Saturday
                    <br />
                    Learning Period: 2 hours daily
                    <br />
                    Fees: ₹8000
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold">Topics Included:</p>
                  <div className="">{renderAdvancedTopics()}</div>
                </div>
                <div className="mt-8 flex justify-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
                    onClick={handleEnrollNow}
                  >
                    <FaUserGraduate className="mr-2" />
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceOCursejsx;
