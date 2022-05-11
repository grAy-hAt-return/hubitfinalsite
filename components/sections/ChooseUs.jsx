import React from "react";
import { BsFillLaptopFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { HiSupport } from "react-icons/hi";
import ChooseCard from "../cards/ChooseCard";

function ChooseUs() {
  // data for why to choose us
  const data = [
    {
      icon: <BsFillLaptopFill className="h-10 w-10" />,
      title: "Well design Lab",
      desc: " Equipped with world class equipments and facilities based on the latest technology pertaining to different sectors.",
    },

    {
      icon: <FaChalkboardTeacher className="h-10 w-10" />,
      title: "Experience Instructor",
      desc: "We have a team of well experience instructor with expertise on each field they instruct students.",
    },

    {
      icon: <ImBook className="h-10 w-10" />,
      title: "Access To Library",
      desc: "We have a online library to our enrolled students",
    },

    {
      icon: <HiSupport className="h-10 w-10" />,
      title: "LifeTime Support",
      desc: "Students are not only till training period, We provide support to our student after the completion of training period also. ",
    },
  ];

  return (

    <div className="container mx-auto bg-gray-50 px-4 lg:px-8 ">
      <div className="text-center py-24">
        <p className="text-4xl font-bold">
          Why to
          <span className="text-primary-200"> Choose Us.</span>
        </p>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pb-16">
        {/* mapping Section */}
        {data.map((item, i) => {
          return (
            <ChooseCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChooseUs;
