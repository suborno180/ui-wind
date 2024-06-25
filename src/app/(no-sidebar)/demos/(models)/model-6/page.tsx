/* eslint-disable @next/next/no-img-element */
import React from "react";

const Model6 = () => {
  return (
    <>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl px-8 py-6 relative">
          <div className="flex items-start">
            <div className="flex-1">
              <h3 className="text-gray-800 text-2xl font-bold">Members</h3>
              <p className="text-gray-500 text-sm mt-1">
                Manage and control who has access to this workspace.
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus-within:border-blue-600 min-w-[220px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="fill-gray-400 mr-4"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="email"
                placeholder="Search by name or user id"
                className="w-full outline-none bg-transparent text-gray-500 text-sm"
              />
            </div>

            <button
              type="button"
              className="px-5 py-2.5 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"
            >
              Invite
            </button>
          </div>

          <div className="mt-6 divide-y">
            <div className="flex flex-wrap items-center gap-4 py-3 cursor-pointer">
              <img
                src="https://readymadeui.com/team-1.webp"
                className="w-11 h-11 rounded-full"
                alt="image"
              />
              <div>
                <p className="text-sm text-gray-800 font-bold">John Doe</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  johndoe23@gmail.com
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-0.5 ml-auto">Owner</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 py-3 cursor-pointer">
              <img
                src="https://readymadeui.com/team-2.webp"
                className="w-11 h-11 rounded-full"
                alt="image"
              />
              <div>
                <p className="text-sm text-gray-800 font-bold">Mark cena</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  mark025@gmail.com
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-0.5 ml-auto">Member</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 py-3 cursor-pointer">
              <img
                src="https://readymadeui.com/team-3.webp"
                className="w-11 h-11 rounded-full"
                alt="image"
              />
              <div>
                <p className="text-sm text-gray-800 font-bold">Sophia</p>
                <p className="text-xs text-gray-500 mt-0.5">
                  sophia23@gmail.com
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-0.5 ml-auto">Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model6;
