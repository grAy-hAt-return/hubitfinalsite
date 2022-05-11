import React from "react";

function Responsive() {
  return (
    <div>
      <div className="bg-gray-500 p-2 sm:hidden">mobile</div>
      <div className="bg-red-500 p-2 md:hidden">SM</div>
      <div className="bg-blue-500 p-2 lg:hidden">MD</div>
      <div className="bg-green-500 p-2 xl:hidden">LG</div>
      <div className="bg-yellow-500 p-2 2xl:hidden">xl</div>
    </div>
  );
}

export default Responsive;
