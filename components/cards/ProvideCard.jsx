import React from "react";

function ProvideCard({ icon, title, desc }) {
  return (
    <div className="w-full md:w-80 rounded-md border shadow-md h-full p-4 transition hover:shadow-lg mt-6">
      <div>
        <p className="my-4 transition duration-500 hover:text-primary-200">
          {icon}
        </p>
        <p className="text-xl font-bold text-gray-700 w-fit capitalize">
          {title}
        </p>
        {/* <p className="my-4">{desc}</p> */}
      </div>
    </div>
  );
}

export default ProvideCard;
