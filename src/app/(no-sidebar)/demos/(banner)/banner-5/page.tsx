/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner6 = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 min-h-[164px] py-8 p-16 bg-gradient-to-r from-blue-700 to-blue-400 font-sans overflow-hidden">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-white">
            Welcome to ReadymadeUI!
          </h1>
          <p className="text-base text-gray-200 mt-2">
            Best tailwind css readymade UI plateform
          </p>

          <button
            type="button"
            className="py-3 px-6 text-sm font-semibold bg-white text-blue-600 hover:bg-slate-100 rounded-md mt-8"
          >
            Get Started
          </button>
        </div>

        <div className="relative max-md:hidden">
          <img
            src="https://readymadeui.com/readymadeui_banner2.webp"
            alt="Banner Image"
            className="w-full right-4 top-[-13px] md:absolute skew-x-[-16deg] rotate-2 object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Banner6;
