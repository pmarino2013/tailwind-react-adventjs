import React from "react";

const FooterApp = () => {
  return (
    <footer className="flex items-center flex-col mt-16 pb-10 gap-3 mx-5">
      <div className="flex gap-2 items-center">
        <h1 className=" text-yellow-300 text-2xl font-bold">Advent </h1>
        <img
          className="w-auto h-10"
          src="https://adventjs.dev/js-logo.png"
          alt="logo"
        />
      </div>
      <div className="text-slate-100">
        <p>
          Es una iniciativa de <span className="font-bold">DevTuc</span>
        </p>
      </div>
      <div className="flex text-slate-100 mt-5 gap-2">
        <a href="" className="hover:text-slate-50 hover:underline">
          YouTube
        </a>
        <span className="text-gray-400">•</span>
        <a href="" className="hover:text-slate-50 hover:underline">
          Twitch
        </a>
        <span className="text-gray-400">•</span>
        <a href="" className="hover:text-slate-50 hover:underline">
          Enviar sugerencias
        </a>
      </div>
    </footer>
  );
};

export default FooterApp;
