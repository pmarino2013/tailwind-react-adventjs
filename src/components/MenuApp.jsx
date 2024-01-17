import React, { useState } from "react";
import BtnApp from "./BtnApp";

const MenuApp = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="flex w-full items-center justify-center flex-wrap p-6 bg-transparent flex-col md:flex-row fixed top-5 md:relative z-10">
        <div className="flex justify-end w-full text-slate-200 md:hidden  ">
          <button
            onClick={() => setShow(!show)}
            className="ring-2 ring-slate-100 rounded-full text-slate-100 px-3"
          >
            Menú
          </button>
        </div>

        <div
          className={`md:flex ${
            !show && "hidden"
          } md:items-center bg-menu md:bg-transparent w-full md:w-auto`}
        >
          <a
            href="#retos"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-yellow-300 hover:ring-yellow-300 hover:ring-2 md:mr-4 p-2 transition text-center"
          >
            <div className="flex  gap-2 font-bold text-xl">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <title>coding-apps-websites-programming-browser</title>
                <g>
                  <path
                    d="m1.1400000000000001 6.855 21.72 0 0 14.857499999999998 1.1400000000000001 0 0 -19.424999999999997 -1.1400000000000001 0 0 3.4275 -21.72 0 0 -3.4275 -1.1400000000000001 0 0 19.424999999999997 1.1400000000000001 0 0 -14.857499999999998z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M1.1400000000000001 21.7125h21.72v1.1475H1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M3.4275 9.1425v10.290000000000001h17.145V9.1425Zm6.855 5.715h-1.1400000000000001v1.1400000000000001h-1.1400000000000001v1.1475H6.855v-1.1475h1.1475v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h-1.1400000000000001v-1.1475H6.855v-1.1400000000000001h1.1475v1.1400000000000001h1.1400000000000001v1.1475h1.1400000000000001Zm6.862500000000001 0h-4.574999999999999v-1.1400000000000001h4.574999999999999Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M6.855 3.4275h1.1475V4.574999999999999H6.855Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M4.574999999999999 3.4275h1.1400000000000001V4.574999999999999H4.574999999999999Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M2.2874999999999996 3.4275h1.1400000000000001V4.574999999999999H2.2874999999999996Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M1.1400000000000001 1.1400000000000001h21.72v1.1475H1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                </g>
              </svg>
              Retos
            </div>
          </a>
          <a
            href="#sponsor"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-yellow-300 hover:ring-yellow-300 hover:ring-2 md:mr-4 p-2 transition "
          >
            <div className="flex gap-2 font-bold text-xl">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <title>business-products-deal-handshake</title>
                <g>
                  <path
                    d="M22.86 5.715H24v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m20.572499999999998 11.43 0 1.1400000000000001 -2.2800000000000002 0 0 1.1475 2.2800000000000002 0 0 6.855 -4.5675 0 0 1.1400000000000001 4.5675 0 0 1.1475 3.4275 0 0 -11.43 -3.4275 0z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M21.72 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M20.572499999999998 5.715h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M19.4325 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M19.4325 1.1475h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M18.2925 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M17.145 11.43h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M16.005 10.290000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m16.005 17.145 -1.1475 0 0 2.2874999999999996 -2.2800000000000002 0 0 2.2800000000000002 1.1400000000000001 0 0 -1.1400000000000001 2.2874999999999996 0 0 -3.4275z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M13.7175 16.005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M13.7175 2.2874999999999996h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M12.5775 14.857499999999998h1.1400000000000001v1.1475h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M12.5775 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M11.43 9.1425h4.574999999999999v1.1475h-4.574999999999999Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M12.5775 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M12.5775 1.1475h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M11.43 18.285h1.1475v1.1475h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M11.43 13.7175h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M11.43 2.2874999999999996h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m10.290000000000001 22.86 -3.4275 0 0 1.1400000000000001 4.5675 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 -2.2874999999999996 0 0 1.1475z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M10.290000000000001 10.290000000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M9.1425 20.572499999999998h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M9.1425 14.857499999999998h2.2874999999999996v1.1475h-2.2874999999999996Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M9.1425 11.43h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M8.0025 9.1425h2.2874999999999996v1.1475h-2.2874999999999996Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M8.0025 19.4325h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M8.0025 12.57h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M8.0025 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M6.862500000000001 10.290000000000001h1.1400000000000001v1.1400000000000001H6.862500000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M5.715 21.7125h1.1475v1.1475H5.715Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M5.715 11.43h1.1475v1.1400000000000001H5.715Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m3.435 20.572499999999998 0 -6.855 2.2800000000000002 0 0 -1.1475 -2.2800000000000002 0 0 -1.1400000000000001 -3.435 0 0 11.43 3.435 0 0 -1.1475 2.2800000000000002 0 0 -1.1400000000000001 -2.2800000000000002 0z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M4.574999999999999 0h1.1400000000000001v1.1475H4.574999999999999Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m3.435 9.1425 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1475 0z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                </g>
              </svg>
              Sponsors
            </div>
          </a>
          <a
            href="#preguntas"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-yellow-300 hover:ring-yellow-300 hover:ring-2 md:mr-4 p-2 transition"
          >
            <div className="flex gap-2 font-bold text-xl">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="24"
                width="24"
              >
                <title>interface-essential-trophy</title>
                <g>
                  <path
                    d="M22.28625 4.005h1.1400000000000001v5.7075000000000005h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m19.99875 4.005 2.2874999999999996 0 0 -1.1475 -2.2874999999999996 0 0 -1.1400000000000001 -1.1400000000000001 0 0 11.43 1.1400000000000001 0 0 -2.2874999999999996 2.2874999999999996 0 0 -1.1475 -2.2874999999999996 0 0 -5.7075000000000005z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M17.71125 13.1475h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M16.57125 14.287500000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m7.428749999999999 22.29 0 -1.1475 -1.1400000000000001 0 0 1.1475 -1.1475 0 0 1.1400000000000001 13.7175 0 0 -1.1400000000000001 -1.1475 0 0 -1.1475 -1.1400000000000001 0 0 1.1475 -9.1425 0z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M14.283750000000001 20.0025h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M14.283750000000001 15.4275h2.2874999999999996v1.1475h-2.2874999999999996Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m13.143749999999999 6.285 0 -2.2800000000000002 -2.2874999999999996 0 0 2.2800000000000002 -3.4275 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 1.1400000000000001 -1.1475 0 0 2.2874999999999996 2.2874999999999996 0 0 -1.1400000000000001 2.2874999999999996 0 0 1.1400000000000001 2.2874999999999996 0 0 -2.2874999999999996 -1.1475 0 0 -1.1400000000000001 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 -3.4275 0z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M13.143749999999999 16.575000000000003h1.1400000000000001v3.4275h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M9.71625 16.575000000000003h1.1400000000000001v3.4275h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M7.428749999999999 20.0025h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M7.428749999999999 15.4275h2.2874999999999996v1.1475h-2.2874999999999996Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M6.28875 14.287500000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M5.14125 0.5700000000000001h13.7175v1.1475H5.14125Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M5.14125 13.1475h1.1475v1.1400000000000001h-1.1475Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="m5.14125 1.7175 -1.1400000000000001 0 0 1.1400000000000001 -2.2874999999999996 0 0 1.1475 2.2874999999999996 0 0 5.7075000000000005 -2.2874999999999996 0 0 1.1475 2.2874999999999996 0 0 2.2874999999999996 1.1400000000000001 0 0 -11.43z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                  <path
                    d="M0.57375 4.005h1.1400000000000001v5.7075000000000005H0.57375Z"
                    fill="currentColor"
                    stroke-width="0.75"
                  ></path>
                </g>
              </svg>
              Q&A
            </div>
          </a>
          <div className="flex justify-center mt-4 lg:inline-block lg:mt-0 md:mr-4 p-2 ">
            <BtnApp
              bg={"bg-slate-50"}
              title={"Inicia sesión"}
              text={"text-slate-600"}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuApp;
