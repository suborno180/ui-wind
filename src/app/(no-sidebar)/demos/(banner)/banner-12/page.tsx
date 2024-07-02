/* eslint-disable @next/next/no-img-element */
import React from "react";

const Banner12 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-200 font-sans min-h-[400px] max-w-6xl px-6 py-12 mx-auto rounded-md overflow-hidden relative shadow-xl">
        <div className="text-center relative px-6 py-10 bg-white/70 rounded-[30px] w-full max-w-[550px] shadow-lg">
          <h6 className="text-gray-900 text-6xl max-sm:text-4xl font-extrabold leading-tight tracking-tight">
            Black
          </h6>
          <h2 className="text-gray-800 text-8xl max-sm:text-5xl font-extrabold leading-tight tracking-tight">
            Friday
          </h2>

          <div className="mt-6">
            <p className="text-lg text-gray-700">
              Discover amazing discounts and deals. Offers available for a
              limited time.
            </p>
          </div>

          <button
            type="button"
            className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white tracking-wide font-semibold text-sm py-4 px-10 rounded-full mt-8 transition-transform transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>

        <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
        <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
        <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full bg-blue-50 opacity-40 shadow-2xl"></div>
      </div>
    </>
  );
};

export default Banner12;
