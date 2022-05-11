import React from "react";
import Image from "next/image";

function PlacementPartnerCard({ img, title, address }) {
  return (
    <div className="transition-all duration-300 hover:scale-105">
      <div className="relative w-16 border-2 border-primary-200 rounded-full overflow-hidden ml-3 shadow-md">
        <Image
          src={img}
          alt={title}
          width={500}
          height={500}
          objectFit="cover"
          layout="responsive"
        />
      </div>
      <div className="bg-white rounded-xl shadow-md transition hover:shadow-xl p-4 -mt-6">
        <h1 className="text-gray-700 font-semibold capitalize mt-10 text-xl">
          {title}
        </h1>
        <p className="text-gray-700 mt-2 lg:text-sm leading-relaxed">
          {address}
        </p>
      </div>
    </div>
  );
}

export default PlacementPartnerCard;
