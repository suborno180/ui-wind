/* eslint-disable @next/next/no-img-element */
import React from "react";

const Model9 = () => {
  return (
    <>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 relative">
          <div>
            <h4 className="text-xl text-gray-800 font-semibold">
              Sure you want to accept?
            </h4>
            <p className="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas
            </p>
          </div>

          <div className="flex gap-4 max-sm:flex-col mt-8">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg text-gray-800 text-sm tracking-wide border-none outline-none bg-gray-200 hover:bg-gray-300"
            >
              No, cancel
            </button>
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wide border-none outline-none bg-[#333] hover:bg-[#222]"
            >
              Yes, confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model9;
