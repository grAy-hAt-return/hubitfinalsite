import React, { useState } from "react";
import PageInfo from "../components/PageUtils/PageInfo";
import Layout from "../components/templates/Layout";
import image1 from "../public/immage.jpg";
import image2 from "../public/logo.png";
import image3 from "../public/japan.jpg";
import image4 from "../public/img1.jpg";

import Image from "next/image";
function Gallery() {
  const [show, setShow] = useState(false);
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1650434910011-aa6be391e766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1650397306410-32183656e4c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1643257429094-e80201e97c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1650424362905-fba02e04dc19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1643257429094-e80201e97c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1650434910011-aa6be391e766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 15,
      image:
        "https://images.unsplash.com/photo-1643257429094-e80201e97c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    ,
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1650434910011-aa6be391e766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 24,
      image:
        "https://images.unsplash.com/photo-1650397306410-32183656e4c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 25,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1643257429094-e80201e97c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1650424362905-fba02e04dc19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1643257429094-e80201e97c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 10,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 11,
      image:
        "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 12,
      image:
        "https://images.unsplash.com/photo-1650434910011-aa6be391e766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1643257429094-e80201e97c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      id: 14,
      image:
        "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 13,
      image:
        "https://images.unsplash.com/photo-1643257429094-e80201e97c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ];

  return (
    <Layout>
      <PageInfo page="Gallery" prev="Home" />
      <section className="text-center mt-16">
        <h1 className="text-primary-200 font-semibold text-3xl">
          HUBIT GALLERY
        </h1>
        <p className="text-gray-700 py-4">
          All the event gallery of HUBIT PVT. LTD.
        </p>
      </section>
      <section className="flex flex-col items-center my-8">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <div className="border-b-2 font-semibold border-primary-200 p-2 cursor-pointer">
            Category one
          </div>

          <div className="font-semibold p-2 text-gray-500 cursor-pointer transition-all hover:border-b-2 hover:border-gray-500">
            Category two
          </div>

          <div className="font-semibold p-2 text-gray-500 cursor-pointer transition-all hover:border-b-2 hover:border-gray-500">
            Category three
          </div>
        </div>
      </section>
      <div className=" gallery w-11/12 mx-auto ">
        {data.map((val, i) => (
          <div
            key={i}
            //         className={`relative
            // w-80 h-96 bg-red-300 flex items-start justify-start

            //           `}
            className="relative pics"
          >
            <img
              src={val.image}
              placeholder="blur"
              srcSet={`${val.image} 2x, ${val.image} 600vw`}
              blurDataURL={val.image}
              height={"100%"}
              width={"100%"}
              objectPosition={"center"}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Gallery;
