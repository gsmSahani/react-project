import React from "react";
import AdvanceOCursejsx from "./AdvanceCourse";
import BasicCourses from "./BasicCourses";

const Courses = () => {
  return (
    <>
    <div className="dark:bg-gray-600">
    <BasicCourses />
      <AdvanceOCursejsx />
      <div className="container dark:bg-gray-600 mx-auto px-4 py-8  dark:text-white">
        <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg mt-8 container">
          <h2 className="text-2xl font-bold mb-4">Perks of Joining</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Public speaking sessions every Saturday</li>
            <li>Debates on trending topics</li>
            <li>Essay writing competitions</li>
            <li>Spell bee competitions</li>
            <li>Academic vocabulary sessions</li>
            <li>Practice with amazing idioms and phrasal verbs</li>
          </ul>
        </div>
        <div className="bg-gray-100 dark:bg-black p-6 rounded-lg shadow-lg mt-8 container">
          <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
          <p className="mb-4">
            Please note that the timings and fees are subject to change based on
            the batch and season. For the most up-to-date information, please
            contact us directly.
          </p>
        </div>
      </div>
    </div>
    
      
    </>
  );
};

export default Courses;
