import React from "react";
import Image from "next/image";
function History() {
  const data = [
    {
      timeline: "01",
      title: "create a team",
      year: "2022",
      desc: "create a team for any projects,give it a name, and invite your team members",
    },
    {
      timeline: "02",
      title: "add inbox",
      year: "2024",

      desc: "create a team for any projects,give it a name, and invite your team members",
    },
    {
      timeline: "03",
      title: "create tags",
      year: "2025",

      desc: "create a team for any projects,give it a name, and invite your team members",
    },
    {
      timeline: "04",
      title: "share the workload",
      year: "2028-2025",

      desc: "create a team for any projects,give it a name, and invite your team members",
    },
  ];
  return (
    <div className="bg-gray-100  h-full">
      <div className="flex flex-col  space-y-5  py-10">
        <div className="font-semibold uppercase text-lg text-center">
          hubit history
        </div>
        <div className="text-center w-10/12 md:w-8/12 lg:w-4/12 mx-auto ">
          Octa gives you the confidence yhat everything's organized and
          accounted for,so you can make progress on the things that are
          important to you
        </div>
      </div>
      <div className="p-2 grid lg:grid-cols-2">
        <div>
          {data.map((val, i) => {
            return (
              <div
                key={i}
                className="flex items-start gap-3 hover:bg-white transation-all duration-200 rounded-md w-full md:w-fit md:px-10 px-5 hover:shadow-gray-400 hover:shadow-lg  p-3  my-5 md:m-5"
              >
                <div className="font-semibold"> {val.timeline}</div>
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center  justify-between md:justify-evenly">
                    <div className="font-semibold text-sm capitalize  md:w-52 ">
                      {" "}
                      {val.title}
                    </div>
                    <div className=" md:w-56 w-14 border-b border-gray-400 "></div>
                    <div className="text-gray-400  text-xs ">{val.year}</div>
                  </div>
                  <div className="text-xs md:text:sm"> {val.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-start-1 row-start-1 lg:col-start-2">
          <Image
            src={"/immage.jpg"}
            layout="responsive"
            height={40}
            width={80}
          />
        </div>
      </div>
      <div className="pb-8 m-5">
        <button className="bg-primary-100 p-2 md:p-3 transition-all duration-300 ease-in-out hover:opacity-80 hover:scale-105 text-white capitalize   rounded-md  ">
          explore more
        </button>
      </div>
    </div>
  );
}

export default History;
