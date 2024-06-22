/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero3 = () => {
  return (
    <>
      <div className="bg-[url(https://play.tailwindcss.com/img/beams.jpg)] bg-center bg-cover">
        <div className="relative pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
          <div className="relative lg:flex lg:items-center lg:gap-16">
            <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
              <h1 className="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
                Build your way with our expert{" "}
                <span className="text-blue-500">Support.</span>
              </h1>
              <p className="mt-8 text-gray-600 text-lg">
                Leverage our expertise to transform your vision into reality.
                Join us to access unparalleled support and guidance.
              </p>
              <div>
                <form action="" className="w-full mt-12">
                  <div className="relative flex items-center px-2 py-2 rounded-full bg-white border border-primary/10 shadow-md md:p-2 lg:pr-3">
                    <div className="pl-6 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 m-auto fill-blue-900/60"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      autoComplete="email"
                      placeholder="Your email address"
                      className="w-full p-4 rounded-full placeholder-gray-600 bg-transparent focus:outline-none"
                      type="email"
                    />
                    <div className="md:pr-1.5 lg:pr-0">
                      <button
                        type="button"
                        title="Get Started"
                        className="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 bg-primary text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
                      >
                        <span className="hidden md:block">Get Started</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative h-6 w-6 mx-auto md:hidden"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-12 flex gap-6 lg:gap-12 justify-center lg:justify-start">
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/airbnb.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Airbnb"
                />
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/ge.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="General Electric"
                />
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/coty.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Coty"
                />
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/microsoft.svg"
                  className="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Microsoft"
                />
              </div>
            </div>
            <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
              <img
                src="https://tailus.io/sources/blocks/sass/preview/images/project.svg"
                alt="project illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero3;
