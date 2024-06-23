/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogCard1 = () => {
  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  10th Oct 2022
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>

            {/* <!-- Add more article cards as needed --> */}
            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  10th Oct 2022
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  className="block text-xs text-gray-500"
                >
                  10th Oct 2022
                </time>

                <a href="#">
                  <h3 className="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard1;
