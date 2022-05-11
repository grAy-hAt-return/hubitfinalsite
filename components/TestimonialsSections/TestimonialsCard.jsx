import React from "react";
import Image from "next/image";

function TestimonialsCard({ icon, description, image, name, post }) {
  return (
    <div className=" space-y-5 md:w-11/12 lg:w-10/12 mx-auto ">
      <div className="flex bg-white    h-full rounded-sm p-8 lg:p-10   gap-2 lg:gap-4">
        <div className="my-1 lg:my-2"> {icon}</div>
        <div className=" leading-7 lg:leading-8"> {description}</div>
      </div>
      <div className="flex items-center  gap-5">
        <div className="w-8 lg:w-10">
          <Image
            height={70}
            width={70}
            src={image}
            objectFit="cover"
            layout="responsive"
            className=" rounded-full"
          />
        </div>
        <div className="flex flex-col items-center justify-center capitalize">
          <div className="font-bold text-sm lg:text-base"> {name}</div>
          <div className="text-gray-500 text-xs lg:text-sm"> {post}</div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
