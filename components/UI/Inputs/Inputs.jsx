import React, { useRef } from "react";

function Inputs(props) {
  // const fileRef = useRef();
  // const showFile = () => {
  //   fileRef.current.click();
  // };
  // console.log(props.errors);
  let Inputed = 1;
  let className = `${
    props.errors
      ? "border border-red-500 rounded-md "
      : "  border-b   border-gray-400 "
  }
  
  ${
    props.id === "login"
      ? "text-gray-800 bg-transparent w-full focus:outline outline-none text-sm flex-1 ring-0"
      : " h-10 px-2 w-full  py-1 bg-transparent   text-sm md:text-base rounded-base resize-none   outline-none"
    //  focus:border-b-2 focus:border-b-blue-400
    //  "
  }
 ${props.type === "textarea" ? " flex " : null} 
  ${props.type === "select" ? " text-gray-400" : null} 
   ${props.type === "file" ? "  text-gray-400 text-sm" : null} `;

  console.log(props);
  switch (props.type) {
    case "text":
      Inputed = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.usename}
          // {...props.reset}
          {...props.register}
          className={className}
          defaultValue={props.value}
        />
      );
      break;
    case "number":
      Inputed = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.usename}
          // {...props.reset}
          {...props.register}
          className={className}
          defaultValue={props.value}
        />
      );
      break;
    case "date":
      Inputed = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.usename}
          {...props.register}
          className={className}
          defaultValue={props.value}
        />
      );
      break;
    case "email":
      Inputed = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.usename}
          {...props.register}
          className={className}
          defaultValue={props.value}
        />
      );
      break;
    case "password":
      Inputed = (
        <input
          type={props.type}
          placeholder={props.placeholder}
          name={props.usename}
          {...props.register}
          className={className}
        />
      );
      break;
    case "file":
      Inputed = (
        <input
          type={props.type}
          name={props.usename}
          {...props.register}
          className={className}
          // showFile={props.showFile}
          // value={props.value}
          // defaultValue={props.value}
          style={{ cursor: "pointer" }}
        />
      );
      break;
    case "select":
      Inputed = (
        <select
          style={{ cursor: "pointer" }}
          name={props.usename}
          {...props.register}
          className={className}
        >
          {props.value ? (
            <option value={props.value.id}>{props.value.category}</option>
          ) : null}
          {props.options?.map((val, i) => {
            return (
              <option
                className="capitalize cursor-pointer "
                key={i}
                value={
                  i === 0
                    ? ""
                    : props.usename === "project_Category"
                    ? val.id
                    : val.id
                }
              >
                {props.usename === "project_Category" ? val.type : val.category}
              </option>
            );
          })}
        </select>
      );
      break;
    case "textarea":
      Inputed = (
        <textarea
          name={props.usename}
          placeholder={props.placeholder}
          {...props.register}
          defaultValue={props.value}
          className={`${className} `}
        ></textarea>
      );
      break;
    default:
      Inputed = (
        <h1>something went wrong see your render method and code again</h1>
      );
      break;
  }

  return Inputed;
}

export default Inputs;
