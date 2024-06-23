/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProductGrid1 = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-2 md:gap-4 lg:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>

          {/* <!-- Add more product cards as needed --> */}
          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>

          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>

          <a href="#" className="group block overflow-hidden">
            <div className="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div className="relative bg-white pt-3">
              <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p className="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductGrid1;
