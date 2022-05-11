import React from "react";
import Image from "next/image";
function CourseCard({ image, duration, title }) {
  return (
    <div className="space-y-4 m-3 ">
      <div className="w-fit">
        <Image
          height={500}
          width={800}
          src={image}
          placeholder="blur"
          blurDataURL={image}
          quality={100}
          className="transition duration-500 hover:scale-105 rounded-sm cursor-pointer"
        />
      </div>
      <div className="space-y-2">
        <div className="font-semibold capitalize ">{title}</div>
        <div className="flex gap-1">
          <span className="text-gray-500">Duration : </span>{" "}
          <div className="font-semibold pb-1"> {duration}</div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
