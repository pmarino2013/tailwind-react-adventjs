import React from "react";
import retos from "../data/retos.json";

const RetosApp = () => {
  return (
    <>
      <section
        id="retos"
        className="flex items-center flex-col mt-16 pb-20 mx-5"
      >
        <h3 className=" text-5xl text-center text-yellow-300 font-bold leading-none">
          <span className="text-3xl md:text-5xl">✨</span>Los retos de
          programación
          <span className="text-3xl md:text-5xl">✨</span>
        </h3>
      </section>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6  mt-16"> */}
      <div className="flex flex-wrap justify-center gap-8  mt-16 pb-16 px-3">
        {retos.map((item, index) => (
          <a
            key={index}
            href=""
            className="flex-grow md:flex-grow-0
        group
        relative
        transform md:hover:scale-110 "
          >
            <article
              className={`${
                item.category == "Fácil" ? "ring-green-600" : "ring-yellow-600"
              } ring-2 rounded bg-card-${
                item.category == "Fácil" ? "green" : "yellow"
              }  grid grid-cols-2 card md:px-5 md:min-w-max relative`}
            >
              <div className="flex px-5 items-end w-40 md:w-48">
                <img
                  className="brightness-100 group-hover:brightness-125  group-hover:animate-wiggle "
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-8xl font-bold text-slate-100">
                  {item.number}
                </h3>
                <button
                  className={`bg-slate-900 ${
                    item.category == "Fácil"
                      ? "text-green-600"
                      : "text-yellow-600"
                  } font-bold px-2 w-20 rounded-full`}
                >
                  {item.category}
                </button>
              </div>
            </article>
          </a>
        ))}
      </div>
    </>
  );
};

export default RetosApp;
