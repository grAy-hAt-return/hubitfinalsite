import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../components/images/logo.png";
import navItem from "./navitems.json";
import { BiMessageRoundedDetail } from "react-icons/bi";
import Inputs from "../UI/Inputs/Inputs";
import { ImCross } from "react-icons/im";

function Nav() {
  const [showForm, setShowForm] = useState(false);
  const form = [
    { usename: "name", type: "text", label: "name" },
    { usename: "email", type: "email", label: "email" },
    { usename: "phone", type: "number", label: "phone" },
    { usename: "course", type: "select", label: "choose course" },

    {
      usename: "message",
      type: "textarea",
      label: "message",
      placeholder: "Tell us about you",
    },
    { usename: "other_course", type: "text", label: "if other course" },
  ];

  let mod;
  if (showForm) {
    mod = (
      <div className="bg-white gris grid-cols-12  rounded-lg lg:w-6/12 w-9/12 px-5 py-5 lg:py-14 shadow-md right-3 top-24  absolute shadow-gray-400">
        <div
          className="w-full flex justify-end"
          onClick={() => setShowForm(false)}
        >
          <ImCross className=" w-fit text-primary-200 relative" />
        </div>
        <form>
          <div className=" grid  sm:grid-cols-2">
            {form.map((val, i) => {
              return (
                <div
                  key={i}
                  className="m-3  capitalize bg-red-5 text-gray-500 font-semibold"
                >
                  <div className="flex  my-1  ">
                    {" "}
                    <label>{val.label}</label>
                    <div className="text-red-500">*</div>
                  </div>
                  <Inputs
                    type={val.type}
                    placeholder={val.placeholder}
                    usename={val.usename}
                    // usename=name in input field and used for validation with register and errors in react hooks form
                  />
                </div>
              );
            })}
          </div>
          <div className=" px-3  lg:pt-10  pt-4">
            <input
              type="submit"
              value="SUBMIT"
              className="bg-primary-200 text-white transition-all hover:scale-105 duration-200 hover:opacity-80   px-6 py-3 rounded-md"
            />
          </div>
        </form>
      </div>
    );
  }
  const handleEnquiryForm = () => {
    setShowForm(true);
    console.log("open the form fixed postioned just below it ");
  };
  return (
    <nav className="flex justify-between px-4 lg:px-8 bg-gray-50 shadow-xl sticky top-0 z-10">
      <div className="w-20 h-20 relative">
        <Image
          src={logo}
          blurDataURL={logo}
          placeholder="blur"
          alt="Hub IT pvt. ltd."
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          sizes="100vw"
          quality={100}
        />
      </div>
      {/* primary nav items  */}
      <div className="flex items-center">
        {navItem.map((item, i) => (
          <div key={i}>
            {item["nav-item"] === "Enquiry" ? (
              <div
                className=" mx-4 flex items-center reletive space-x-1 bg-primary-200 animate-pulse px-4 text-white rounded-full py-2 cursor-pointer"
                onClick={handleEnquiryForm}
              >
                <p className="">{item["nav-item"]}</p>
                <BiMessageRoundedDetail />
              </div>
            ) : (
              <Link href={item.link} passHref>
                <p className="capitalize cursor-pointer transition text-gray-500 hover:text-primary-200 font-medium px-2 xl:px-4 border-r ">
                  {item["nav-item"]}
                </p>
              </Link>
            )}
          </div>
        ))}
      </div>
      {mod}
    </nav>
  );
}

export default Nav;
