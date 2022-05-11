import React from "react";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoGitNetworkSharp } from "react-icons/io5";
import { MdAccountBalance } from "react-icons/md";
import ProvideCard from "../cards/ProvideCard";
import { HiCode } from "react-icons/hi";
import { SiWebmoney } from "react-icons/si";
function Provide() {
  // data for service section
  const data = [
    {
      icon: <HiOutlinePhotograph className="h-10 w-10" />,
      title: "Graphics designing",
      description:
        "We offer the best graphics  courses with the experienced  instructors with  in the town.",
    },
    {
      icon: <SiWebmoney className="h-10 w-10" />,
      title: "web Development",
      description:
        "we got some good experienced developers in the company,who provides solutions of every business.",
    },
    {
      icon: <IoGitNetworkSharp className="h-10 w-10" />,
      title: "Hardware & Networking",
      description:
        "we got some skillful manpower that can  take care  of any damage parts & networking expertise with decades of experience. ",
    },
    {
      icon: <MdAccountBalance className="h-10 w-10" />,
      title: "Accounting Package",
      description:
        "we got some skillful manpower that can  take care  of any damage parts & networking expertise with decades of experience. ",
    },

    {
      icon: <HiCode className="h-10 w-10" />,
      title: "programming languages",
      description: "we got programmers that makes codding easy.",
    },
  ];
  return (
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center m-6 p-4 mt-20 gap-6">
        <p className="text-4xl font-bold ">We Provide Best</p>
        <p className="text-md text-gray-500  mx-auto my-4 lg:w-3/4">
          Take high quality courses Physically as well as online.We offer Some
          of the best courses in the town and develop your skills.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-24 flex justify-center flex-wrap space-x-6">
          {data.map((item, i) => (
            <ProvideCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Provide;
