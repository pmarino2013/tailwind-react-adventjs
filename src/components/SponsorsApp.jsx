import React from "react";

const SponsorsApp = () => {
  return (
    <section id="sponsor" className="flex items-center flex-col mt-16 pb-20">
      <h3 className=" text-5xl px-2 text-center text-yellow-300 font-bold ">
        <span>✨</span>Los patrocinadores
        <span className="hidden md:inline-block">✨</span>
      </h3>
      <span className="text-slate-200 text-sm md:text-xl mt-5  font-bold">
        Gracias a estas empresas, el AdventJS es posible.
      </span>

      <div className=" mt-16 grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="flex justify-center">
          <img
            className="h-20  transition ease-in-out   hover:scale-110  duration-300 hover:-rotate-1"
            src="https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo.png"
            alt="google"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="h-20  transition ease-in-out   hover:scale-110  duration-300 hover:-rotate-1"
            src="https://cdn.hostadvice.com/2017/09/Donweb-250x125.png"
            alt="donweb"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="h-16 md:h-20  transition ease-in-out   hover:scale-110  duration-300 hover:-rotate-1"
            src="https://openexpoeurope.com/wp-content/uploads/2019/04/logo%20keepcoding%20ajustado.png"
            alt="keepcoding"
          />
        </div>
        <div className="flex justify-center">
          <img
            className="h-16 transition ease-in-out   hover:scale-110  duration-300 hover:-rotate-1"
            src="https://unstack.netlify.app/images/clients/cloudinary.png"
            alt="cloudinary"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsApp;
