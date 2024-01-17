import React, { useEffect, useState } from "react";
import preguntas from "../data/preguntas.json";

const QuestionsApp = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    calcularPreguntas();
  }, []);

  const calcularPreguntas = () => {
    const cantidad = preguntas.length / 2;
    console.log(cantidad);
    const array1 = [];
    const array2 = [];

    for (let index = 0; index < cantidad; index++) {
      array1.push(preguntas[index]);
      setData1([...array1]);
    }

    for (let index = cantidad; index < preguntas.length; index++) {
      array2.push(preguntas[index]);
      setData2([...array2]);
    }
  };

  return (
    <div id="preguntas" className="px-8 mx-auto md:max-w-7xl pb-16">
      <section id="questions" className="flex justify-center mt-16 pb-20">
        <h3 className=" text-5xl px-2 text-center text-yellow-300 font-bold ">
          <span className="text-3xl md:text-5xl">✨</span>Preguntas frecuentes
          <span className="text-3xl md:text-5xl">✨</span>
        </h3>
      </section>
      {data1 && (
        <section className="grid md:grid-cols-2 gap-16 grid-cols-1">
          <div className="flex flex-col gap-16 md:mx-auto">
            {data1.map((item, index) => (
              <details key={index} className="md:p-8" open>
                <summary className="text-yellow-500 font-bold text-4xl">
                  {item.pregunta}
                </summary>
                <p className="text-2xl text-gray-100 font-bold ">
                  {item.respuesta}
                </p>
              </details>
            ))}
          </div>
          <div className="flex flex-col gap-16 mx-auto">
            {data2.map((item, index) => (
              <details key={index} className="md:p-8" open>
                <summary className="text-yellow-500 font-bold text-4xl">
                  {item.pregunta}
                </summary>
                <p className="text-2xl text-gray-100 font-bold ">
                  {item.respuesta}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default QuestionsApp;
