import React, { useState } from "react";
import Mission from "../components/Mission&VisionSection/ourMission.jsx";
import Vision from "../components/Mission&VisionSection/ourVision.jsx";
import Objectives from "../components/Mission&VisionSection/ourObjectives.jsx";
function MissionVisionTabs() {
  const [show, setShow] = useState("Mission");
  let tab;
  if (show === "Mission") {
    tab = <Mission />;
  }
  if (show === "Vision") {
    tab = <Vision />;
  }
  if (show === "Objectives") {
    tab = <Objectives />;
  }
  return (
    <div className="">
      <div className="flex justify-center p-4 space-x-6 ">
        <div
          onClick={() => setShow("Mission")}
          className={` ${
            show === "Mission"
              ? " text-primary-200 white border border-primary-200 px-6 py-2 rounded-full transition-all duration-500"
              : " bg-gray-100 border  px-6 py-2 rounded-full transition-all duration-500"
          }  `}
        >
          <button>Mission</button>
        </div>
        <div
          onClick={() => setShow("Vision")}
          className={` ${
            show === "Vision"
              ? " text-primary-200 white border border-primary-200 px-6 py-2 rounded-full transition-all duration-500"
              : " bg-gray-100 border  px-6 py-2 rounded-full transition-all duration-500"
          }  `}
        >
          <button>Vision</button>
        </div>
        <div
          onClick={() => setShow("Objectives")}
          className={` ${
            show === "Objectives"
              ? " text-primary-200 white border border-primary-200 px-6 py-2 rounded-full transition-all duration-500"
              : " bg-gray-100 border  px-6 py-2 rounded-full transition-all duration-500"
          }`}
        >
          <button>Objectives</button>
        </div>
      </div>
      <div className="w-10/12 mx-auto ">{tab}</div>
    </div>
  );
}

export default MissionVisionTabs;
