import React from "react";
import { MdSimCardDownload, MdDownloading } from "react-icons/md";

function NotesCard({
  note_title,
  category,
  teacher,
  download_count,
  download_link,
}) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 py-6">
      <div className="flex items-center justify-between relative">
        <h2 className="font-semibold">{category}</h2>
        <p className="flex items-center space-x-1 text-gray-500">
          <span>{download_count}</span>
          <MdSimCardDownload className="-mt-1" />
        </p>
        <div className="absolute h-12 w-12 bg-blue-600 right-0 top-14 rounded-lg flex flex-col items-center justify-center transition hover:shadow-md hover:opacity-80 cursor-pointer">
          <MdDownloading className="text-white text-3xl " />
        </div>
      </div>
      <h1 className="font-semibold text-2xl my-4 w-3/4">{note_title}</h1>

      <p className="text-gray-500">{teacher}</p>
    </div>
  );
}

export default NotesCard;
