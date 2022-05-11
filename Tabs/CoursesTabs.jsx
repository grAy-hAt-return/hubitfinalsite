import React, { useState } from "react";

import TabFeaturedCourses from "./TabItems/TabFeaturedCourses";
import TabPopularCourses from "./TabItems/TabPopularCourses";
import TabUpcomingCourses from "./TabItems/TabUpcomingCourses";

function CoursesTabs() {
  const [showTabs, setShowTabs] = useState("tab_featured");
  let tab;
  if (showTabs === "tab_featured") {
    tab = <TabFeaturedCourses />;
  }
  if (showTabs === "tab_upcoming") {
    tab = <TabUpcomingCourses />;
  }
  if (showTabs === "tab_popular") {
    tab = <TabPopularCourses />;
  }

  return (
    <div className="flex flex-col text-xs md:text-sm lg:text-base  ">
      <div className="flex items-center space-x-6 my-8">
        <div
          className={`${
            showTabs === "tab_featured"
              ? "text-primary-200 text-xl py-3 border-b-2  border-primary-200 transition-all duration-500"
              : "text-gray-600 text-xl py-3 transition-all duration-500 hover:border-b-2 border-gray-200"
          }`}
        >
          <button onClick={() => setShowTabs("tab_featured")}>
            Featured Courses
          </button>
        </div>
        <div
          className={`${
            showTabs === "tab_upcoming"
              ? "text-primary-200 text-xl py-3 border-b-2  border-primary-200 transition-all duration-500"
              : "text-gray-600 text-xl py-3 transition-all duration-500 hover:border-b-2 border-gray-200"
          }`}
        >
          {" "}
          <button onClick={() => setShowTabs("tab_upcoming")}>
            Upcoming Courses
          </button>
        </div>
        <div
          className={`${
            showTabs === "tab_popular"
              ? "text-primary-200 text-xl py-3 border-b-2  border-primary-200 transition-all duration-500"
              : "text-gray-600 text-xl py-3 transition-all duration-500 hover:border-b-2 border-gray-200"
          }`}
        >
          {" "}
          <button onClick={() => setShowTabs("tab_popular")}>
            Popular Courses
          </button>
        </div>
      </div>
      {tab}
    </div>
  );
}

export default CoursesTabs;
