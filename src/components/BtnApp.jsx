import React from "react";

const BtnApp = (props) => {
  return (
    <button
      className={`${props.bg} ${props.text} font-bold p-2 transition ease-in-out delay-100  hover:scale-110  duration-300`}
    >
      {props.title}
    </button>
  );
};

export default BtnApp;
