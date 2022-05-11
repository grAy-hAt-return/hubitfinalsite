import React from "react";

function ChooseCard({ icon, title, desc }) {
  return (
    <div className="bg-white">
      <div className="rounded-md p-4 shadow-md transition-all duration-500 hover:scale-105 hover:shadow-xl  h-full">
        <div className="p-2">
          <p className="rounded-full border-slate-900">{icon}</p>
          <p className="font-bold my-4 text-gray-800">{title}</p>
          <p className="text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseCard;
