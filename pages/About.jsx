import React from "react";
import PageInfo from "../components/PageUtils/PageInfo";
import Layout from "../components/templates/Layout";
import Image from "next/image";
import AboutImg from "../components/images/about.jpg";
import MissionVisionTabs from "../Tabs/MissionVisionTabs";
import History from "../components/HubItHistoryPage/History";
import Provide from "../components/sections/Provide";
function About() {
  return (
    <Layout>
      <PageInfo page="About Us" prev="Home" />
      <div className="container mx-auto px-4 lg:px-10 my-16">
        <div className="grid grid-cols-2 gap-10">
          {/* left section  */}
          <div className="lg:mt-8">
            <hr className="my-3 w-24 border-2" />
            <h1 className="text-4xl mt-10 my-8 font-bold">About Us</h1>
            <p className="my-2 text-lg leading-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              veniam, nobis provident doloremque ad perferendis. Voluptatem
              similique error corrupti illo ratione, provident sunt quia quae
              reprehenderit placeat iure, aspernatur minus! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tenetur temporibus
              veritatis autem! Error iste tenetur consectetur pariatur cumque ab
              officia aut non neque nemo eius quisquam omnis libero, cupiditate
              deleniti.
            </p>
          </div>

          {/* right grid sectoin  */}
          <div className="relative w-full lg:px-10">
            <Image
              //   loader={myLoader}
              src={AboutImg}
              alt="Picture of the author"
              width={900}
              height={900}
              objectFit="cover"
              layout="responsive"
            />
          </div>
        </div>

      </div>
      <div className="py-24 bg-gray-50">
        <MissionVisionTabs />
      </div>
      <div className="py-16">
        <Provide />
      </div>
      <History />
    </Layout>
  );
}

export default About;
