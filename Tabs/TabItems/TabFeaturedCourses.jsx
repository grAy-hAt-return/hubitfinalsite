import React, { useState } from "react";
import CourseCard from "../../components/cards/courseCard/CourseCard";
import image1 from "../../components/images/react.png";
import Link from "next/link";

function TabFeaturedCourses() {
  const data = [
    { image: image1, title: "webDesigning1", duration: "1.5 months" },
    { image: image1, title: "webDesigning2", duration: "3.5 months" },
    { image: image1, title: "webDesigning3", duration: "4.5 months" },
    { image: image1, title: "webDesigning4", duration: "4.5 months" },
    { image: image1, title: "webDesigning4", duration: "5.5 months" },
  ];
  const filter = (options) => {
    return options;
    console.log(options);
  };
  return (
    <div className="">
      <div className="grid lg:grid-cols-4 gap-1 md:grid-cols-3">
        {filter(data).map((val, i) => {
          return (
            <CourseCard
              key={i}
              title={val.title}
              image={val.image}
              duration={val.duration}
            />
          );
        })}
      </div>
      <div className="text-center my-12">
        <Link href="/Courses">
          <a className="bg-primary-200 text-white px-5 py-3 rounded-full transition-all hover:bg-primary-300">
            View All Courses
          </a>
        </Link>
      </div>
    </div>
  );
}

export default TabFeaturedCourses;
