import { GiSlap } from "react-icons/gi";
import InfoCard from "../cards/InfoCard";
import { MdPersonSearch } from "react-icons/md";
import React from "react";
import Responsive from "../../components/dev/Responsive";

function InfoCardSection() {
  const data = [
    {
      title: "800",
      description: "Corporate hiring partners across India",
      color: "#ffb921",
      icon: <MdPersonSearch className="h-12 w-12" />,
    },
    {
      title: "RS 10 LPA",
      description: "minimum salary offered to learners*",
      color: "#3f62d4",
      subtitle: "T&C Apply.Refer to Program Page",
      icon: <MdPersonSearch className="h-12 w-12" />,
    },
    {
      title: "3.8+ Crore",
      description: "Learners worldwide",
      color: "#259c4d",
      icon: <GiSlap className="h-12 w-12" />,
    },
    {
      title: "30+",
      description: "present across 30+ countries",
      color: "#fc0377",
      icon: <GiSlap className="h-12 w-12" />,
    },
  ];
  return (
    <div className="container mx-auto px-4 2xl:px-24 my-24">
      {/* <Responsive /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {/* props section */}
        {data.map((item, i) => (
          <InfoCard
            key={i}
            title={item.title}
            des={item.description}
            color={item.color}
            sub={item.subtitle}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default InfoCardSection;
