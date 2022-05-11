import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FiFacebook, FiPhoneCall } from "react-icons/fi";

import { FaWhatsappSquare } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdMarkEmailUnread } from "react-icons/md";
import React from "react";
import { SiIndeed } from "react-icons/si";

function FooterSection() {
  return (
    <div className="container mx-auto bg-black  ">
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  ">
        <div className="mx-4  ">
          <p className="text-white  xl:text-2xl lg:text-xl
           md:text-lg my-8 ">
            About Us
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
            assumenda totam quas numquam pariatur ad eos ipsam. Autem, alias
            asperiores quo iste qui odit distinctio natus rerum incidunt
            exercitationem aliquid? Excepturi in dicta officiis vitae quam
          </p>
          <div className="text-white flex my-4 ">
            <FiFacebook className="h-6 w-6 mx-2 
            hover:text-orange-800 cursor-pointer" />
            <AiOutlineTwitter className="h-6 mx-2 w-6   hover:text-orange-800 cursor-pointer" />
            <AiFillInstagram className="h-6 w-6 mx-2  
             hover:text-orange-800 cursor-pointer" />
            <FaWhatsappSquare className="h-6 w-6 mx-2   hover:text-orange-800 cursor-pointer" />
            <SiIndeed className="h-6 w-6 mx-2  hover:text-orange-800 cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-white  text-xl cursor-pointer hover:text-orange-800 my-8 ">
            Links
          </h3>
          <p className="text-white hover:text-orange-800 cursor-pointer">
            Home
          </p>
          <p className="text-white hover:text-orange-800 cursor-pointer">
            About us
          </p>
          <p className="text-white  hover:text-orange-800 cursor-pointer">
            Our Services
          </p>
          <p className="text-white  hover:text-orange-800 cursor-pointer">
            Latest Information
          </p>
          <p className="text-white  hover:text-orange-800 cursor-pointer">
            Request a quote
          </p>
          <p className="text-white  hover:text-orange-800 cursor-pointer">
            Get in touch
          </p>
        </div>
        <div>
          <h3 className="text-white  text-xl my-8 ">OUR LATEST ARTICLES</h3>
          <div>
            <p className="text-white">Start a Business Today</p>
            <p className="text-orange-900">Mars 28,2020</p>
          </div>
          <div>
            <p className="text-white">Productivity in life</p>
            <p className="text-orange-900">Mars 24,2020</p>
          </div>
          <div>
            <p className="text-white">Programming Languages</p>
            <p className="text-orange-900">Mars 20,2020</p>
          </div>
        </div>
        <div>
          <p className="text-white  text-xl my-8 ">OUR CONTACT</p>
          <div className="text-white flex hover:cursor-pointer items-center ">
            <FiPhoneCall className="h-6 w-6 mx-4  text-orange-900 hover:animate-bounce cursor-pointer" />
            <p className="text-xl">+977-9821424241</p>
          </div>
          <div className="text-white flex hover:cursor-pointer my-4 items-center ">
            <MdMarkEmailUnread className="h-6 w-6 mx-4 text-orange-900 hover:animate-bounce cursor-pointer" />
            <p className="text-xl">hubit@gmail.com</p>
          </div>
          <div className="text-white flex hover:cursor-pointer my-4 items-center ">
            <ImLocation className="h-6 w-6 mx-4 text-orange-900 hover:animate-bounce " />
            <p className="text-xl">
              Milanchowk,08-Butwal, ganga marg 30secs from main street
            </p>
          </div>
          <div className="flex hover:cursor-pointer m-6 p-4">
            <form action="">
              <inputut
                type="Email"
                name="Input Email"
                id="email"
                value={"your Email"}
                className="text-gray-400 text-center"
              />
              <input
                type="button"
                value={"send"}
                className="bg-orange-900 text-white items-center "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
