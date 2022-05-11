import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import React, { useRef, useState } from "react";

function Collapsable({ method_second, getsub, method, data, body }) {
  const [show, setShow] = useState(false);
  const [ID, setID] = useState(0);

  const ParentRef = useRef();
  if (ParentRef.current) {
    console.log(ParentRef.current.scrollHeight);
    // ParentRef.current.srollHeight();
  }

  const setId = (id) => {
    // setLesson(!lesson);
    if (id === ID) {
      setID(0);
    } else {
      setID(id);
    }
  };
  console.log(body);
  return (
    <div>
      {data.map((val, i) => (
        <div className="collapsible"  key={i}>
          <div
            className={`toggle 
            border mt-5  ${
              ID === val.id || (ID===0 && val.id ===1)
                ? "bg-primary text-white     "
                : " transition-all duration-75 bg-gray-100 text-black"
            } cursor-pointer flex  flex-col   border-gray-300
            `}
            onClick={() => {
              //   setShow(!show);
              getsub ? getsub(val.id) : null;
              setId(val.id);
            }}
          >
            <div
              className={`flex  justify-between p-3 `}
              onClick={() => setId(val.id)}
            >
              <div className="flex ">
                <div className="text-sm  capitalize  font-openSansFive">
                  {" "}
                  {method}
                </div>
                <div className="text-sm   mx-1 font-openSansFive">{}</div>
                <div className="capitalize font-openSansFive text-sm ">
                  {" "}
                  {val.title}
                </div>
              </div>
              <div>
                {val.id === ID ? (
                  <MdOutlineKeyboardArrowUp
                    className="w-7 h-7 transition-all   duration-700 delay-700 ease-in-out   
                    "
                  />
                ) : (
                  <MdOutlineKeyboardArrowDown className="w-7 h-7 " />
                )}
              </div>
            </div>
          </div>
          <div
            className={`content-parent`}
            style={
              ID === val.id || (ID===0 && val.id ===1)
                ? {
                    height:ParentRef.current? 
                    ParentRef.current.scrollHeight + "px":'fit-content',
                  }
                : {
                    height: "0px",
                  }
            }
            ref={ParentRef}
          >
            <div className="content ">
              {body.map((val, i) => (
                <div
                  key={i}
                  className={`   
                   ${
                     show
                       ? "bg-gray-50 border    "
                       : "bg-gray-50  border border-gray-100 "
                   }   cursor-pointer flex py-4 text-black   `}
                  //   onClick={() => setShow(true)}
                >
                  <div className="  text-sm capitalize  font-openSansFour">
                    {method_second}
                  </div>
                  <div className="  text-sm  mx-1 font-openSansFour">
                    {val.id ? i + 1 : ""}
                  </div>
                  <div
                    className="capitalize  leading-6
                  text-sm md:text-base font-openSansThree  "
                  >
                    {val.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Collapsable;
