interface Component {
    id: number;
    icon: string;
    category: string; // Corrected spelling from 'catagory' to 'category'
    items: {
        id: number;
        image: string;
        demoUrl: string;
        code: string;
    }[];
}

// Your componentsData array should use this corrected type:
const componentsData: Component[] = [
  {
    id: 1,
    icon: "",
    category: "Heros",
    items: [
      {
        id: 1,
        image: "/block.dark.svg",
        demoUrl: "/demos/hero-1",
        code: `
        <div class="relative overflow-hidden bg-white">
            <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div class="sm:max-w-lg">
                <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Svelte signals are finally here
                </h1>
                <p class="mt-4 text-xl text-gray-500">
                    This year, our new svelte signals will shelter you from the
                harsh elements of a world that doesn't care if you develop or
                die.
                </p>
                </div>
                <div>
                <div class="mt-10">
                    {/* <!-- Decorative image grid --> */}
                    <div
                    aria-hidden="true"
                    class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                    <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div class="flex items-center space-x-6 lg:space-x-8">
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                                src="https://placekeanu.com/664/450/"
                                class="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://placekeanu.com/664/450/"
                                alt=""
                                class="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://placekeanu.com/684/350/"
                                alt=""
                                class="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://placekeanu.com/250/350/y"
                                alt=""
                                class="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://placekeanu.com/764/550/"
                                alt=""
                                class="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://placekeanu.com/684/350/y"
                                alt=""
                                class="h-full w-full object-cover object-center"
                            />
                            </div>
                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                                src="https://placekeanu.com/684/350"
                                alt=""
                                class="h-full w-full object-cover object-center"
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <a
                    href="#"
                    class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                    >
                    Svelte Signals
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        `,
      },
      {
        id: 2,
          image: "/block.dark-2.png",
        demoUrl: "/demos/hero-2",
        code: `
       <div class="bg-white">
        <section class="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4 bg-white">
              <span class="font-inter text-xs font-medium text-gray-900 ml-3">
                Explore how to use for brands.
              </span>
              <a
                href="#"
                class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
              Control your Finances with our
              <span class="text-indigo-600">Smart Tool </span>
            </h1>
            <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
              Invest intelligently and discover a better way to manage your
              entire wealth easily.
            </p>
            <a
              href="#"
              class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
            >
              Create an account
              <svg
                class="ml-2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <div class="flex justify-center">
              <img
                src="https://pagedone.io/asset/uploads/1691054543.png"
                alt="Dashboard image"
              />
            </div>
          </div>
        </section>
      </div>
        `,
      },
    ],
  },
];

export default componentsData;
