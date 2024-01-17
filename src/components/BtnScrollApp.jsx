import React, { useState, useEffect } from "react";

const BtnScrollApp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Agregar un event listener para controlar el scroll
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll suave al principio de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="botonVolver">
      {showButton && (
        <button
          onClick={scrollToTop}
          className="ring-2 ring-slate-100 rounded-full text-slate-100 px-3 animate-bounce"
        >
          Menú
        </button>
      )}
    </div>
  );
};

export default BtnScrollApp;
