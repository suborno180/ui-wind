/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ShoppingCart4 = () => {
  return (
    <>
      <div className="bg-white">
        <div className="font-sans">
          <div className="grid lg:grid-cols-3 gap-4 max-lg:max-w-3xl mx-auto">
            <div className="lg:col-span-2 bg-white divide-y divide-gray-300 px-4">
              <div className="grid md:grid-cols-4 items-center gap-4 py-4">
                <div className="col-span-2 flex items-center gap-6">
                  <div className="w-28 h-28 shrink-0">
                    <img
                      src="https://readymadeui.com/images/sunglass6.webp"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      Sun Glass
                    </h3>
                    <h6 className="text-sm text-gray-500 mt-1">
                      Color: <span className="ml-2 font-semibold">Black</span>
                    </h6>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">2</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="flex items-center">
                  <h4 className="text-base font-bold text-gray-800">$20.00</h4>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 ml-auto"
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
              </div>

              <div className="grid md:grid-cols-4 items-center gap-4 py-4">
                <div className="col-span-2 flex items-center gap-6">
                  <div className="w-28 h-28 shrink-0">
                    <img
                      src="https://readymadeui.com/images/product14.webp"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      Echo Elegance
                    </h3>
                    <h6 className="text-sm text-gray-500 mt-1">
                      Color:{" "}
                      <span className="ml-2 font-semibold">Black/White</span>
                    </h6>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">2</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="flex items-center">
                  <h4 className="text-base font-bold text-gray-800">$24.00</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 ml-auto"
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
              </div>

              <div className="grid md:grid-cols-4 items-center gap-4 py-4">
                <div className="col-span-2 flex items-center gap-6">
                  <div className="w-28 h-28 shrink-0">
                    <img
                      src="https://readymadeui.com/images/watch5.webp"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-gray-800">
                      Smart Watch Timex
                    </h3>
                    <h6 className="text-sm text-gray-500 mt-1">
                      Color: <span className="ml-2 font-semibold">Gray</span>
                    </h6>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <span className="font-bold text-sm leading-[18px]">2</span>
                  <button
                    type="button"
                    className="flex items-center justify-center w-5 h-5 bg-blue-600 outline-none rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 fill-white"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="flex items-center">
                  <h4 className="text-base font-bold text-gray-800">$22.00</h4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 ml-auto"
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
              </div>
            </div>

            <div className="bg-gradient-to-tl from-[#B0EBB4] via-[#BFF6C3] to-[#E0FBE2] p-6 lg:sticky top-0">
              <ul className="text-gray-800 divide-y divide-gray-300">
                <li className="flex flex-wrap gap-4 text-sm pb-4 font-semibold">
                  Subtotal <span className="ml-auto">$46.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
                  Shipping <span className="ml-auto">$4.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">
                  Tax <span className="ml-auto">$4.00</span>
                </li>
                <li className="flex flex-wrap gap-4 text-sm pt-4 font-bold">
                  Total <span className="ml-auto">$54.00</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-base font-bold text-gray-800">
                  Apply promo code
                </h3>
                <div className="flex border border-blue-600 overflow-hidden max-w-md rounded-lg mt-4">
                  <input
                    type="email"
                    placeholder="Promo code"
                    className="w-full outline-none text-gray-800 text-sm px-4 py-3 bg-white"
                  />

                  <button
                    type="button"
                    className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold tracking-wide text-sm text-white outline-none"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="mt-8 max-w-md text-sm px-6 py-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide rounded-lg"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart4;
