/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductGrid2 = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
        <div className="grid gap-2 md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <a href="#" className="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div className="mt-1.5">
              <p className="text-xs text-gray-500">Space Grey</p>

              <div className="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend className="sr-only">Color</legend>
                  </fieldset>

                  <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" className="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" className="sr-only" />

                      <label
                        htmlFor="ColorS"
                        className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" className="sr-only" />

                      <label
                        htmlFor="ColorP"
                        className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" className="sr-only" />

                      <label
                        htmlFor="ColorG"
                        className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" className="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p className="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div className="mt-1.5">
              <p className="text-xs text-gray-500">Space Grey</p>

              <div className="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend className="sr-only">Color</legend>
                  </fieldset>

                  <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" className="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" className="sr-only" />

                      <label
                        htmlFor="ColorS"
                        className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" className="sr-only" />

                      <label
                        htmlFor="ColorP"
                        className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" className="sr-only" />

                      <label
                        htmlFor="ColorG"
                        className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" className="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p className="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div className="mt-1.5">
              <p className="text-xs text-gray-500">Space Grey</p>

              <div className="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend className="sr-only">Color</legend>
                  </fieldset>

                  <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" className="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" className="sr-only" />

                      <label
                        htmlFor="ColorS"
                        className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" className="sr-only" />

                      <label
                        htmlFor="ColorP"
                        className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" className="sr-only" />

                      <label
                        htmlFor="ColorG"
                        className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" className="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p className="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" className="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div className="mt-1.5">
              <p className="text-xs text-gray-500">Space Grey</p>

              <div className="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend className="sr-only">Color</legend>
                  </fieldset>

                  <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" className="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        className="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" className="sr-only" />

                      <label
                        htmlFor="ColorS"
                        className="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" className="sr-only" />

                      <label
                        htmlFor="ColorP"
                        className="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" className="sr-only" />

                      <label
                        htmlFor="ColorG"
                        className="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" className="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        className="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span className="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-3 flex justify-between text-sm">
                <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p className="text-gray-900">$299</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductGrid2;
