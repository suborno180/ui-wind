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
        image: "/block.dark-1.png",
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
        image: "/block.dark-4.svg",
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
        image: "/block.dark-5.svg",
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
      {
        id: 6,
        image: "/block.dark-6.svg",
        demoUrl: "/demos/hero-6",
        code: `
      <div class="bg-white pb-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Header */}
          <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            {/* <!-- content - start --> */}
            <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                Very proud to introduce
              </p>

              <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                Revolutionary way to build the web
              </h1>

              <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random.
              </p>

              <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#"
                  class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>

                <a
                  href="#"
                  class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Fakurian Design"
                class="h-full w-full object-cover object-center"
              />
            </div>
            {/* <!-- image - end --> */}
          </section>
        </div>
      </div>
        `,
      },
      {
        id: 7,
        image: "/block.dark-7.svg",
        demoUrl: "/demos/hero-7",
        code: `
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Header */}
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            {/* <!-- image - start --> */}
            <img
              src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* <!-- image - end --> */}

            {/* <!-- overlay - start --> */}
            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
            {/* <!-- overlay - end --> */}

            {/* <!-- text start --> */}
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
                Very proud to introduce
              </p>
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                Revolutionary way to build the web
              </h1>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>

                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
            {/* <!-- text end --> */}
          </section>
        </div>
      </div>
        `,
      },
      {
        id: 8,
        image: "/block.dark-8.svg",
        demoUrl: "/demos/hero-8",
        code: `
       <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* Header */}

          <section class="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
            {/* <!-- content - start --> */}
            <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12">
              <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                Very proud to introduce
              </p>

              <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                Revolutionary way to build the web
              </h1>

              <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#"
                  class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>

                <a
                  href="#"
                  class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-96 xl:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Photo by Fakurian Design"
                class="h-full w-full object-cover object-center"
              />
            </div>
            {/* <!-- image - end --> */}
          </section>

          <section class="flex flex-col items-center justify-between gap-10 border-t border-gray-300 pt-8 lg:flex-row lg:gap-8">
            {/* <!-- stats - start --> */}
            <div class="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x divide-gray-300">
              <div class="px-6 md:px-8">
                <span class="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  200
                </span>
                <span class="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  People
                </span>
              </div>

              <div class="px-6 md:px-8">
                <span class="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  500+
                </span>
                <span class="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  Projects
                </span>
              </div>

              <div class="px-6 md:px-8">
                <span class="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  250+
                </span>
                <span class="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  Customers
                </span>
              </div>

              <div class="px-6 md:px-8">
                <span class="block text-center text-lg font-bold text-indigo-500 md:text-left md:text-xl">
                  A couple
                </span>
                <span class="block text-center text-sm font-semibold text-gray-800 md:text-left md:text-base">
                  Coffee breaks
                </span>
              </div>
            </div>
            {/* <!-- stats - end --> */}

            {/* <!-- social - start --> */}
            <div class="flex items-center justify-center gap-4 lg:justify-start">
              <span class="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                Social
              </span>
              <span class="h-px w-12 bg-gray-200"></span>

              <div class="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- social - end --> */}
          </section>
        </div>
      </div>
        `,
      },
      {
        id: 9,
        image: "/block.dark-9.svg",
        demoUrl: "/demos/hero-9",
        code: `
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* header */}

          <section className="flex flex-col items-center">
            {/* <!-- notice - start --> */}
            <div className="flex items-center gap-2 rounded border border-gray-300 bg-gray-50 p-2 text-gray-500">
              <span className="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">
                New
              </span>

              <span className="text-sm">
                This is a section of some simple filler text.
              </span>

              <a
                href="#"
                className="text-sm font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                More
              </a>
            </div>
            {/* <!-- notice - end --> */}

            <div className="flex max-w-xl flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                Very proud to introduce
              </p>

              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                Revolutionary way to build the web
              </h1>

              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares characteristics of real text.
              </p>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>

                <a
                  href="#"
                  className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
        `,
      },
      {
        id: 10,
        image: "/block.dark-10.svg",
        demoUrl: "/demos/hero-10",
        code: `
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        {/* Header */}

        <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="mb-8 flex flex-wrap justify-between md:mb-16">
            <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
              <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
                Find your
                <br />
                style online
              </h1>

              <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg">
                This is a section of some simple filler text, also known as
                placeholder text. It shares characteristics of real text.
              </p>
            </div>

            <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
              <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                <img
                  src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
                  loading="lazy"
                  alt="Photo by Kaung Htet"
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550"
                  loading="lazy"
                  alt="Photo by Manny Moreno"
                  class="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div class="flex h-12 w-64 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-300">
              <a
                href="#"
                class="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                Men
              </a>
              <a
                href="#"
                class="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                Women
              </a>
              <a
                href="#"
                class="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
              >
                Teens
              </a>
            </div>

            {/* <!-- social - start --> */}
            <div class="flex items-center justify-center gap-4 lg:justify-start">
              <span class="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">
                Social
              </span>
              <span class="h-px w-12 bg-gray-200"></span>

              <div class="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>

                <a
                  href="#"
                  target="_blank"
                  class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                >
                  <svg
                    class="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.4168 2.4594C17.7648 0.873472 15.4785 0 12.9793 0C9.1616 0 6.81353 1.56493 5.51603 2.87767C3.91693 4.49547 3 6.64362 3 8.77138C3 11.4429 4.11746 13.4934 5.98876 14.2563C6.11439 14.3078 6.24081 14.3337 6.36475 14.3337C6.75953 14.3337 7.07233 14.0754 7.1807 13.661C7.24389 13.4233 7.39024 12.8369 7.45389 12.5823C7.59011 12.0795 7.48005 11.8377 7.18295 11.4876C6.64173 10.8472 6.38969 10.0899 6.38969 9.10438C6.38969 6.17698 8.56948 3.06578 12.6095 3.06578C15.8151 3.06578 17.8064 4.88772 17.8064 7.82052C17.8064 9.67124 17.4077 11.3852 16.6837 12.6468C16.1805 13.5235 15.2957 14.5685 13.9375 14.5685C13.3501 14.5685 12.8225 14.3272 12.4896 13.9066C12.1751 13.5089 12.0714 12.9953 12.1979 12.4599C12.3408 11.855 12.5357 11.2241 12.7243 10.6141C13.0682 9.5001 13.3933 8.44789 13.3933 7.60841C13.3933 6.17252 12.5106 5.20769 11.1969 5.20769C9.52737 5.20769 8.21941 6.90336 8.21941 9.06805C8.21941 10.1297 8.50155 10.9237 8.62929 11.2286C8.41896 12.1197 7.16899 17.4176 6.93189 18.4166C6.79478 18.9997 5.96893 23.6059 7.33586 23.9731C8.87168 24.3858 10.2445 19.8997 10.3842 19.3928C10.4975 18.9806 10.8937 17.4216 11.1365 16.4634C11.878 17.1775 13.0717 17.6603 14.2333 17.6603C16.4231 17.6603 18.3924 16.6749 19.7786 14.8858C21.1229 13.1505 21.8633 10.7318 21.8633 8.0757C21.8632 5.99923 20.9714 3.95209 19.4168 2.4594Z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- social - end --> */}
          </div>
        </section>
      </div>
        `,
      },
    ],
  },
  {
    id: 2,
    icon: "",
    category: "Headers",
    items: [
      {
        id: 1,
        image: "/header-block.dark-1.svg",
        demoUrl: "/demos/header-1",
        code: `
      <div class="bg-white lg:pb-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header class="flex items-center justify-between py-4 md:py-8">
            {/* <!-- logo - start --> */}
            <a
              href="/"
              class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <svg
                width="95"
                height="94"
                viewBox="0 0 95 94"
                class="h-auto w-6 text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              Flowrift
            </a>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav class="hidden gap-12 lg:flex">
              <a
                href="#"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Home
              </a>
              <a
                href="#"
                class="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500"
              >
                Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Pricing
              </a>
              <a
                href="#"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                About
              </a>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- buttons - start --> */}
            <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <a
                href="#"
                class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
              >
                Sign in
              </a>

              <a
                href="#"
                class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Sign up
              </a>
            </div>

            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Menu
            </button>
            {/* <!-- buttons - end --> */}
          </header>

          {/* <!-- menu - start --> */}
          <div class="mx-auto -mt-4 hidden w-full max-w-screen-sm overflow-hidden rounded-lg border border-gray-300 bg-white shadow-sm lg:block">
            <div class="m-6 mb-10 grid grid-cols-2 gap-8">
              {/* <!-- link - start --> */}
              <a href="#" class="group flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>

                <div>
                  <div class="mb-1 font-semibold">Growth</div>
                  <p class="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>
              {/* <!-- link - end --> */}

              {/* <!-- link - start --> */}
              <a href="#" class="group flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>

                <div>
                  <div class="mb-1 font-semibold">Security</div>
                  <p class="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>
              {/* <!-- link - end --> */}

              {/* <!-- link - start --> */}
              <a href="#" class="group flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                <div>
                  <div class="mb-1 font-semibold">Cloud</div>
                  <p class="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>
              {/* <!-- link - end --> */}

              {/* <!-- link - start --> */}
              <a href="#" class="group flex gap-4">
                <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>

                <div>
                  <div class="mb-1 font-semibold">Analytics</div>
                  <p class="text-sm text-gray-500">
                    This is a section of some simple filler text, also known as
                    placeholder text.
                  </p>
                </div>
              </a>
              {/* <!-- link - end --> */}
            </div>

            {/* <!-- link - start --> */}
            <a
              href="#"
              class="block bg-gray-50 p-4 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              <div class="mb-1 flex items-center gap-1.5">
                <span class="font-semibold leading-none">
                  Enterprise solutions
                </span>
                <span class="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">
                  New
                </span>
              </div>

              <p class="text-sm text-gray-500">
                This is a section of some simple filler text.
              </p>
            </a>
            {/* <!-- link - end --> */}
          </div>
          {/* <!-- menu - end --> */}
        </div>
      </div>
        `,
      },
      {
        id: 2,
        image: "/header-block.dark-2.svg",
        demoUrl: "/demos/header-2",
        code: `
      <div class="bg-white lg:pb-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header class="flex items-center justify-between py-4 md:py-8">
            {/* <!-- logo - start --> */}
            <a
              href="/"
              class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
              aria-label="logo"
            >
              <svg
                width="95"
                height="94"
                viewBox="0 0 95 94"
                class="h-auto w-6 text-indigo-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M96 0V47L48 94H0V47L48 0H96Z" />
              </svg>
              Flowrift
            </a>
            {/* <!-- logo - end --> */}

            {/* <!-- nav - start --> */}
            <nav class="hidden gap-12 lg:flex">
              <a
                href="#"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Home
              </a>
              <a
                href="#"
                class="inline-flex items-center gap-1 text-lg font-semibold text-indigo-500"
              >
                Features
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-gray-800"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                Pricing
              </a>
              <a
                href="#"
                class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
              >
                About
              </a>
            </nav>
            {/* <!-- nav - end --> */}

            {/* <!-- buttons - start --> */}
            <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
              <a
                href="#"
                class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base"
              >
                Sign in
              </a>

              <a
                href="#"
                class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Sign up
              </a>
            </div>

            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              Menu
            </button>
            {/* <!-- buttons - end --> */}
          </header>

          {/* <!-- menu - start --> */}
          <div class="hidden w-full overflow-hidden rounded-lg border border-gray-300 bg-gray-50 shadow-sm lg:block">
            <div class="mx-auto flex max-w-screen-lg items-center gap-8 p-8">
              <div class="grid w-2/3 grid-cols-2 gap-8">
                {/* <!-- link - start --> */}
                <a href="#" class="group flex gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>

                  <div>
                    <div class="mb-1 font-semibold">Growth</div>
                    <p class="text-sm text-gray-500">
                      This is a section of some simple filler text, also known
                      as placeholder text.
                    </p>
                  </div>
                </a>
                {/* <!-- link - end --> */}

                {/* <!-- link - start --> */}
                <a href="#" class="group flex gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div class="mb-1 font-semibold">Security</div>
                    <p class="text-sm text-gray-500">
                      This is a section of some simple filler text, also known
                      as placeholder text.
                    </p>
                  </div>
                </a>
                {/* <!-- link - end --> */}

                {/* <!-- link - start --> */}
                <a href="#" class="group flex gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                      />
                    </svg>
                  </div>

                  <div>
                    <div class="mb-1 font-semibold">Cloud</div>
                    <p class="text-sm text-gray-500">
                      This is a section of some simple filler text, also known
                      as placeholder text.
                    </p>
                  </div>
                </a>
                {/* <!-- link - end --> */}

                {/* <!-- link - start --> */}
                <a href="#" class="group flex gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg transition duration-100 group-hover:bg-indigo-600 group-active:bg-indigo-700 md:h-12 md:w-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>

                  <div>
                    <div class="mb-1 font-semibold">Analytics</div>
                    <p class="text-sm text-gray-500">
                      This is a section of some simple filler text, also known
                      as placeholder text.
                    </p>
                  </div>
                </a>
                {/* <!-- link - end --> */}
              </div>

              {/* <!-- promo - start --> */}
              <div class="w-1/3 overflow-hidden rounded-lg border border-gray-300">
                <div class="h-48 bg-gray-100">
                  <img
                    src="https://images.unsplash.com/photo-1619118884592-11b151f1ae11?auto=format&q=75&fit=crop&w=320"
                    loading="lazy"
                    alt="Photo by Fakurian Design"
                    class="h-full w-full object-cover object-center"
                  />
                </div>

                <div class="flex items-center justify-between gap-2 bg-white p-3">
                  <p class="text-sm text-gray-500">
                    This is some simple filler text.
                  </p>

                  <a
                    href="#"
                    class="inline-block shrink-0 rounded-lg border border-gray-300 bg-white px-3 py-1 text-sm font-semibold text-indigo-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-50 focus-visible:ring active:bg-gray-100"
                  >
                    More
                  </a>
                </div>
              </div>
              {/* <!-- promo - end --> */}
            </div>
          </div>
          {/* <!-- menu - end --> */}
        </div>
      </div>
        `,
      },
      {
        id: 3,
        image: "/header-block.dark-3.svg",
        demoUrl: "/demos/header-3",
        code: `
      <header classa="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div classa="flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              classa="w-36"
            />
          </a>

          <div
            id="collapseMenu"
            classa="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              classa="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                classa="w-4 fill-black"
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
            </button>

            <ul classa="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li classa="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    classa="w-36"
                  />
                </a>
              </li>
              <li classa="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  classa="hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]"
                >
                  Home
                </a>
              </li>
              <li classa="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  classa="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Team
                </a>
              </li>
              <li classa="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  classa="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Feature
                </a>
              </li>
              <li classa="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  classa="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Blog
                </a>
              </li>
              <li classa="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  classa="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  About
                </a>
              </li>
              <li classa="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  classa="hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div classa="flex max-lg:ml-auto space-x-3">
            <button classa="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
            <button classa="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Sign up
            </button>

            <button id="toggleOpen" classa="lg:hidden">
              <svg
                classa="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
        `,
      },
      {
        id: 4,
        image: "/header-block.dark-4.svg",
        demoUrl: "/demos/header-4",
        code: `
<header class='flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center gap-5 w-full'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:ml-14 lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Team</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Feature</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Blog</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</a>
          </li>
        </ul>
      </div>

      <button id="toggleOpen" class='lg:hidden ml-auto'>
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>

      <div class='flex lg:ml-auto max-lg:w-full'>
        <div
          class='flex xl:w-80 max-xl:w-full bg-gray-100 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent'>
          <input type='text' placeholder='Search something...'
            class='w-full text-sm bg-transparent rounded outline-none pr-2' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            class="cursor-pointer fill-gray-400">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </div>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 5,
        image: "/header-block.dark-5.svg",
        demoUrl: "/demos/header-5",
        code: `
<header class='flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center justify-between gap-4 w-full'>
      <a href="javascript:void(0)"
        class="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2"><img
          src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Team</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Feature</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Blog</a>
          </li>
        </ul>
      </div>

      <div class='flex items-center ml-auto space-x-6'>
        <button class='font-semibold text-[15px] border-none outline-none'><a href='javascript:void(0)'
            class='text-[#007bff] hover:underline'>Login</a></button>
        <button
          class='px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>Sign
          up</button>

        <button id="toggleOpen" class='lg:hidden'>
          <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 6,
        image: "/header-block.dark-6.svg",
        demoUrl: "/demos/header-6",
        code: `
<header class='shadow-md font-sans tracking-wide relative z-50'>
    <section class='py-2 bg-[#007bff] text-white text-right px-10'>
      <p class='text-sm'><strong class="mx-3">Address:</strong>SWF New York 185669<strong class="mx-3">Contact
          No:</strong>1800333665</p>
    </section>

    <div class='flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]'>Home</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>Team</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>Feature</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>Blog</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>About</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>Contact</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#333] block font-bold text-[15px]'>Source</a>
          </li>
        </ul>
      </div>

      <div class='flex max-lg:ml-auto'>
        <button id="toggleOpen" class='lg:hidden'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 7,
        image: "/header-block.dark-7.svg",
        demoUrl: "/demos/header-7",
        code: `
<header class='border-b font-[sans-serif] tracking-wide relative z-50'>
  <section class='py-2 bg-[#1d294f] text-white text-center px-10'>
    <p class='text-sm'>Summer sale: Save up to 40%</p>
  </section>

  <div class='flex flex-wrap items-center gap-4 px-10 py-4 relative bg-white min-h-[70px]'>
    <a href='javascript:void(0)' class='hidden max-lg:block'><img src="https://readymadeui.com/readymadeui.svg"
        alt="logo" class='w-36' /></a>

    <div id="collapseMenu"
      class="w-full max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
      <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </button>

      <div
        class="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">

        <ul class='lg:flex lg:gap-x-8 max-lg:space-y-2'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#007bff] block text-[15px]'>Home</a></li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#333] block text-[15px]'>Team</a></li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#333] block text-[15px]'>Feature</a></li>
          <li class='text-[15px] max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#333] block text-[15px]'>Blog</a></li>
        </ul>

        <a href='javascript:void(0)'
          class='m-auto absolute lg:left-2/4 lg:top-1/4 lg:-translate-x-1/2 max-lg:hidden'><img
            src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' /></a>

        <ul class='lg:flex lg:space-x-8 max-lg:space-y-2 max-lg:mt-2 ml-auto'>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#333] block text-[15px]'>About</a></li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#333] block text-[15px]'>Contact</a></li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#333] block text-[15px]'>Source</a></li>
          <li class='text-[15px] max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] font-semibold text-[#333] block text-[15px]'>Partner</a></li>
        </ul>
      </div>
    </div>

    <div class='flex ml-auto lg:hidden'>
      <button id="toggleOpen">
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
        `,
      },
      {
        id: 8,
        image: "/header-block.dark-8.svg",
        demoUrl: "/demos/header-8",
        code: `
<header class='shadow-md bg-white font-sans tracking-wide relative z-50'>
  <section
    class='flex items-center lg:justify-center flex-wrap gap-5 relative py-3 px-10 border-gray-200 border-b lg:min-h-[80px] max-lg:min-h-[60px]'>
    <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
        class='md:w-[170px] w-36' />
    </a>

    <div class="space-x-6 md:absolute md:right-10 flex items-center max-md:ml-auto">
      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="20px" height="20px"
        viewBox="0 0 512 512">
        <path
          d="M449.643 0H62.357C27.973 0 0 27.973 0 62.357v387.285C0 484.027 27.973 512 62.357 512H260.86c8.349 0 15.118-6.769 15.118-15.118v-183.31c0-8.349-6.769-15.118-15.118-15.118h-54.341v-43.033h54.341c8.349 0 15.118-6.769 15.118-15.118v-61.192c0-33.116 26.942-60.058 60.059-60.058h52.433v43.033h-52.433c-9.387 0-17.025 7.639-17.025 17.026v61.192c0 8.349 6.769 15.118 15.118 15.118h54.341v43.033H334.13c-8.349 0-15.118 6.769-15.118 15.118v183.31c0 8.349 6.769 15.118 15.118 15.118h115.513C484.027 512 512 484.027 512 449.643V62.357C512 27.973 484.027 0 449.643 0zm32.121 449.643c0 17.712-14.409 32.122-32.122 32.122H349.246V328.69h54.341c8.349 0 15.118-6.769 15.118-15.118v-73.268c0-8.349-6.769-15.118-15.118-15.118h-54.341v-32.864h54.341c8.349 0 15.118-6.769 15.118-15.118v-73.268c0-8.349-6.769-15.118-15.118-15.118h-67.551c-49.788 0-90.294 40.506-90.294 90.294v46.074h-54.341c-8.349 0-15.118 6.769-15.118 15.118v73.268c0 8.349 6.769 15.118 15.118 15.118h54.341v153.074H62.357c-17.712 0-32.122-14.409-32.122-32.122V62.357c0-17.712 14.409-32.122 32.122-32.122h387.285c17.712 0 32.122 14.409 32.122 32.122v387.286z"
          data-original="#000000" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="20px" height="20px"
        viewBox="0 0 409.61 409.61">
        <path
          d="M307.205 0h-204.8C46.09 0 .005 46.085.005 102.4v204.81c0 56.3 46.085 102.4 102.4 102.4h204.8c56.315 0 102.4-46.1 102.4-102.4V102.4c0-56.315-46.085-102.4-102.4-102.4zm68.265 307.21c0 37.632-30.612 68.265-68.265 68.265h-204.8c-37.637 0-68.265-30.633-68.265-68.265V102.4c0-37.642 30.628-68.265 68.265-68.265h204.8c37.653 0 68.265 30.623 68.265 68.265v204.81z"
          data-original="#000000" />
        <circle cx="315.755" cy="93.865" r="25.6" data-original="#000000" />
        <path
          d="M204.805 102.4c-56.566 0-102.4 45.839-102.4 102.4 0 56.54 45.834 102.41 102.4 102.41 56.55 0 102.4-45.87 102.4-102.41 0-56.561-45.85-102.4-102.4-102.4zm0 170.675c-37.699 0-68.265-30.566-68.265-68.275s30.566-68.265 68.265-68.265 68.265 30.556 68.265 68.265-30.566 68.275-68.265 68.275z"
          data-original="#000000" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer" width="20px" height="20px"
        viewBox="0 0 682.667 682.667">
        <defs>
          <clipPath id="a" clipPathUnits="userSpaceOnUse">
            <path d="M0 512h512V0H0Z" data-original="#000000" />
          </clipPath>
        </defs>
        <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
          <path
            d="M140.008 89h-30c-11.046 0-20 8.954-20 20v186c0 11.046 8.954 20 20 20h30c11.045 0 20-8.954 20-20V109c0-11.046-8.955-20-20-20m-13.991 257C103.311 346 85 364.368 85 387.003 85 409.632 103.311 428 126.017 428c22.616 0 40.977-18.368 40.977-40.997 0-22.635-18.361-41.003-40.977-41.003M402 89h-29c-11.046 0-20 8.954-20 20v90.341c0 26.121-1.164 59.726-37.092 59.726-36.429 0-43.908-28.47-43.908-57.856V109c0-11.046-8.954-20-20-20h-28c-11.046 0-20 8.954-20 20v186c0 11.046 8.954 20 20 20h28c11.046 0 20-8.954 20-20v-10.741h.065c9.334 17.708 32.19 34.741 66.249 34.741C409.186 319 422 274.002 422 213.336V109c0-11.046-8.954-20-20-20"
            data-original="#000000" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
            stroke-width="40"
            d="M492 80c0-33.137-26.863-60-60-60H80c-33.137 0-60 26.863-60 60v352c0 33.137 26.863 60 60 60h352c33.137 0 60-26.863 60-60V181"
            data-original="#000000" />
        </g>
      </svg>
      <div class="inline-block border-gray-300 border-l-2 pl-6 cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
          <circle cx="10" cy="7" r="6" data-original="#000000" />
          <path
            d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
            data-original="#000000" />
        </svg>
      </div>
    </div>
  </section>

  <div class='flex flex-wrap py-3.5 px-10 overflow-x-auto'>

    <div id="collapseMenu"
      class='w-full max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
      <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </button>

      <ul
        class='lg:flex lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li class='mb-6 hidden max-lg:block'>
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
          </a>
        </li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[#007bff] font-bold text-[15px] block'>Home</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Team</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Feature</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Blog</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>About</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Contact</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Source</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Store</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Fashion</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>Partner</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-500 font-bold text-[15px] block'>More</a></li>
      </ul>
    </div>

    <div class='flex ml-auto lg:hidden'>
      <button id="toggleOpen">
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
        `,
      },
      {
        id: 9,
        image: "/header-block.dark-9.svg",
        demoUrl: "/demos/header-9",
        code: `
<header class='flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
  <div class='flex flex-wrap items-center gap-4 w-full'>
    <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
    </a>

    <div id="collapseMenu"
      class='lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
      <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </button>

      <div
        class="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">

        <ul class='lg:flex lg:gap-x-8 max-lg:space-y-2'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]'>Home</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Shop</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Sale</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Manage</a>
          </li>
        </ul>

        <ul class='lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto'>
          <li class='max-lg:border-b max-lg:py-3 max-lg:mt-2'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Pricing</a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 max-lg:mt-2'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Learn</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-l border-[#333] h-6 max-lg:hidden"></div>

    <div class='flex items-center ml-auto space-x-6'>
      <a href='javascript:void(0)' class='hover:text-[#007bff] text-gray-600 block font-bold text-[15px]'>Log
        in</a>
      <button
        class='px-4 py-2.5 text-sm rounded font-bold text-white border-2 border-[#1d294f] bg-[#1d294f] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#1d294f]'>Start
        free trial</button>

      <button id="toggleOpen" class='lg:hidden'>
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
        `,
      },
      {
        id: 10,
        image: "/header-block.dark-10.svg",
        demoUrl: "/demos/header-10",
        code: `
<header class='flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
  <div class='flex flex-wrap items-center justify-between gap-4 w-full'>
    <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
    </a>

    <div id="collapseMenu"
      class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
      <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </button>

      <ul
        class='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li class='mb-6 hidden max-lg:block'>
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
          </a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'>
          <a href='javascript:void(0)' class='hover:text-[#007bff] text-[#007bff] font-bold block text-base'>Home</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Team</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Feature</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Blog</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold block text-base'>About</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-gray-600 font-bold block text-base'>Contact</a>
        </li>
      </ul>
    </div>

    <div class='flex items-center max-lg:ml-auto space-x-5'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
        class="cursor-pointer hover:fill-[#007bff] inline">
        <circle cx="10" cy="7" r="6" data-original="#000000" />
        <path
          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
          data-original="#000000" />
      </svg>

      <span class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
          class="cursor-pointer hover:fill-[#007bff] inline" viewBox="0 0 512 512">
          <path
            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
            data-original="#000000"></path>
        </svg>
        <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
      </span>

      <button id="toggleOpen" class='lg:hidden !ml-7'>
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
        `,
      },
      {
        id: 11,
        image: "/header-block.dark-11.svg",
        demoUrl: "/demos/header-11",
        code: `
<header class='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
  <div class='flex flex-wrap items-center gap-5 w-full'>
    <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
        class='w-40 max-lg:mr-5' />
    </a>

    <div id="collapseMenu"
      class='max-lg:hidden lg:!flex lg:ml-auto max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
      <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </button>

      <ul
        class='lg:flex gap-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li class='mb-6 hidden max-lg:block'>
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-40' />
          </a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'>
          <a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'>Home</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Team</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Feature</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Blog</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>About</a>
        </li>
        <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-[#333] font-semibold block text-[15px]'>Contact</a>
        </li>
      </ul>
    </div>

    <div class='flex items-center max-lg:ml-auto space-x-6'>
      <button
        class='px-4 py-2 text-[15px] rounded font-semibold text-[#007bff] border-2 border-[#007bff] hover:bg-[#007bff] transition-all ease-in-out duration-300 bg-transparent hover:text-white'>Sign
        up</button>

      <button id="toggleOpen" class='lg:hidden'>
        <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</header>
        `,
      },
      {
        id: 12,
        image: "/header-block.dark-12.svg",
        demoUrl: "/demos/header-12",
        code: `
<header class='flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold'>New</a></li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Men</a></li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Women</a></li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Kids</a></li>
        </ul>
      </div>

      <div class="flex gap-x-6 gap-y-4 ml-auto">
        <div
          class='flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden'>
          <input type='text' placeholder='Search something...' class='w-full text-sm bg-transparent outline-none pr-2' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            class="cursor-pointer fill-gray-600">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </div>

        <div class='flex items-center space-x-8'>
          <span class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#333] inline"
              viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000" />
            </svg>
            <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
          </span>

          <span class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="cursor-pointer fill-[#333] inline"
              viewBox="0 0 512 512">
              <path
                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                data-original="#000000"></path>
            </svg>
            <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
          </span>
          <button
            class='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Sign
            In</button>

          <button id="toggleOpen" class='lg:hidden'>
            <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 13,
        image: "/header-block.dark-13.svg",
        demoUrl: "/demos/header-13",
        code: `
<header class='flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='lg:ml-10 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#007bff] hover:text-[#007bff] text-[15px] block font-semibold'>New</a></li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Men</a></li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Women</a></li>
          <li class='max-lg:border-b max-lg:py-3 px-3'><a href='javascript:void(0)'
              class='text-[#333] hover:text-[#007bff] text-[15px] block font-semibold'>Kids</a></li>
        </ul>
      </div>

      <div class="flex gap-x-6 gap-y-4 ml-auto">
        <div
          class='flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 max-lg:hidden'>
          <input type='text' placeholder='Search something...' class='w-full text-sm bg-transparent outline-none pr-2' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
            class="cursor-pointer fill-gray-600">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
        </div>

        <div class='flex items-center space-x-8'>
          <span class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#333] inline"
              viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000" />
            </svg>
            <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
          </span>

          <span class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="cursor-pointer fill-[#333] inline"
              viewBox="0 0 512 512">
              <path
                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                data-original="#000000"></path>
            </svg>
            <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
          </span>
          <button
            class='px-5 py-2 text-sm rounded-full text-white border-2 border-[#007bff] bg-[#007bff] hover:bg-[#004bff]'>Sign
            In</button>

          <button id="toggleOpen" class='lg:hidden'>
            <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 14,
        image: "/header-block.dark-14.svg",
        demoUrl: "/demos/header-14",
        code: `
<header class='flex border-b bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-blue-600 text-[15px] font-bold text-blue-600 block'>Home</a></li>
          <li class='group max-lg:border-b max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>Pages<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Contact</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Login</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Sign up</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Blog</a></li>
            </ul>
          </li>
          <li class='group max-lg:border-b max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>Blog<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              class='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Foods</a></li>
              <li class='border-b py-2 '>
                <a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Sale</a>
              </li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Marketing</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Investment</a></li>
            </ul>
          </li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Team</a></li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About</a></li>
          <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Contact</a></li>
        </ul>
      </div>

      <div class='flex items-center space-x-8 max-lg:ml-auto'>
        <span class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px"
            class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline" viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000" />
          </svg>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
        </span>

        <span class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
            class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
          class="cursor-pointer fill-[#333] hover:fill-[#007bff]">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>

        <button id="toggleOpen" class='lg:hidden'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 15,
        image: "/header-block.dark-15.svg",
        demoUrl: "/demos/header-15",
        code: `
      <header class="border-b py-4 px-4 sm:px-10 bg-white tracking-wide relative z-50">
        <div class="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              class="w-40"
            />
          </a>

          <div
            id="collapseMenu"
            class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 fill-black"
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
            </button>

            <ul class="lg:flex lg:ml-12 lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li class="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    class="w-40"
                  />
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 text-blue-600 block font-bold transition-all"
                >
                  Home
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 block font-bold transition-all"
                >
                  Pages
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 block font-bold transition-all"
                >
                  Feature
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 block font-bold transition-all"
                >
                  Blog
                </a>
              </li>
              <li class="max-lg:border-b max-lg:py-3 px-3">
                <a
                  href="javascript:void(0)"
                  class="hover:text-blue-600 block font-bold transition-all"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div class="flex ml-auto">
            <button class="bg-blue-100 hover:bg-blue-200 flex items-center transition-all font-semibold rounded-md px-5 py-3">
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-[14px] fill-current ml-2"
                viewBox="0 0 492.004 492.004"
              >
                <path
                  d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                  data-original="#000000"
                />
              </svg>
            </button>

            <button id="toggleOpen" class="lg:hidden ml-7">
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
        `,
      },
      {
        id: 16,
        image: "/header-block.dark-16.svg",
        demoUrl: "/demos/header-16",
        code: `
       <header class="flex border-b border-1 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div class="w-full flex flex-wrap items-center justify-center gap-6 px-10 py-3 relative">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              class="w-36"
            />
          </a>

          <div
            id="collapseMenu"
            class="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              class="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 fill-black"
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
            </button>

            <ul class="lg:flex lg:ml-10 lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li class="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    class="w-36"
                  />
                </a>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-[#007bff] font-bold text-sm block"
                >
                  Home
                </a>
              </li>
              <li class="group text-[14px] max-lg:border-b max-lg:px-3 max-lg:py-2 relative">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Agencies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    class="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <div class="absolute lg:top-5 max-lg:top-8 -left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                  <div class="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 class="text-base text-[#007bff] font-bold">USA</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          New York
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          San Francisco
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Houston
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Dallas
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Philadelphia
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          San Diego
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Atlanta
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Austin
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Portland
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Denver
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="lg:min-w-[180px] max-lg:min-w-[140px]">
                    <h6 class="text-base text-[#007bff] font-bold">UK</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          London
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Bristol
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Birmingham
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Liverpool
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Manchester
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Glasgow
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Edinburgh
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Leeds
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Leicester
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Sheffield
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h6 class="text-base text-[#007bff] font-bold">Canada</h6>
                    <ul class="mt-3 pt-3 border-t border-1 space-y-3">
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Toronto
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Calgary
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Ottawa
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Vancouver
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Montréal
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Edmonton
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Winnipeg
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Halifax
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Victoria
                        </a>
                      </li>
                      <li class="max-lg:border-b py-1 rounded">
                        <a
                          href="javascript:void(0)"
                          class="hover:text-[#007bff] text-gray-500 font-bold text-sm block"
                        >
                          Windsor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Team
                </a>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Contact
                </a>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Source
                </a>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Partner
                </a>
              </li>
              <li class="max-lg:border-b max-lg:px-3 max-lg:py-2">
                <a
                  href="javascript:void(0)"
                  class="hover:text-[#007bff] text-gray-500 font-bold text-[15px] block"
                >
                  Feature
                </a>
              </li>
            </ul>
          </div>

          <div class="flex items-center ml-auto lg:hidden">
            <button id="toggleOpen">
              <svg
                class="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
        `,
      },
      {
        id: 17,
        image: "/header-block.dark-17.svg",
        demoUrl: "/demos/header-17",
        code: `
<header class='shadow-md bg-white font-[sans-serif] tracking-wide relative z-50'>
    <section
      class='flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]'>

      <div class='left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
          class="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type='text' placeholder='Search...' class="outline-none bg-transparent w-full text-sm" />
      </div>

      <a href="javascript:void(0)" class="shrink-0"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
          class='md:w-[170px] w-36' />
      </a>

      <div class="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
        <span class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px"
            class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000" />
          </svg>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">1</span>
        </span>
        <span class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
            class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline-block" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">4</span>
        </span>
        <div class="inline-block cursor-pointer border-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"
            class="hover:fill-[#007bff]">
            <circle cx="10" cy="7" r="6" data-original="#000000" />
            <path
              d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
              data-original="#000000" />
          </svg>
        </div>
      </div>
    </section>

    <div class='flex flex-wrap justify-center px-10 py-3 relative'>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-[#007bff] font-semibold block text-[15px]'>Home</a></li>
          <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Store<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              class='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li class='border-b py-3'>
                <a href='javascript:void(0)'
                  class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-4 inline-block"
                    viewBox="0 0 64 64">
                    <path
                      d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                      data-original="#000000" />
                  </svg>
                  Furniture Store
                </a>
              </li>
              <li class='border-b py-3'>
                <a href='javascript:void(0)'
                  class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-4 inline-block"
                    viewBox="0 0 1700 1700">
                    <path
                      d="M916.7 1269.4c-10.7 0-20.4-7.2-23.2-18l-29.9-114.7c-3.3-12.8 4.3-25.9 17.2-29.3 12.8-3.3 25.9 4.3 29.3 17.2l29.9 114.7c3.3 12.8-4.3 25.9-17.2 29.3-2 .5-4.1.8-6.1.8zm-169.4 0c-2 0-4-.3-6.1-.8-12.8-3.3-20.5-16.4-17.2-29.3l29.9-114.7c3.3-12.8 16.4-20.5 29.3-17.2 12.8 3.3 20.5 16.4 17.2 29.3l-29.9 114.7c-2.8 10.8-12.6 18-23.2 18z"
                      data-original="#000000" />
                    <path
                      d="M1066.6 1358.8H597.4c-13.3 0-24-10.7-24-24 0-62.6 50.9-113.5 113.5-113.5h290.4c62.6 0 113.5 50.9 113.5 113.5-.2 13.3-10.9 24-24.2 24zm-440.7-48H1038c-9.6-24.3-33.3-41.5-60.9-41.5H686.8c-27.6.1-51.3 17.3-60.9 41.5zM276.4 762.7c-13.3 0-24-10.7-24-24V395c0-29.7 24.2-53.9 53.9-53.9h1051.4c29.7 0 53.9 24.2 53.9 53.9v297.8c0 13.3-10.7 24-24 24s-24-10.7-24-24V395c0-3.2-2.6-5.9-5.9-5.9H306.3c-3.2 0-5.9 2.6-5.9 5.9v343.7c0 13.2-10.7 24-24 24zm904.5 392H446.5c-13.3 0-24-10.7-24-24s10.7-24 24-24h734.3c13.3 0 24 10.7 24 24s-10.6 24-23.9 24zm0-120.8H446.5c-13.3 0-24-10.7-24-24s10.7-24 24-24h734.3c13.3 0 24 10.7 24 24s-10.6 24-23.9 24z"
                      data-original="#000000" />
                    <path
                      d="M424.1 1358.8H128.4c-25.6 0-46.4-20.8-46.4-46.4V761.1c0-25.6 20.8-46.4 46.4-46.4h295.7c25.6 0 46.4 20.8 46.4 46.4v551.3c0 25.6-20.8 46.4-46.4 46.4zm-294.1-48h292.5V762.7H130z"
                      data-original="#000000" />
                    <path
                      d="M446.5 853.6H106c-13.3 0-24-10.7-24-24s10.7-24 24-24h340.5c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 414.4H106c-13.3 0-24-10.7-24-24s10.7-24 24-24h340.5c13.3 0 24 10.7 24 24s-10.7 24-24 24zm1125.1 90.8h-368.3c-25.6 0-46.4-20.8-46.4-46.4V715.2c0-25.6 20.8-46.4 46.4-46.4h368.3c25.6 0 46.4 20.8 46.4 46.4v597.2c0 25.6-20.8 46.4-46.4 46.4zm-366.7-48H1570v-594h-365.1z"
                      data-original="#000000" />
                    <path
                      d="M1594 811.8h-413.1c-13.3 0-24-10.7-24-24s10.7-24 24-24H1594c13.3 0 24 10.7 24 24s-10.7 24-24 24zm0 452h-413.1c-13.3 0-24-10.7-24-24s10.7-24 24-24H1594c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
                      data-original="#000000" />
                  </svg>
                  Electronic Store
                </a>
              </li>
              <li class='border-b py-3'>
                <a href='javascript:void(0)'
                  class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-4 inline-block"
                    viewBox="0 0 407.7 407.7">
                    <path
                      d="M405.5 118.021a7.93 7.93 0 0 0-.29-.29l-84.16-74.8a7.994 7.994 0 0 0-2.64-1.6l-60.88-21.76a8 8 0 0 0-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 0 0-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 0 0 0 11.6l66.56 67.28v184a8 8 0 0 0 8 8h253.6a8 8 0 0 0 8-8v-184l66.56-67.28a8 8 0 0 0 .29-11.31zm-67.09 55.79v-37.12a8 8 0 0 0-16 0v235.52H84.73v-235.52a8 8 0 0 0-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
                      data-original="#000000" />
                  </svg>
                  Fashion Store
                </a>
              </li>
              <li class='border-b py-3'>
                <a href='javascript:void(0)'
                  class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-4 inline-block"
                    viewBox="0 0 512 512">
                    <path
                      d="M434.1 243.904h-5.955a95.572 95.572 0 0 1-61.022-22.072l-117.812-98.055a49.716 49.716 0 0 0-31.743-11.481c-27.361 0-49.621 22.26-49.621 49.621v11.586c0 22.572-18.364 40.937-40.937 40.937-15.844 0-30.407-9.279-37.102-23.639l-3.261-6.995c-7.434-15.944-23.604-26.246-41.195-26.246C20.39 157.56 0 177.949 0 203.012v118.792c0 42.954 34.946 77.9 77.9 77.9h356.2c42.954 0 77.9-34.946 77.9-77.9 0-42.954-34.946-77.9-77.9-77.9zm0 125.8H77.9c-17.829 0-33.403-9.799-41.65-24.287h439.5c-8.247 14.488-23.821 24.287-41.65 24.287zM30 315.419V203.012c0-8.521 6.932-15.452 15.452-15.452 5.98 0 11.478 3.503 14.005 8.923l3.261 6.994c11.601 24.884 36.837 40.963 64.293 40.963 39.115 0 70.937-31.822 70.937-70.937v-11.586c0-10.819 8.802-19.621 19.621-19.621a19.66 19.66 0 0 1 12.552 4.54l28.901 24.055-32.93 32.93 21.213 21.213 34.872-34.871 13.031 10.846-31.444 31.444 21.213 21.213 33.386-33.385 13.031 10.846-29.958 29.958 21.213 21.213 32.115-32.115c21.284 15.35 47.024 23.723 73.383 23.723h5.955c24.246 0 44.328 18.112 47.461 41.513H30z"
                      data-original="#000000" />
                  </svg>
                  Shoes Store
                </a>
              </li>
            </ul>
          </li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>Feature</a></li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>Blog</a></li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>About</a></li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>Contact</a></li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>Source</a></li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>Partner</a></li>
          <li class='max-lg:border-b max-lg:px-3 max-lg:py-3'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block'>More</a></li>
        </ul>
      </div>

      <div id="toggleOpen" class='flex ml-auto lg:hidden'>
        <button>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 18,
        image: "/header-block.dark-18.svg",
        demoUrl: "/demos/header-18",
        code: `
<header class='flex shadow-sm py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center justify-between lg:gap-y-4 gap-y-6 gap-x-4 w-full'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:after:absolute lg:after:bg-black lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-black block text-[15px]'>Shopping</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-black block text-[15px]'>Tracking</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-black block text-[15px]'>Support</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-black block text-[15px]'>Account</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-black block text-[15px]'>Places</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-black lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-black block text-[15px]'>Contact</a>
          </li>
        </ul>
      </div>

      <div class='flex items-center max-sm:ml-auto space-x-6'>
        <ul>
          <li
            class="relative px-1 after:absolute after:bg-black after:w-full after:h-[2px] after:block after:top-8 after:left-0 after:transition-all after:duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="cursor-pointer hover:fill-black"
              viewBox="0 0 512 512">
              <path
                d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                data-original="#000000" />
            </svg>
            <div class="bg-white z-20 shadow-md py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] absolute right-0 top-10">
              <h6 class="font-semibold text-[15px]">Welcome</h6>
              <p class="text-sm text-gray-500 mt-1">To access account and manage orders</p>
              <button type='button'
                class="bg-transparent border-2 border-gray-300 hover:border-black rounded px-4 py-2.5 mt-4 text-sm text-black font-semibold">LOGIN
                / SIGNUP</button>
              <hr class="border-b-0 my-4" />
              <ul class="space-y-1.5">
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Order</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Wishlist</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Gift Cards</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Contact Us</a></li>
              </ul>
              <hr class="border-b-0 my-4" />
              <ul class="space-y-1.5">
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Coupons</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Saved Credits</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Contact Us</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-black">Saved Addresses</a></li>
              </ul>
            </div>
          </li>
        </ul>

        <button id="toggleOpen" class='lg:hidden ml-7'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 19,
        image: "/header-block.dark-19.svg",
        demoUrl: "/demos/header-19",
        code: `
<header class='flex shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class='w-full flex flex-wrap items-center lg:gap-y-4 gap-y-6 gap-x-4'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class="max-lg:hidden lg:!flex lg:items-center lg:flex-1 max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:ml-14 lg:flex lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-pink-500 lg:after:w-full lg:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-[#333] block text-sm font-semibold'>Men</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-[#333] block text-sm font-semibold'>Women</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-[#333] block text-sm font-semibold'>Kids</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-[#333] block text-sm font-semibold'>Home & Living</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-[#333] block text-sm font-semibold'>Beauty</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-[#333] block text-sm font-semibold'>Studio</a>
          </li>
        </ul>

        <div class='lg:mx-8 max-xl:hidden flex items-center bg-gray-100 px-4 h-10 rounded flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="18px"
            class="cursor-pointer fill-gray-500 mr-4 rotate-90 inline-block">
            <path
              d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
            </path>
          </svg>
          <input type='text' placeholder='Search something...' class='w-full outline-none text-sm bg-transparent' />
        </div>
      </div>

      <div class='flex items-center ml-auto'>
        <ul class="flex space-x-4">
          <li
            class="relative px-1 after:absolute after:bg-pink-500 after:w-full after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
            <div class="flex flex-col justify-center items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 512 512">
                <path
                  d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                  data-original="#000000" />
              </svg>
              <span class="text-xs font-semibold mt-1">Profile</span>
            </div>
            <div
              class="bg-white z-20 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14">
              <h6 class="font-semibold text-sm">Welcome</h6>
              <p class="text-sm text-gray-500 mt-1">To access account and manage orders</p>
              <button type='button'
                class="bg-transparent border border-gray-300 hover:border-pink-500 px-4 py-2 mt-4 text-sm text-pink-500 font-semibold">LOGIN
                / SIGNUP</button>
              <hr class="border-b-0 my-4" />
              <ul class="space-y-1.5">
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Order</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Wishlist</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Gift Cards</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Contact Us</a></li>
              </ul>
              <hr class="border-b-0 my-4" />
              <ul class="space-y-1.5">
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Coupons</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Saved Credits</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Contact Us</a></li>
                <li><a href='javascript:void(0)' class="text-sm text-gray-500 hover:text-pink-500">Saved Addresses</a>
                </li>
              </ul>
            </div>
          </li>
          <li
            class="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
            <div class="flex flex-col justify-center items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
              <span class="text-xs font-semibold mt-1">Wishlist</span>
            </div>
          </li>
          <li
            class="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
            <div class="flex flex-col justify-center items-center cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 489 489">
                <path
                  d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                  data-original="#000000" />
              </svg>
              <span class="text-xs font-semibold mt-1">Bag</span>
            </div>
          </li>
        </ul>

        <button id="toggleOpen" class='lg:hidden ml-7'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 20,
        image: "/header-block.dark-20.svg",
        demoUrl: "/demos/header-20",
        code: `
<header class='flex shadow-sm bg-white font-[sans-serif] min-h-[70px]'>
    <div
      class='flex flex-wrap items-center justify-between sm:px-10 px-6 py-3 relative lg:gap-y-4 gap-y-6 gap-x-4 w-full'>

      <div class="flex">
        <button id="toggleOpen">
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
        <a href="javascript:void(0)" class="ml-8"><img src="https://readymadeui.com/readymadeui.svg" alt="logo"
            class='w-36' />
        </a>
      </div>

      <div
        class="bg-gray-100 flex border-2 rounded max-md:order-1 border-transparent focus-within:border-blue-500 focus-within:bg-transparent px-4 rounded-sm h-11 lg:w-2/4 max-md:w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
          class="fill-gray-400 mr-4 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type='email' placeholder='Search...' class="w-full outline-none bg-transparent text-[#333] text-sm" />
      </div>

      <div class='flex items-center space-x-8 max-md:ml-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#333] hover:fill-[#077bff]"
          viewBox="0 0 511 511.999">
          <path
            d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
            data-original="#000000" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#333] hover:fill-[#077bff]"
          viewBox="0 0 371.263 371.263">
          <path
            d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
            data-original="#000000" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer fill-[#333] hover:fill-[#077bff]"
          viewBox="0 0 512 512">
          <path
            d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
            data-original="#000000" />
        </svg>
      </div>
    </div>

    <div id="collapseMenu"
      class='hidden before:fixed before:bg-black before:opacity-40 before:inset-0 max-lg:before:z-50'>
      <button id="toggleClose" class='fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </button>

      <ul
        class='block space-x-4 space-y-3 fixed bg-white w-1/2 min-w-[300px] top-0 left-0 p-4 h-full shadow-md overflow-auto z-50'>
        <li class='pb-4 px-3'>
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
          </a>
        </li>
        <li class='border-b pb-4 px-3 hidden'>
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
          </a>
        </li>
        <li class='border-b py-3 px-3'>
          <a href='javascript:void(0)' class='hover:text-[#007bff] text-[#007bff] block font-semibold text-base'>Home</a>
        </li>
        <li class='border-b py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-black block font-semibold text-base'>Team</a>
        </li>
        <li class='border-b py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-black block font-semibold text-base'>Feature</a>
        </li>
        <li class='border-b py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-black block font-semibold text-base'>Blog</a>
        </li>
        <li class='border-b py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-black block font-semibold text-base'>About</a>
        </li>
        <li class='border-b py-3 px-3'><a href='javascript:void(0)'
            class='hover:text-[#007bff] text-black block font-semibold text-base'>Contact</a>
        </li>
      </ul>
    </div>
  </header>
        `,
      },
    ],
  },
  {
    id: 1,
    icon: "",
    category: "Product-Card",
    items: [
      {
        id: 1,
        image: "/products-block.dark-1.png",
        demoUrl: "/demos/productGrid-1",
        code: `
      <div class="container mx-auto px-4 py-8">
        <div class="grid gap-2 md:gap-4 lg:gap-8 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p class="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>

          {/* <!-- Add more product cards as needed --> */}
          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p class="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>

          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p class="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>

          <a href="#" class="group block overflow-hidden">
            <div class="relative h-[350px] sm:h-[450px]">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
              />

              <img
                src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
                class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
              />
            </div>

            <div class="relative bg-white pt-3">
              <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                Limited Edition Sports Trainer
              </h3>

              <p class="mt-1.5 tracking-wide text-gray-900">$189.99</p>
            </div>
          </a>
        </div>
      </div>
        `,
      },
      {
        id: 2,
        image: "/products-block.dark-2.png",
        demoUrl: "/demos/productGrid-2",
        code: `
      <div class="bg-white">
        <div class="container mx-auto px-4 py-8">
        <div class="grid gap-2 md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
        `,
      },
      {
        id: 3,
        image: "/products-block.dark-3.png",
        demoUrl: "/demos/productGrid-3",
        code: `
      <div class="bg-white">
        <div class="container mx-auto px-4 py-8">
        <div class="grid gap-2 md:gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
          <a href="#" class="group block">
            <img
              src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
              class="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div class="mt-1.5">
              <p class="text-xs text-gray-500">Space Grey</p>

              <div class="mt-1.5 flex gap-1">
                <form>
                  <fieldset>
                    <legend class="sr-only">Color</legend>
                  </fieldset>

                  <div class="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                    <div>
                      <input type="checkbox" id="ColorSg" class="sr-only" />

                      <label
                        htmlFor="ColorSg"
                        class="block size-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Space Gray </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorS" class="sr-only" />

                      <label
                        htmlFor="ColorS"
                        class="block size-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Silver </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorP" class="sr-only" />

                      <label
                        htmlFor="ColorP"
                        class="block size-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorG" class="sr-only" />

                      <label
                        htmlFor="ColorG"
                        class="block size-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>

                    <div>
                      <input type="checkbox" id="ColorSb" class="sr-only" />

                      <label
                        htmlFor="ColorSb"
                        class="block size-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                      >
                        <span class="sr-only"> Pink </span>
                      </label>
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-3 flex justify-between text-sm">
                <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                  Small Headphones
                </h3>

                <p class="text-gray-900">$299</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      </div>
        `,
      },
    ],
  },
  {
    id: 1,
    icon: "",
    category: "Blog-Card",
    items: [
      {
        id: 1,
        image: "/blog-card-block.dark-1.png",
        demoUrl: "/demos/blog-card-1",
        code: `
      <div class="bg-white">
        <div class="container mx-auto px-4 py-8">
          <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  class="block text-xs text-gray-500"
                >
                  10th Oct 2022
                </time>

                <a href="#">
                  <h3 class="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm text-gray-500">
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
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  class="block text-xs text-gray-500"
                >
                  10th Oct 2022
                </time>

                <a href="#">
                  <h3 class="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>

            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <time
                  dateTime="2022-10-10"
                  class="block text-xs text-gray-500"
                >
                  10th Oct 2022
                </time>

                <a href="#">
                  <h3 class="mt-0.5 text-lg text-gray-900">
                    How to position your furniture for positivity
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm text-gray-500">
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
        `,
      },
      {
        id: 2,
        image: "/blog-card-block.dark-2.png",
        demoUrl: "/demos/blog-card-2",
        code: `
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <article className="group">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
            <article className="group">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>
              </div>
            </article>
            <article className="group">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />

              <div className="p-4">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Finding the Journey to Mordor
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
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
        `,
      },
      {
        id: 3,
        image: "/blog-card-block.dark-3.png",
        demoUrl: "/demos/blog-card-3",
        code: `
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>

                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>

                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
            <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-56 w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <a href="#">
                  <h3 className="text-lg font-medium text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi temporibus
                  nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque
                  explicabo tempora nisi culpa eius atque dignissimos. Molestias
                  explicabo corporis voluptatem?
                </p>

                <a
                  href="#"
                  className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                >
                  Find out more
                  <span
                    aria-hidden="true"
                    className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
        `,
      },
      {
        id: 4,
        image: "/blog-card-block.dark-4.png",
        demoUrl: "/demos/blog-card-4",
        code: `
      <div class="bg-white">
        <div class="container mx-auto px-4 py-8">
          <div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <article class="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <span class="inline-block rounded bg-blue-600 p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>

              <a href="#">
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>

              <a
                href="#"
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </article>
            <article class="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <span class="inline-block rounded bg-blue-600 p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>

              <a href="#">
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>

              <a
                href="#"
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </article>
            <article class="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
              <span class="inline-block rounded bg-blue-600 p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>

              <a href="#">
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </h3>
              </a>

              <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Recusandae dolores, possimus pariatur animi temporibus nesciunt
                praesentium dolore sed nulla ipsum eveniet corporis quidem,
                mollitia itaque minus soluta, voluptates neque explicabo tempora
                nisi culpa eius atque dignissimos. Molestias explicabo corporis
                voluptatem?
              </p>

              <a
                href="#"
                class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Find out more
                <span
                  aria-hidden="true"
                  class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </article>
          </div>
        </div>
      </div>
        `,
      },
      {
        id: 5,
        image: "/blog-card-block.dark-5.png",
        demoUrl: "/demos/blog-card-5",
        code: `
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
            <article className="flex bg-white transition hover:shadow-xl">
              <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time
                  dateTime="2022-10-10"
                  className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                >
                  <span>2022</span>
                  <span className="w-px flex-1 bg-gray-900/10"></span>
                  <span>Oct 10</span>
                </time>
              </div>

              <div className="hidden sm:block sm:basis-56">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  className="aspect-square h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                  <a href="#">
                    <h3 className="font-bold uppercase text-gray-900">
                      Finding the right guitar for your style - 5 tips
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end">
                  <a
                    href="#"
                    className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
        `,
      },
      {
        id: 6,
        image: "/blog-card-block.dark-6.png",
        demoUrl: "/demos/blog-card-6",
        code: `
  <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time
                    dateTime="2022-10-10"
                    className="block text-xs text-white/90"
                  >
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time
                    dateTime="2022-10-10"
                    className="block text-xs text-white/90"
                  >
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time
                    dateTime="2022-10-10"
                    className="block text-xs text-white/90"
                  >
                    {" "}
                    10th Oct 2022{" "}
                  </time>

                  <a href="#">
                    <h3 className="mt-0.5 text-lg text-white">
                      How to position your furniture for positivity
                    </h3>
                  </a>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae dolores, possimus pariatur animi temporibus
                    nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                    quidem, mollitia itaque minus soluta, voluptates neque
                    explicabo tempora nisi culpa eius atque dignissimos.
                    Molestias explicabo corporis voluptatem?
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
        `,
      },
    ],
  },
];

export default componentsData;
