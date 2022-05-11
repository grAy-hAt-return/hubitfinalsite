import React from "react";
import PlacementPartnerCard from "../components/cards/PlacementPartnerCard";
import PageInfo from "../components/PageUtils/PageInfo";
import Layout from "../components/templates/Layout";

function Placement() {
  const data = [
    {
      img: "https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      company: "Craving Camp Pvt. Ltd",
      address: "Tillottama, Bhalwari",
    },
    {
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      company: "Innovative Tech Pvt. Ltd",
      address: "Shankharnagar Tillottama",
    },
    {
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      company: "Innovative Tech Pvt. Ltd",
      address: "Shankharnagar Tillottama",
    },
    {
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      company: "Innovative Tech Pvt. Ltd",
      address: "Shankharnagar Tillottama",
    },
    {
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      company: "Innovative Tech Pvt. Ltd",
      address: "Shankharnagar Tillottama",
    },
  ];
  return (
    <Layout>
      <PageInfo page="Placement" prev="Home" />

      <div className="bg-gray-100">
        <section className="text-center  px-8 lg:px-0 lg:w-1/2 mx-auto py-24">
          <h1 className="font-semibold text-4xl">Our Supporting Partners</h1>
          <p className="my-8">
            Professional IT Training leads to the qualified and aspiring
            candidates getting internship and job opportunities with decent
            salary and facilities. Broadway Infosys aims to bridge the gap
            between the industry and academia.
          </p>
        </section>

        <section className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {data.map((item, i) => (
              <PlacementPartnerCard
                key={i}
                img={item.img}
                title={item.company}
                address={item.address}
              />
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Placement;
