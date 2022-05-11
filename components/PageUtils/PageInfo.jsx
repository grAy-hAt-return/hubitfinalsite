import React from "react";
import { BiChevronsRight } from "react-icons/bi";

function PageInfo({ page, prev }) {
  return (
    <div className="bg-primary-100">
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(145,5,115,0.7987570028011204) 0%, rgba(160,4,126,0.6474964985994398) 31%, rgba(190,2,149,0.5494572829131652) 64%, rgba(214,1,168,0.40379901960784315) 100%)",
        }}
        className="py-24"
      >
        <h1 className="text-center text-3xl lg:text-5xl font-bold text-white capitalize">
          {page}
        </h1>
        <div className="my-8 flex items-center flex-col text-white">
          <div className="flex items-center space-x-2">
            <p className="capitalize">{prev}</p>
            <BiChevronsRight />
            <p className="capitalize">{page}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageInfo;
