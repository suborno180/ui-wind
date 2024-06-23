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
      {
        id: 3,
        image: "/block.dark-3.svg",
        demoUrl: "/demos/hero-3",
        code: `
  <div class="bg-[url(https://play.tailwindcss.com/img/beams.jpg)] bg-center bg-cover">
        <div class="relative pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
          <div class="relative lg:flex lg:items-center lg:gap-16">
            <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
              <h1 class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight">
                Build your way with our expert{" "}
                <span class="text-blue-500">Support.</span>
              </h1>
              <p class="mt-8 text-gray-600 text-lg">
                Leverage our expertise to transform your vision into reality.
                Join us to access unparalleled support and guidance.
              </p>
              <div>
                <form action="" class="w-full mt-12">
                  <div class="relative flex items-center px-2 py-2 rounded-full bg-white border border-primary/10 shadow-md md:p-2 lg:pr-3">
                    <div class="pl-6 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 m-auto fill-blue-900/60"
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
                      class="w-full p-4 rounded-full placeholder-gray-600 bg-transparent focus:outline-none"
                      type="email"
                    />
                    <div class="md:pr-1.5 lg:pr-0">
                      <button
                        type="button"
                        title="Get Started"
                        class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 bg-primary text-white font-semibold rounded-full transition-transform duration-300 hover:scale-105 active:scale-95"
                      >
                        <span class="hidden md:block">Get Started</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="relative h-6 w-6 mx-auto md:hidden"
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
              <div class="mt-12 flex gap-6 lg:gap-12 justify-center lg:justify-start">
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/airbnb.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Airbnb"
                />
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/ge.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="General Electric"
                />
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/coty.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Coty"
                />
                <img
                  src="https://tailus.io/sources/blocks/sass/preview/images/clients/microsoft.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Microsoft"
                />
              </div>
            </div>
            <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
              <img
                src="https://tailus.io/sources/blocks/sass/preview/images/project.svg"
                alt="project illustration"
                class="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
        `,
      },
      {
        id: 4,
        image: "/block.dark.svg",
        demoUrl: "/demos/hero-4",
        code: `
      <div class="relative pt-40 pb-20 lg:pt-44 bg-white">
        <div class="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 class="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
            Run successful remote and <br class="lg:block hidden" />{" "}
            <span class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Hybrid teams
            </span>
            .
          </h1>
          <div class="lg:flex">
            <div class="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p class="sm:text-lg text-gray-700 lg:w-11/12">
                DailyBot takes chat and collaboration to the next level: daily
                standups, team check-ins, surveys, kudos, best companion bot for
                your virtual watercooler, 1:1 intros, motivation tracking and
                more.
              </p>
              <span class="block font-semibold text-gray-500">
                The best companion bot for your chat app.
              </span>
              <div class="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a
                  aria-label="add to slack"
                  href="#"
                  class="p-4 border border-gray-200 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20"
                >
                  <div class="flex justify-center space-x-4">
                    <img
                      class="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png"
                      alt="slack logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span class="hidden font-medium md:block text-gray-500">
                      Slack
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to chat"
                  href="#"
                  class="p-4 border border-gray-200 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20"
                >
                  <div class="flex justify-center space-x-4">
                    <img
                      class="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png"
                      alt="chat logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span class="hidden font-medium md:block text-gray-500">
                      Google Chat
                    </span>
                  </div>
                </a>
                <a
                  aria-label="add to zoom"
                  href="#"
                  class="p-4 border border-gray-200 rounded-full duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  <div class="flex justify-center space-x-4">
                    <img
                      class="w-6 h-6"
                      src="https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png"
                      alt="zoom logo"
                      loading="lazy"
                      width="128"
                      height="128"
                    />
                    <span class="hidden font-medium md:block text-gray-500">
                      Zoom
                    </span>
                  </div>
                </a>
              </div>

              <div class="text-gray-500">
                🔥🌟
                <span>Other integrations :</span>
                <a href="#" class="font-semibold text-gray-700">
                  Discord,
                </a>
                <a href="#" class="font-semibold text-gray-700">
                  Telegram
                </a>
              </div>

              <div class="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Airbnb logo"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="GE logo"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Coty logo"
                />
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                  class="h-8 sm:h-10 w-auto lg:h-12"
                  alt="Microsoft logo"
                />
              </div>
            </div>
            <div class="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
              <div class="relative w-full">
                <div
                  aria-hidden="true"
                  class="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl"
                ></div>
                <img
                  src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                  class="relative w-full"
                  alt="Illustration of globalization"
                  loading="lazy"
                  width="320"
                  height="280"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        `,
      },
      {
        id: 5,
        image: "/block.dark.svg",
        demoUrl: "/demos/hero-5",
        code: `
 <div class="relative ">
        <img
          class="absolute inset-0 w-full h-full object-cover object-top"
          src="/realistic_Design_a_living_room_2.jpg"
          width="400"
          height="500"
          alt="hero background image"
        />
        <div
          aria-hidden="true"
          class="absolute inset-0 w-full h-full bg-purple-900 bg-opacity-30 backdrop-blur-sm"
        ></div>
        <div class="relative container m-auto px-6 md:px-12 lg:px-6">
          <div class="mb-12 pt-40 space-y-16 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
            <h1 class="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
              Don't look again for your next freelance projects, you got them.
            </h1>

            <form action="" class="w-full">
              <div class="relative flex p-1 rounded-xl bg-white shadow-2xl md:p-2">
                <div
                  id="catJobBox"
                  class="hidden text-gray-600 relative md:flex justify-between items-center min-w-max select-none"
                >
                  <input
                    type="checkbox"
                    name=""
                    id="toggleJobLstCat"
                    class="peer hidden outline-none"
                  />
                  <input
                    type="text"
                    name=""
                    id="catJobName"
                    value="Design"
                    class="pl-3 w-full bg-white text-base font-medium cursor-pointer"
                  />
                  <label
                    htmlFor="toggleJobLstCat"
                    class="absolute top-0 left-0 w-full h-full"
                  ></label>
                  <span class="min-w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  <div
                    id="catJobLst"
                    class="absolute transition-all duration-500 ease-in-out translate-y-10 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-y-1 top-full left-0 w-full bg-white bg-opacity-80 rounded-lg py-2"
                  >
                    <ul class="flex flex-col w-full">
                      <li class="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Design
                      </li>
                      <li class="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Development
                      </li>
                      <li class="cursor-default transition hover:bg-gray-100 hover:bg-opacity-80 flex px-5 py-2">
                        Marketing
                      </li>
                    </ul>
                  </div>
                </div>
                <input
                  placeholder="Your favorite position"
                  class="w-full p-4 outline-none bg-transparent text-gray-600"
                  type="text"
                />
                <button
                  type="button"
                  title="Start buying"
                  class="ml-auto py-3 px-6 rounded-lg text-center transition bg-gradient-to-br from-pink-500 to-purple-500 hover:to-purple-600 active:from-pink-700 focus:from-pink-600 md:px-12"
                >
                  <span class="hidden text-white font-semibold md:block">
                    Search
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 mx-auto text-white md:hidden"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

          <div class="pb-16">
            <div class="md:px-12">
              <span class="block text-center font-medium text-pink-50">
                Trusted by your favorite giants
              </span>
              <div class="mt-8 -mx-6 px-6 overflow-x-auto md:overflow-x-hidden">
                <div class="w-max flex justify-center flex-wrap items-center gap-4 md:w-auto md:gap-6 lg:gap-8">
                  <div class="flex items-center">
                    <img
                      class="w-36 grayscale contrast-200 brightness-200"
                      src="https://tailus.io/sources/blocks/job-board/preview/images/clients/microsoft.png"
                      alt="client logo"
                      loading="lazy"
                      width="100"
                      height="122"
                    />
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-28 grayscale contrast-200 brightness-200"
                      src="https://tailus.io/sources/blocks/job-board/preview/images/clients/grabyo.png"
                      alt="client logo"
                      loading="lazy"
                      width="100"
                      height="219"
                    />
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-32 grayscale contrast-200 brightness-200"
                      src="https://tailus.io/sources/blocks/job-board/preview/images/clients/lifegroups.png"
                      alt="client logo"
                      loading="lazy"
                      width="100"
                      height="219"
                    />
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-24 grayscale contrast-200 brightness-200"
                      src="https://tailus.io/sources/blocks/job-board/preview/images/clients/lilly.png"
                      alt="client logo"
                      loading="lazy"
                      width="100"
                      height="219"
                    />
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-28 grayscale contrast-200 brightness-200"
                      src="https://tailus.io/sources/blocks/job-board/preview/images/clients/grabyo.png"
                      alt="client logo"
                      loading="lazy"
                      width="100"
                      height="219"
                    />
                  </div>
                  <div class="flex items-center">
                    <img
                      class="w-32 grayscale contrast-200 brightness-200"
                      src="https://tailus.io/sources/blocks/job-board/preview/images/clients/lifegroups.png"
                      alt="client logo"
                      loading="lazy"
                      width="100"
                      height="219"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `,
      },
    ],
  },
];

export default componentsData;
