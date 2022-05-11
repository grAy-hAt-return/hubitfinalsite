import React from "react";
import PageInfo from "../components/PageUtils/PageInfo";
import Layout from "../components/templates/Layout";
import NotesCard from "../components/cards/NotesCard";
import Responsive from "../components/dev/Responsive";

function Library() {
  const data = [
    {
      note_title: "Learn Adobe Xd For Beginners",
      category: "Graphics Design",
      teacher: "Ashish Khanal",
      download_count: "12",
    },
    {
      note_title: "Learn React For Beginners",
      category: "Web Design",
      teacher: "Kisan Mahat",
      download_count: "25",
    },
    {
      note_title: "Learn Adobe Xd For Beginners",
      category: "Graphics Design",
      teacher: "Ashish Khanal",
      download_count: "12",
    },

    {
      note_title: "Learn Adobe Xd For Beginners",
      category: "Graphics Design",
      teacher: "Ashish Khanal",
      download_count: "12",
    },

    {
      note_title: "Learn Adobe Xd For Beginners",
      category: "Graphics Design",
      teacher: "Ashish Khanal",
      download_count: "12",
    },

    {
      note_title: "Learn Adobe Xd For Beginners",
      category: "Graphics Design",
      teacher: "Ashish Khanal",
      download_count: "12",
    },
  ];
  return (
    <Layout>
      <PageInfo page="Libray" prev="Home" />
      <section className="mt-24 text-center">
        <h1 className="font-bold text-primary-200 text-4xl">Our Library</h1>
        <p className="text-gray-600 py-4">
          Find 100+ notes from our diffrent courses online
        </p>
      </section>

      {/* <Responsive /> */}
      <section className="container mx-auto px-4 lg:px-8 mt-10 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12">
          {data.map((item, i) => (
            <NotesCard
              key={i}
              category={item.category}
              download_count={item.download_count}
              download_link=""
              note_title={item.note_title}
              teacher={item.teacher}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Library;
