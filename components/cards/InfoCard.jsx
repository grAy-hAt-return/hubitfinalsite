import React from "react";

function InfoCard({ color, title, des, sub, icon }) {
  return (
    <div className="">
      <div
        className="flex items-center justify-between rounded-md p-4 text-white shadow-md h-full"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="p-2">
          <p className="text-3xl font-bold tracking-wider">{title}</p>
          <p className="text-xl space-y-2 ">{des}</p>
          <p className="space-y-4 mt-4 text-xs">{sub}</p>
        </div>

        <div>
          <p className=" font-bolder position-cover rounded-full bg-white p-2 text-center text-black ">
            {icon}
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
