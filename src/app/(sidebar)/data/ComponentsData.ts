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
        `
      }
    ]
  }
];

export default componentsData;
