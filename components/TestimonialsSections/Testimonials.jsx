import React, { useRef, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import image1 from "../../components/images/immage.jpg";
import TestimonialsCard from "./TestimonialsCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import "slick-carousel/slick/slick-theme.css";
function Testimonials() {
  const Data = [
    {
      icon: (
        <FaQuoteRight className="text-blue-500 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      ),
      description:
        "We've cooked up some examples of how you could use the “quote-left” icon in your projects, whether they're apps, interfaces, or print designs.",
      image: image1,
      name: "john doe",
      post: "manager",
    },
    {
      icon: (
        <FaQuoteRight className="text-blue-500  w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      ),
      description:
        "We've cooked up some examples of how you could use the “quote-left” icon in your projects, whether they're apps, interfaces, or print designs.",
      image: image1,
      name: "john doe",
      post: "manager",
    },
    {
      icon: (
        <FaQuoteRight className="text-blue-500  w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4" />
      ),
      description:
        "We've cooked up some examples of how you could use the “quote-left” icon in your projects, whether they're apps, interfaces, or print designs.",
      image: image1,
      name: "john doe",
      post: "manager",
    },
  ];
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  const sliderSetting = {
    arrows: false,
    dots: false,
    dotsClass: "slick-dots line-indicator",
    slidesToShow: Data.length - 1,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-gray-100 w-full my-5 container mx-auto px-4 lg:px-8 py-16 rounded-lg">
        <div className="text-center">
          <h2 className="text-primary text-2xl font-semibold">Testimonials</h2>
          <h1 className="text-3xl">What does Customers Say About Us ?</h1>
        </div>
        <div className="flex items-center justify-between mt-16 mb-12 mx-8">
          <div className="flex items-center space-x-4 xl:space-x-">
            <p className="text-primary-200 font-bold cursor-pointer">Regular</p>
            <p className="transition hover:text-primary-100 cursor-pointer">
              Facebook
            </p>
            <p className="transition hover:text-primary-100 cursor-pointer">
              Google
            </p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4 mr-4">
            <div className="h-10 w-10 rounded-full bg-primary-200 text-white cursor-pointer transition opacity-60 hover:opacity-100 shoadow-lg text-center flex flex-col items-center justify-center">
              <FaAngleLeft
                className="mx-auto text-xl"
                onClick={() => sliderRef.current.slickPrev()}
              />
            </div>
            <div className="h-10 w-10 rounded-full  bg-primary-200 text-white cursor-pointer transition opacity-60 hover:opacity-100 shoadow-lg text-center flex flex-col items-center justify-center">
              <FaAngleRight
                className="mx-auto text-xl"
                onClick={() => sliderRef.current.slickNext()}
              />
            </div>
          </div>
        </div>
        <div className="my-8">
          <Slider {...sliderSetting} ref={sliderRef}>
            {Data.map((val, i) => {
              return (
                <div key={i}>
                  <TestimonialsCard
                    icon={val.icon}
                    description={val.description}
                    image={val.image}
                    name={val.name}
                    post={val.post}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
