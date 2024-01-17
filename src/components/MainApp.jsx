import React from "react";
import BtnApp from "./BtnApp";

const MainApp = () => {
  return (
    <div className="columns-1 mx-11  ">
      <div className="flex justify-center items-baseline gap-2">
        <h1 className=" text-yellow-300 md:text-8xl text-6xl font-bold">
          Advent{" "}
        </h1>
        <img
          className="w-auto h-24"
          src="https://adventjs.dev/js-logo.png"
          alt="logo"
        />
      </div>
      <div className="text-center mt-3 flex flex-col gap-3 ">
        <h3 className=" text-3xl  md:text-5xl text-red-500 font-bold leading-none">
          Retos y regalos de programación
        </h3>
        <span className="text-slate-200 text-2xl md:text-3xl mt-12  font-bold">
          ¡Cada día, un nuevo reto de programación!
        </span>
      </div>
      <div className="flex mt-20 justify-center gap-5 flex-col md:flex-row">
        <BtnApp
          bg={"bg-yellow-300"}
          title={"¡Ir a los retos de código!"}
          text={"text-slate-600"}
        />
        <BtnApp
          bg={"bg-sky-700"}
          title={"Entrar al Discord"}
          text={"text-slate-50"}
        />
      </div>
    </div>
  );
};

export default MainApp;
