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

        <ul class='lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8'>
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
        class="bg-gray-100 flex border-2  max-md:order-1 border-transparent focus-within:border-blue-500 focus-within:bg-transparent px-4 rounded-sm h-11 lg:w-2/4 max-md:w-full">
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
      {
        id: 21,
        image: "/header-block.dark-21.svg",
        demoUrl: "/demos/header-21",
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
        class="bg-gray-100 flex border-2  max-md:order-1 border-transparent focus-within:border-blue-500 focus-within:bg-transparent px-4 rounded-sm h-11 lg:w-2/4 max-md:w-full">
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
      {
        id: 22,
        image: "/header-block.dark-22.svg",
        demoUrl: "/demos/header-22",
        code: `
<header class='flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap lg:items-center max-lg:flex-col gap-6 w-full'>

      <div class='flex space-x-8'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer" viewBox="0 0 512 512">
          <path fill="#03a9f4"
            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
            data-original="#03a9f4" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer" viewBox="0 0 512 512">
          <path fill="#1877f2"
            d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
            data-original="#1877f2" />
          <path fill="#fff"
            d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
            data-original="#ffffff" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer" viewBox="0 0 24 24">
          <linearGradient id="a" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"
            gradientTransform="matrix(0 -1.98 -1.84 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fd5" />
            <stop offset=".5" stop-color="#ff543e" />
            <stop offset="1" stop-color="#c837ab" />
          </linearGradient>
          <path fill="url(#a)"
            d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z"
            data-original="url(#a)" />
          <path fill="#fff"
            d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
            data-original="#ffffff" />
        </svg>
      </div>

      <div class="flex flex-wrap items-center lg:ml-auto relative max-lg:gap-4">
        <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
        </a>

        <div id="collapseMenu"
          class="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
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
            class='lg:ml-12 lg:!flex lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li class='mb-6 hidden max-lg:block'>
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
              </a>
            </li>
            <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Documentation</a>
            </li>
            <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Examples</a>
            </li>
            <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Icons</a>
            </li>
            <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Themes</a>
            </li>
            <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
                class='hover:text-[#007bff] text-[#333] block font-semibold text-[15px]'>Blog</a>
            </li>
          </ul>
        </div>

        <ul class="flex items-center lg:ml-12 space-x-5 max-lg:ml-auto">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
              class="cursor-pointer fill-[#000] hover:fill-[#007bff]">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
          </li>
          <li>
            <span class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px"
                class="cursor-pointer fill-[#000] hover:fill-[#007bff] inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000" />
              </svg>
              <span
                class="absolute left-auto -ml-1.5 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
            </span>
          </li>
          <li class="lg:hidden">
            <button id="toggleOpen">
              <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 23,
        image: "/header-block.dark-23.svg",
        demoUrl: "/demos/header-23",
        code: `
<header class='font-[sans-serif] min-h-[60px] tracking-wide relative z-50'>
    <section class="bg-[#004d66] min-h-[40px] px-4 py-2 sm:px-10 flex items-center max-sm:flex-col">
      <button type="button" class="text-white text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" class="mr-3 inline-block"
          viewBox="0 0 482.6 482.6">
          <path
            d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
            data-original="#000000"></path>
        </svg>
        +180-548-2588
      </button>
      <span class="border-l h-3 mx-6 max-sm:hidden"></span>
      <button type="button" class="text-white text-sm max-sm:my-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="#fff" class="mr-3 inline-block"
          viewBox="0 0 479.058 479.058">
          <path
            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
            data-original="#000000"></path>
        </svg>
        info@example.com
      </button>
      <div class="sm:ml-auto text-white">
        <a href="javscript:void(0)" class="text-white text-sm mr-1">Sign In</a>
        /
        <a href="javscript:void(0)" class="text-white text-sm ml-1">Sign Up</a>
      </div>
    </section>

    <div class='flex flex-wrap items-center justify-between py-3 px-4 sm:px-10 bg-[#151d20] lg:gap-y-4 gap-y-6 gap-x-4'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
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
          class='lg:!flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo"
                class='w-36' />
            </a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Shopping</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Tracking</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Support</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Account</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Places</a>
          </li>
          <li
            class='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
            <a href='javascript:void(0)' class='text-white block text-[15px] font-medium'>Contact</a>
          </li>
        </ul>
      </div>

      <div class='flex items-center max-sm:ml-auto'>
        <ul class="flex space-x-4">
          <li
            class="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" class="cursor-pointer fill-white"
              viewBox="0 0 512 512">
              <path
                d="M437.02 74.981C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.981C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.019C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.019zM256 482c-66.869 0-127.037-29.202-168.452-75.511C113.223 338.422 178.948 290 256 290c-49.706 0-90-40.294-90-90s40.294-90 90-90 90 40.294 90 90-40.294 90-90 90c77.052 0 142.777 48.422 168.452 116.489C383.037 452.798 322.869 482 256 482z"
                data-original="#000000" />
            </svg>
          </li>
          <li
            class="relative px-1 lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300">
            <span class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
                class="cursor-pointer fill-white inline-block" viewBox="0 0 512 512">
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"></path>
              </svg>
              <span class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
            </span>
          </li>
        </ul>

        <button id="toggleOpen" class='lg:hidden ml-6'>
          <svg class="w-7 h-7" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
        id: 24,
        image: "/header-block.dark-24.svg",
        demoUrl: "/demos/header-24",
        code: `
<header class='flex bg-[#121533] py-3 px-6 sm:px-10 font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap items-center justify-between gap-4 w-full'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
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
          class='lg:!flex lg:gap-x-6 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo"
                class='w-36' />
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)' class='text-gray-300 hover:text-white text-base flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511.999" fill="currentColor" class="w-4 h-4 mr-3">
                <path
                  d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 0 1-12.117 5.024h-22.72c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 0 0-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 0 1 256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0"
                  data-original="#000000" />
              </svg>
              Home
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)' class='text-gray-300 hover:text-white text-base flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 mr-3" viewBox="0 0 32 32">
                <path
                  d="M27.531 30h-8.062A2.472 2.472 0 0 1 17 27.531V17.469A2.472 2.472 0 0 1 19.469 15h8.062A2.472 2.472 0 0 1 30 17.469v10.062A2.472 2.472 0 0 1 27.531 30zm-8.062-13a.469.469 0 0 0-.469.469v10.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469V17.469a.469.469 0 0 0-.469-.469zm8.062-4h-8.062A2.472 2.472 0 0 1 17 10.531V4.469A2.472 2.472 0 0 1 19.469 2h8.062A2.472 2.472 0 0 1 30 4.469v6.062A2.472 2.472 0 0 1 27.531 13zm-8.062-9a.469.469 0 0 0-.469.469v6.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469V4.469A.469.469 0 0 0 27.531 4zm-6.938 13H4.469A2.472 2.472 0 0 1 2 14.531V4.469A2.472 2.472 0 0 1 4.469 2h8.062A2.472 2.472 0 0 1 15 4.469v10.062A2.472 2.472 0 0 1 12.531 17zM4.469 4A.469.469 0 0 0 4 4.469v10.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469V4.469A.469.469 0 0 0 12.531 4zm8.062 26H4.469A2.472 2.472 0 0 1 2 27.531v-6.062A2.472 2.472 0 0 1 4.469 19h8.062A2.472 2.472 0 0 1 15 21.469v6.062A2.472 2.472 0 0 1 12.531 30zm-8.062-9a.469.469 0 0 0-.469.469v6.062c0 .259.21.469.469.469h8.062c.259 0 .469-.21.469-.469v-6.062a.469.469 0 0 0-.469-.469z"
                  data-original="#000000" />
              </svg>
              Dashboard
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)' class='text-gray-300 hover:text-white text-base flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-4 h-4 mr-3" viewBox="0 0 512 512">
                <path
                  d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                  data-original="#000000"></path>
              </svg>
              Profile
            </a>
          </li>
          <li class='max-lg:border-b max-lg:py-3 px-3'>
            <a href='javascript:void(0)' class='text-gray-300 hover:text-white text-base flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="w-4 h-4 mr-3"
                viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40"
                    d="M256 334.666c-43.446 0-78.667-35.22-78.667-78.667 0-43.446 35.221-78.666 78.667-78.666 43.446 0 78.667 35.22 78.667 78.666 0 43.447-35.221 78.667-78.667 78.667Zm220.802-22.53-21.299-17.534c-24.296-20.001-24.296-57.204 0-77.205l21.299-17.534c7.548-6.214 9.497-16.974 4.609-25.441l-42.057-72.845c-4.889-8.467-15.182-12.159-24.337-8.729l-25.835 9.678c-29.469 11.04-61.688-7.561-66.862-38.602l-4.535-27.213c-1.607-9.643-9.951-16.712-19.727-16.712h-84.116c-9.776 0-18.12 7.069-19.727 16.712l-4.536 27.213c-5.173 31.041-37.392 49.642-66.861 38.602l-25.834-9.678c-9.156-3.43-19.449.262-24.338 8.729l-42.057 72.845c-4.888 8.467-2.939 19.227 4.609 25.441l21.3 17.534c24.295 20.001 24.295 57.204 0 77.205l-21.3 17.534c-7.548 6.214-9.497 16.974-4.609 25.441l42.057 72.845c4.889 8.467 15.182 12.159 24.338 8.729l25.834-9.678c29.469-11.04 61.688 7.561 66.861 38.602l4.536 27.213c1.607 9.643 9.951 16.711 19.727 16.711h84.116c9.776 0 18.12-7.068 19.727-16.711l4.535-27.213c5.174-31.041 37.393-49.642 66.862-38.602l25.835 9.678c9.155 3.43 19.448-.262 24.337-8.729l42.057-72.845c4.888-8.467 2.939-19.227-4.609-25.441z"
                    data-original="#000000" />
                </g>
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </div>

      <div class='flex items-center max-lg:ml-auto'>
        <input type="text" placeholder="Search something..."
          class="bg-transparent border-2 border-gray-300 text-sm w-full px-5 text-gray-300 rounded-full h-9 outline-none"></input>

        <button id="toggleOpen" class='lg:hidden ml-7'>
          <svg class="w-7 h-7 fill-gray-300" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
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
        id: 25,
        image: "/header-block.dark-25.svg",
        demoUrl: "/demos/header-25",
        code: `
<header class='bg-white font-[sans-serif] tracking-wide relative z-50'>
    <section
      class='flex items-center justify-between flex-wrap gap-4 relative py-3 px-10 border-gray-200 border-b min-h-[80px]'>
      <div class="flex items-center space-x-7 max-md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer" viewBox="0 0 512 512">
          <path fill="#03a9f4"
            d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
            data-original="#03a9f4" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer" viewBox="0 0 512 512">
          <path fill="#1877f2"
            d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
            data-original="#1877f2" />
          <path fill="#fff"
            d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
            data-original="#ffffff" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer" viewBox="0 0 24 24">
          <linearGradient id="a" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"
            gradientTransform="matrix(0 -1.98 -1.84 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fd5" />
            <stop offset=".5" stop-color="#ff543e" />
            <stop offset="1" stop-color="#c837ab" />
          </linearGradient>
          <path fill="url(#a)"
            d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z"
            data-original="url(#a)" />
          <path fill="#fff"
            d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
            data-original="#ffffff" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="cursor-pointer" viewBox="0 0 176 176">
          <g data-name="Layer 2">
            <g data-name="02.youtube">
              <path fill="#e60000"
                d="M144.52 173a532.59 532.59 0 0 1-113 0A32.07 32.07 0 0 1 3 144.52a532.59 532.59 0 0 1 0-113A32.07 32.07 0 0 1 31.48 3a532.59 532.59 0 0 1 113 0A32.07 32.07 0 0 1 173 31.48a532.59 532.59 0 0 1 0 113A32.07 32.07 0 0 1 144.52 173z"
                data-original="#e60000" />
              <path fill="#fff"
                d="M140.43 61.54c-2.2-6.77-9.48-10.87-16.18-11.81a343.16 343.16 0 0 0-72.5 0c-6.7.94-14 5-16.18 11.81a137.42 137.42 0 0 0 0 52.93c2.2 6.76 9.48 10.87 16.18 11.81a343.16 343.16 0 0 0 72.5 0c6.7-.94 14-5 16.18-11.81a137.42 137.42 0 0 0 0-52.93zm-65.59 47.54V66.92L109.16 88c-11.57 7.11-22.8 14-34.32 21.08z"
                data-original="#ffffff" />
            </g>
          </g>
        </svg>
      </div>
      <a href="javascript:void(0)" class="md:absolute md:left-2/4 md:-translate-x-2/4 max-md:mr-4"><img
          src="https://readymadeui.com/readymadeui.svg" alt="logo" class='md:w-[180px] w-36' />
      </a>

      <div class="flex items-center max-md:ml-auto">
        <span class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
            class="cursor-pointer fill-[#000] inline-block" viewBox="0 0 512 512">
            <path
              d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
              data-original="#000000"></path>
          </svg>
          <span class="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">2</span>
        </span>
        <button id="toggleOpen" class='ml-7 lg:hidden'>
          <svg class="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
    </section>

    <div id="collapseMenu"
      class='bg-[#213343] max-lg:hidden lg:!flex lg:items-center lg:justify-between lg:gap-y-4 lg:gap-x-10 lg:px-10 lg:py-2 max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
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
        class='lg:!flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li class='mb-6 hidden max-lg:block'>
          <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui-white.svg" alt="logo" class='w-36' />
          </a>
        </li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-[#FFA726] text-sm block'>Home</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-white text-sm block'>Team</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-white text-sm block'>Feature</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-white text-sm block'>Blog</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-white text-sm block'>About</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-white text-sm block'>Contact</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-white text-sm block'>Source</a></li>
        <li class='max-lg:border-b max-lg:py-3'><a href='javascript:void(0)'
            class='hover:text-[#FFA726] text-white text-sm block'>Store</a></li>
      </ul>

      <div class="bg-gray-100 flex px-6 rounded h-10 lg:w-2/6 w-full max-lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
          class="fill-gray-400 mr-3 rotate-90">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>
        <input type='email' placeholder='Search...' class="w-full outline-none bg-transparent text-[#333] text-sm" />
      </div>
    </div>
  </header>
        `,
      },
      {
        id: 26,
        image: "/header-block.dark-26.svg",
        demoUrl: "/demos/header-26",
        code: `
<header class='flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
    <div class='flex flex-wrap Store-center relative w-full'>
      <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
      </a>

      <div id="collapseMenu"
        class='max-lg:hidden lg:!flex lg:items-center lg:justify-between lg:gap-y-4 lg:gap-x-10 lg:px-10 lg:py-2 max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50'>
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
          class='lg:!flex lg:gap-x-10 lg:ml-24 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li class='group max-lg:border-b max-lg:py-2'>
            <a href='javascript:void(0)'
              class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>Browse<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <div
              class='absolute group-hover:grid shadow-lg bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-8 px-6 pb-4 py-4 lg:top-14 top-28 left-0 w-max z-50'>
              <ul class='space-y-3'>
                <li class="text-[#077bff] text-base font-semibold px-2">Store 1</li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                        data-original="#000000" />
                    </svg>
                    Furniture Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
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
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 407.7 407.7">
                      <path
                        d="M405.5 118.021a7.93 7.93 0 0 0-.29-.29l-84.16-74.8a7.994 7.994 0 0 0-2.64-1.6l-60.88-21.76a8 8 0 0 0-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 0 0-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 0 0 0 11.6l66.56 67.28v184a8 8 0 0 0 8 8h253.6a8 8 0 0 0 8-8v-184l66.56-67.28a8 8 0 0 0 .29-11.31zm-67.09 55.79v-37.12a8 8 0 0 0-16 0v235.52H84.73v-235.52a8 8 0 0 0-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
                        data-original="#000000" />
                    </svg>
                    Fashion Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M434.1 243.904h-5.955a95.572 95.572 0 0 1-61.022-22.072l-117.812-98.055a49.716 49.716 0 0 0-31.743-11.481c-27.361 0-49.621 22.26-49.621 49.621v11.586c0 22.572-18.364 40.937-40.937 40.937-15.844 0-30.407-9.279-37.102-23.639l-3.261-6.995c-7.434-15.944-23.604-26.246-41.195-26.246C20.39 157.56 0 177.949 0 203.012v118.792c0 42.954 34.946 77.9 77.9 77.9h356.2c42.954 0 77.9-34.946 77.9-77.9 0-42.954-34.946-77.9-77.9-77.9zm0 125.8H77.9c-17.829 0-33.403-9.799-41.65-24.287h439.5c-8.247 14.488-23.821 24.287-41.65 24.287zM30 315.419V203.012c0-8.521 6.932-15.452 15.452-15.452 5.98 0 11.478 3.503 14.005 8.923l3.261 6.994c11.601 24.884 36.837 40.963 64.293 40.963 39.115 0 70.937-31.822 70.937-70.937v-11.586c0-10.819 8.802-19.621 19.621-19.621a19.66 19.66 0 0 1 12.552 4.54l28.901 24.055-32.93 32.93 21.213 21.213 34.872-34.871 13.031 10.846-31.444 31.444 21.213 21.213 33.386-33.385 13.031 10.846-29.958 29.958 21.213 21.213 32.115-32.115c21.284 15.35 47.024 23.723 73.383 23.723h5.955c24.246 0 44.328 18.112 47.461 41.513H30z"
                        data-original="#000000" />
                    </svg>
                    Shoes Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M482 303.58V256c0-124.115-101.728-225-226-225C131.875 31 30 131.728 30 256v47.58C12.541 309.772 0 326.445 0 346v60c0 24.813 20.187 45 45 45h17.58c6.192 17.458 22.865 30 42.42 30h30c24.813 0 45-20.187 45-45V316c0-24.813-20.187-45-45-45h-30c-19.555 0-36.228 12.542-42.42 30H60v-45c0-7.463.439-14.826 1.263-22.073 7.08 4.577 15.395 7.073 24.231 7.073 18.909 0 35.847-11.944 42.145-29.72C146.772 157.281 198.356 121 256 121c57.643 0 109.227 36.281 128.36 90.279C390.658 229.056 407.596 241 426.505 241c8.836 0 17.152-2.496 24.232-7.074A195.071 195.071 0 0 1 452 256v45h-2.58c-6.192-17.458-22.865-30-42.42-30h-30c-24.813 0-45 20.187-45 45v120c0 24.813 20.187 45 45 45h30c19.555 0 36.228-12.542 42.42-30H467c24.813 0 45-20.187 45-45v-60c0-19.555-12.541-36.228-30-42.42zM90 316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316zM60 421H45c-8.271 0-15-6.729-15-15v-60c0-8.271 6.729-15 15-15h15v90zm366.505-210c-6.23 0-11.803-3.914-13.867-9.74C389.588 136.208 326.927 91 256 91c-70.85 0-133.566 45.145-156.639 110.261-2.064 5.825-7.636 9.739-13.867 9.739-10.594 0-17.524-10.619-13.919-20.72C98.431 115.036 171.177 61 256 61c84.952 0 157.597 54.152 184.424 129.28 3.608 10.11-3.336 20.72-13.919 20.72zM422 436c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120zm60-30c0 8.271-6.729 15-15 15h-15v-90h15c8.271 0 15 6.729 15 15v60z"
                        data-original="#000000" />
                    </svg>
                    Headphones
                  </a>
                </li>
              </ul>
              <ul class='space-y-3'>
                <li class="text-[#077bff] text-base font-semibold px-2">Store 2</li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                        data-original="#000000" />
                    </svg>
                    Furniture Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
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
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 407.7 407.7">
                      <path
                        d="M405.5 118.021a7.93 7.93 0 0 0-.29-.29l-84.16-74.8a7.994 7.994 0 0 0-2.64-1.6l-60.88-21.76a8 8 0 0 0-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 0 0-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 0 0 0 11.6l66.56 67.28v184a8 8 0 0 0 8 8h253.6a8 8 0 0 0 8-8v-184l66.56-67.28a8 8 0 0 0 .29-11.31zm-67.09 55.79v-37.12a8 8 0 0 0-16 0v235.52H84.73v-235.52a8 8 0 0 0-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
                        data-original="#000000" />
                    </svg>
                    Fashion Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M434.1 243.904h-5.955a95.572 95.572 0 0 1-61.022-22.072l-117.812-98.055a49.716 49.716 0 0 0-31.743-11.481c-27.361 0-49.621 22.26-49.621 49.621v11.586c0 22.572-18.364 40.937-40.937 40.937-15.844 0-30.407-9.279-37.102-23.639l-3.261-6.995c-7.434-15.944-23.604-26.246-41.195-26.246C20.39 157.56 0 177.949 0 203.012v118.792c0 42.954 34.946 77.9 77.9 77.9h356.2c42.954 0 77.9-34.946 77.9-77.9 0-42.954-34.946-77.9-77.9-77.9zm0 125.8H77.9c-17.829 0-33.403-9.799-41.65-24.287h439.5c-8.247 14.488-23.821 24.287-41.65 24.287zM30 315.419V203.012c0-8.521 6.932-15.452 15.452-15.452 5.98 0 11.478 3.503 14.005 8.923l3.261 6.994c11.601 24.884 36.837 40.963 64.293 40.963 39.115 0 70.937-31.822 70.937-70.937v-11.586c0-10.819 8.802-19.621 19.621-19.621a19.66 19.66 0 0 1 12.552 4.54l28.901 24.055-32.93 32.93 21.213 21.213 34.872-34.871 13.031 10.846-31.444 31.444 21.213 21.213 33.386-33.385 13.031 10.846-29.958 29.958 21.213 21.213 32.115-32.115c21.284 15.35 47.024 23.723 73.383 23.723h5.955c24.246 0 44.328 18.112 47.461 41.513H30z"
                        data-original="#000000" />
                    </svg>
                    Shoes Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M482 303.58V256c0-124.115-101.728-225-226-225C131.875 31 30 131.728 30 256v47.58C12.541 309.772 0 326.445 0 346v60c0 24.813 20.187 45 45 45h17.58c6.192 17.458 22.865 30 42.42 30h30c24.813 0 45-20.187 45-45V316c0-24.813-20.187-45-45-45h-30c-19.555 0-36.228 12.542-42.42 30H60v-45c0-7.463.439-14.826 1.263-22.073 7.08 4.577 15.395 7.073 24.231 7.073 18.909 0 35.847-11.944 42.145-29.72C146.772 157.281 198.356 121 256 121c57.643 0 109.227 36.281 128.36 90.279C390.658 229.056 407.596 241 426.505 241c8.836 0 17.152-2.496 24.232-7.074A195.071 195.071 0 0 1 452 256v45h-2.58c-6.192-17.458-22.865-30-42.42-30h-30c-24.813 0-45 20.187-45 45v120c0 24.813 20.187 45 45 45h30c19.555 0 36.228-12.542 42.42-30H467c24.813 0 45-20.187 45-45v-60c0-19.555-12.541-36.228-30-42.42zM90 316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316zM60 421H45c-8.271 0-15-6.729-15-15v-60c0-8.271 6.729-15 15-15h15v90zm366.505-210c-6.23 0-11.803-3.914-13.867-9.74C389.588 136.208 326.927 91 256 91c-70.85 0-133.566 45.145-156.639 110.261-2.064 5.825-7.636 9.739-13.867 9.739-10.594 0-17.524-10.619-13.919-20.72C98.431 115.036 171.177 61 256 61c84.952 0 157.597 54.152 184.424 129.28 3.608 10.11-3.336 20.72-13.919 20.72zM422 436c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120zm60-30c0 8.271-6.729 15-15 15h-15v-90h15c8.271 0 15 6.729 15 15v60z"
                        data-original="#000000" />
                    </svg>
                    Headphones
                  </a>
                </li>
              </ul>
              <ul class='space-y-3'>
                <li class="text-[#077bff] text-base font-semibold px-2">Store 3</li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                        data-original="#000000" />
                    </svg>
                    Furniture Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
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
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 407.7 407.7">
                      <path
                        d="M405.5 118.021a7.93 7.93 0 0 0-.29-.29l-84.16-74.8a7.994 7.994 0 0 0-2.64-1.6l-60.88-21.76a8 8 0 0 0-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 0 0-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 0 0 0 11.6l66.56 67.28v184a8 8 0 0 0 8 8h253.6a8 8 0 0 0 8-8v-184l66.56-67.28a8 8 0 0 0 .29-11.31zm-67.09 55.79v-37.12a8 8 0 0 0-16 0v235.52H84.73v-235.52a8 8 0 0 0-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
                        data-original="#000000" />
                    </svg>
                    Fashion Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M434.1 243.904h-5.955a95.572 95.572 0 0 1-61.022-22.072l-117.812-98.055a49.716 49.716 0 0 0-31.743-11.481c-27.361 0-49.621 22.26-49.621 49.621v11.586c0 22.572-18.364 40.937-40.937 40.937-15.844 0-30.407-9.279-37.102-23.639l-3.261-6.995c-7.434-15.944-23.604-26.246-41.195-26.246C20.39 157.56 0 177.949 0 203.012v118.792c0 42.954 34.946 77.9 77.9 77.9h356.2c42.954 0 77.9-34.946 77.9-77.9 0-42.954-34.946-77.9-77.9-77.9zm0 125.8H77.9c-17.829 0-33.403-9.799-41.65-24.287h439.5c-8.247 14.488-23.821 24.287-41.65 24.287zM30 315.419V203.012c0-8.521 6.932-15.452 15.452-15.452 5.98 0 11.478 3.503 14.005 8.923l3.261 6.994c11.601 24.884 36.837 40.963 64.293 40.963 39.115 0 70.937-31.822 70.937-70.937v-11.586c0-10.819 8.802-19.621 19.621-19.621a19.66 19.66 0 0 1 12.552 4.54l28.901 24.055-32.93 32.93 21.213 21.213 34.872-34.871 13.031 10.846-31.444 31.444 21.213 21.213 33.386-33.385 13.031 10.846-29.958 29.958 21.213 21.213 32.115-32.115c21.284 15.35 47.024 23.723 73.383 23.723h5.955c24.246 0 44.328 18.112 47.461 41.513H30z"
                        data-original="#000000" />
                    </svg>
                    Shoes Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M482 303.58V256c0-124.115-101.728-225-226-225C131.875 31 30 131.728 30 256v47.58C12.541 309.772 0 326.445 0 346v60c0 24.813 20.187 45 45 45h17.58c6.192 17.458 22.865 30 42.42 30h30c24.813 0 45-20.187 45-45V316c0-24.813-20.187-45-45-45h-30c-19.555 0-36.228 12.542-42.42 30H60v-45c0-7.463.439-14.826 1.263-22.073 7.08 4.577 15.395 7.073 24.231 7.073 18.909 0 35.847-11.944 42.145-29.72C146.772 157.281 198.356 121 256 121c57.643 0 109.227 36.281 128.36 90.279C390.658 229.056 407.596 241 426.505 241c8.836 0 17.152-2.496 24.232-7.074A195.071 195.071 0 0 1 452 256v45h-2.58c-6.192-17.458-22.865-30-42.42-30h-30c-24.813 0-45 20.187-45 45v120c0 24.813 20.187 45 45 45h30c19.555 0 36.228-12.542 42.42-30H467c24.813 0 45-20.187 45-45v-60c0-19.555-12.541-36.228-30-42.42zM90 316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316zM60 421H45c-8.271 0-15-6.729-15-15v-60c0-8.271 6.729-15 15-15h15v90zm366.505-210c-6.23 0-11.803-3.914-13.867-9.74C389.588 136.208 326.927 91 256 91c-70.85 0-133.566 45.145-156.639 110.261-2.064 5.825-7.636 9.739-13.867 9.739-10.594 0-17.524-10.619-13.919-20.72C98.431 115.036 171.177 61 256 61c84.952 0 157.597 54.152 184.424 129.28 3.608 10.11-3.336 20.72-13.919 20.72zM422 436c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120zm60-30c0 8.271-6.729 15-15 15h-15v-90h15c8.271 0 15 6.729 15 15v60z"
                        data-original="#000000" />
                    </svg>
                    Headphones
                  </a>
                </li>
              </ul>
              <ul class='space-y-3'>
                <li class="text-[#077bff] text-base font-semibold px-2">Store 4</li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 64 64">
                      <path
                        d="M61.92 30.93a7.076 7.076 0 0 0-6.05-5.88 8.442 8.442 0 0 0-.87-.04V22A15.018 15.018 0 0 0 40 7H24A15.018 15.018 0 0 0 9 22v3.01a8.442 8.442 0 0 0-.87.04 7.076 7.076 0 0 0-6.05 5.88A6.95 6.95 0 0 0 7 38.7V52a3.009 3.009 0 0 0 3 3v6a1 1 0 0 0 1 1h3a1 1 0 0 0 .96-.73L16.75 55h30.5l1.79 6.27A1 1 0 0 0 50 62h3a1 1 0 0 0 1-1v-6a3.009 3.009 0 0 0 3-3V38.7a6.95 6.95 0 0 0 4.92-7.77ZM11 22A13.012 13.012 0 0 1 24 9h16a13.012 13.012 0 0 1 13 13v3.3a6.976 6.976 0 0 0-5 6.7v3.18a3 3 0 0 0-1-.18H17a3 3 0 0 0-1 .18V32a6.976 6.976 0 0 0-5-6.7Zm37 16v5H16v-5a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1ZM13.25 60H12v-5h2.67ZM52 60h-1.25l-1.42-5H52Zm3.83-23.08a1.008 1.008 0 0 0-.83.99V52a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V37.91a1.008 1.008 0 0 0-.83-.99 4.994 4.994 0 0 1 .2-9.88A4.442 4.442 0 0 1 9 27h.01a4.928 4.928 0 0 1 3.3 1.26A5.007 5.007 0 0 1 14 32v12a1 1 0 0 0 1 1h34a1 1 0 0 0 1-1V32a5.007 5.007 0 0 1 1.69-3.74 4.932 4.932 0 0 1 3.94-1.22 5.018 5.018 0 0 1 4.31 4.18v.01a4.974 4.974 0 0 1-4.11 5.69Z"
                        data-original="#000000" />
                    </svg>
                    Furniture Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
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
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-3 inline-block"
                      viewBox="0 0 407.7 407.7">
                      <path
                        d="M405.5 118.021a7.93 7.93 0 0 0-.29-.29l-84.16-74.8a7.994 7.994 0 0 0-2.64-1.6l-60.88-21.76a8 8 0 0 0-10.72 7.12c0 1.76-2.64 42.32-43.2 42.96-40.8-.64-43.36-41.2-43.44-42.96a8 8 0 0 0-10.64-7.12l-60.8 22c-.976.357-1.872.9-2.64 1.6l-83.6 74.56a8 8 0 0 0 0 11.6l66.56 67.28v184a8 8 0 0 0 8 8h253.6a8 8 0 0 0 8-8v-184l66.56-67.28a8 8 0 0 0 .29-11.31zm-67.09 55.79v-37.12a8 8 0 0 0-16 0v235.52H84.73v-235.52a8 8 0 0 0-16 0v37.2l-49.2-49.84 76.16-68.16 50.08-18.08c6.204 31.966 37.147 52.851 69.113 46.647 23.607-4.582 42.065-23.04 46.647-46.647l50.08 18.08 75.92 68.16-49.12 49.76z"
                        data-original="#000000" />
                    </svg>
                    Fashion Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M434.1 243.904h-5.955a95.572 95.572 0 0 1-61.022-22.072l-117.812-98.055a49.716 49.716 0 0 0-31.743-11.481c-27.361 0-49.621 22.26-49.621 49.621v11.586c0 22.572-18.364 40.937-40.937 40.937-15.844 0-30.407-9.279-37.102-23.639l-3.261-6.995c-7.434-15.944-23.604-26.246-41.195-26.246C20.39 157.56 0 177.949 0 203.012v118.792c0 42.954 34.946 77.9 77.9 77.9h356.2c42.954 0 77.9-34.946 77.9-77.9 0-42.954-34.946-77.9-77.9-77.9zm0 125.8H77.9c-17.829 0-33.403-9.799-41.65-24.287h439.5c-8.247 14.488-23.821 24.287-41.65 24.287zM30 315.419V203.012c0-8.521 6.932-15.452 15.452-15.452 5.98 0 11.478 3.503 14.005 8.923l3.261 6.994c11.601 24.884 36.837 40.963 64.293 40.963 39.115 0 70.937-31.822 70.937-70.937v-11.586c0-10.819 8.802-19.621 19.621-19.621a19.66 19.66 0 0 1 12.552 4.54l28.901 24.055-32.93 32.93 21.213 21.213 34.872-34.871 13.031 10.846-31.444 31.444 21.213 21.213 33.386-33.385 13.031 10.846-29.958 29.958 21.213 21.213 32.115-32.115c21.284 15.35 47.024 23.723 73.383 23.723h5.955c24.246 0 44.328 18.112 47.461 41.513H30z"
                        data-original="#000000" />
                    </svg>
                    Shoes Store
                  </a>
                </li>
                <li class='hover:bg-gray-100'>
                  <a href='javascript:void(0)'
                    class='px-3 py-2 hover:text-[#007bff] hover:fill-[#007bff] text-gray-500 text-[15px] font-semibold block'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" class="mr-2 inline-block"
                      viewBox="0 0 512 512">
                      <path
                        d="M482 303.58V256c0-124.115-101.728-225-226-225C131.875 31 30 131.728 30 256v47.58C12.541 309.772 0 326.445 0 346v60c0 24.813 20.187 45 45 45h17.58c6.192 17.458 22.865 30 42.42 30h30c24.813 0 45-20.187 45-45V316c0-24.813-20.187-45-45-45h-30c-19.555 0-36.228 12.542-42.42 30H60v-45c0-7.463.439-14.826 1.263-22.073 7.08 4.577 15.395 7.073 24.231 7.073 18.909 0 35.847-11.944 42.145-29.72C146.772 157.281 198.356 121 256 121c57.643 0 109.227 36.281 128.36 90.279C390.658 229.056 407.596 241 426.505 241c8.836 0 17.152-2.496 24.232-7.074A195.071 195.071 0 0 1 452 256v45h-2.58c-6.192-17.458-22.865-30-42.42-30h-30c-24.813 0-45 20.187-45 45v120c0 24.813 20.187 45 45 45h30c19.555 0 36.228-12.542 42.42-30H467c24.813 0 45-20.187 45-45v-60c0-19.555-12.541-36.228-30-42.42zM90 316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316zM60 421H45c-8.271 0-15-6.729-15-15v-60c0-8.271 6.729-15 15-15h15v90zm366.505-210c-6.23 0-11.803-3.914-13.867-9.74C389.588 136.208 326.927 91 256 91c-70.85 0-133.566 45.145-156.639 110.261-2.064 5.825-7.636 9.739-13.867 9.739-10.594 0-17.524-10.619-13.919-20.72C98.431 115.036 171.177 61 256 61c84.952 0 157.597 54.152 184.424 129.28 3.608 10.11-3.336 20.72-13.919 20.72zM422 436c0 8.271-6.729 15-15 15h-30c-8.271 0-15-6.729-15-15V316c0-8.271 6.729-15 15-15h30c8.271 0 15 6.729 15 15v120zm60-30c0 8.271-6.729 15-15 15h-15v-90h15c8.271 0 15 6.729 15 15v60z"
                        data-original="#000000" />
                    </svg>
                    Headphones
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-500 text-[15px] font-semibold block'>Jobs</a></li>
          <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-500 text-[15px] font-semibold block'>Livestreams</a></li>
          <li class='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
              class='hover:text-[#007bff] text-gray-500 text-[15px] font-semibold block'>About</a></li>
        </ul>
      </div>

      <button id="toggleOpen" class='lg:hidden ml-auto'>
        <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
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
        </div>
      </div>
      </div>
        `,
      },
      {
        id: 4,
        image: "/products-block.dark-4.png",
        demoUrl: "/demos/productGrid-4",
        code: `
<div class="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium Threads</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product1.webp" alt="Product 1"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Lexicon Luxe | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$10</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product2.webp" alt="Product 2"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Adjective Attire | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$12</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product3.webp" alt="Product 3"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">ThreadCraft Vibes | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$14</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product7.webp" alt="Product 3"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Verbal Vogue Tees | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$12</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product5.webp" alt="Product 3"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Jargon Jungle | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$15</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
          <div class="w-full aspect-w-16 aspect-h-8 lg:h-80">
            <img src="https://readymadeui.com/images/product6.webp" alt="Product 3"
              class="h-full w-full object-cover object-top" />
          </div>

          <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800">Syllable Streetwear | T-shirt</h3>
            <div class="mt-4 flex items-center flex-wrap gap-2">
              <h4 class="text-lg font-bold text-gray-800">$14</h4>

              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        `,
      },
      {
        id: 5,
        image: "/products-block.dark-5.png",
        demoUrl: "/demos/productGrid-5",
        code: `
<div class="font-[sans-serif] bg-gray-100">
      <div class="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product9.webp" alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Sole Elegance</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$10</h4>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product10.webp" alt="Product 2"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Urban Sneakers</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$12</h4>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product11.webp" alt="Product 3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Velvet Boots</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$14</h4>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product12.webp" alt="Product 3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Summit Hiking</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$12</h4>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product13.webp" alt="Product 3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Zenith Glow</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$15</h4>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product14.webp" alt="Product 3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Echo Elegance</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$14</h4>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product15.webp" alt="Product 3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Pumps</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$14</h4>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg>
            </div>

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src="https://readymadeui.com/images/product10.webp" alt="Product 3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">Blaze Burst</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-gray-800 font-bold mt-4">$14</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
        `,
      },
      {
        id: 6,
        image: "/products-block.dark-6.png",
        demoUrl: "/demos/productGrid-6",
        code: `
<div class="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>

          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product9.webp" alt="Product 1"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Sole Elegance</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$10.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product10.webp" alt="Product 2"
              class="h-full w-full object-contain" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Urban Sneakers</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$12.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product11.webp" alt="Product 3"
              class="h-full w-full object-contain" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Velvet Boots</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$14.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product12.webp" alt="Product 3"
              class="h-full w-full object-contain" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Summit Hiking</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$12.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product13.webp" alt="Product 3"
              class="h-full w-full object-contain" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Zenith Glow</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$15.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product14.webp" alt="Product 3"
              class="h-full w-full object-contain" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Echo Elegance</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$14.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product15.webp" alt="Product 3"
              class="h-full w-full object-contain" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Pumps</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$14.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div
          class="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          <div
            class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-3 right-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
          <div class="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product10.webp" alt="Product 3"
              class="h-full w-full object-contain" />
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-lg font-bold text-gray-800">Blaze Burst</h3>
            <h4 class="text-lg text-gray-800 font-bold mt-2">$14.5</h4>
            <p class="text-gray-600 text-sm mt-2">5 types of shoos available</p>

            <div class="flex space-x-2 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
        `,
      },
      {
        id: 7,
        image: "/products-block.dark-7.png",
        demoUrl: "/demos/productGrid-7",
        code: `
      <div class="font-[sans-serif] py-4 mx-auto lg:max-w-6xl max-w-lg md:max-w-full">
        <h2 class="text-4xl font-extrabold text-gray-800 mb-12">
          Coffee store
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>

              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee1.webp"
                  alt="Product 1"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>

            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Espresso Elegante
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $10 <del class="text-gray-400 ml-2 font-medium">$15</del>
              </h4>

              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>

              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee8.webp"
                  alt="Product 2"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>

            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">Mocha Madness</h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $12 <del class="text-gray-400 ml-2 font-medium">$17</del>
              </h4>

              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee3.webp"
                  alt="Product 3"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Caramel Cream Delight
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $14 <del class="text-gray-400 ml-2 font-medium">$19</del>
              </h4>
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee4.webp"
                  alt="Product 3"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Hazelnut Heaven Blend
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $12 <del class="text-gray-400 ml-2 font-medium">$17</del>
              </h4>
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee5.webp"
                  alt="Product 3"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Vanilla Velvet Brew
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $15 <del class="text-gray-400 ml-2 font-medium">$20</del>
              </h4>
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee6.webp"
                  alt="Product 3"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Double Shot Symphony
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $14 <del class="text-gray-400 ml-2 font-medium">$19</del>
              </h4>
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee7.webp"
                  alt="Product 3"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Irish Cream Dream
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $11 <del class="text-gray-400 ml-2 font-medium">$16</del>
              </h4>
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee8.webp"
                  alt="Product 3"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Coconut Bliss Coffee
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $13 <del class="text-gray-400 ml-2 font-medium">$18</del>
              </h4>
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>

          <div class="bg-gray-200 rounded-xl cursor-pointer hover:scale-[1.03] transition-all relative overflow-hidden">
            <div class="p-6">
              <div class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-gray-800 inline-block"
                  viewBox="0 0 64 64"
                >
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
              <div class="w-2/3 h-[220px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
                <img
                  src="https://readymadeui.com/images/coffee1.webp"
                  alt="Product 1"
                  class="h-full w-full object-contain"
                />
              </div>
            </div>
            <div class="text-center bg-gray-100 p-6">
              <h3 class="text-lg font-bold text-gray-800">
                Espresso Elegante
              </h3>
              <h4 class="text-lg text-gray-800 font-bold mt-6">
                $10 <del class="text-gray-400 ml-2 font-medium">$15</del>
              </h4>
              <button
                type="button"
                class="w-full flex items-center justify-center gap-3 mt-6 px-6 py-3 bg-yellow-400 text-base text-gray-800 font-semibold rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                    data-original="#000000"
                  ></path>
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
        `,
      },
      {
        id: 8,
        image: "/products-block.dark-8.png",
        demoUrl: "/demos/productGrid-8",
        code: `
  <div class="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Glasses</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <div
          class="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
          <div class="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
            <img src="https://readymadeui.com/images/sunglass1.webp" alt="sunglass1"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800">Golden Glass Wear</h3>
            <div class="flex items-center justify-between mt-6">
              <div
                class="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <h4 class="text-lg text-gray-800 font-bold">$10.5</h4>
            </div>
          </div>
        </div>

        <div
          class="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
          <div class="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
            <img src="https://readymadeui.com/images/sunglass2.webp" alt="sunglass2"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800">Blue Glass Wear</h3>
            <div class="flex items-center justify-between mt-6">
              <div
                class="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <h4 class="text-lg text-gray-800 font-bold">$9</h4>
            </div>
          </div>
        </div>

        <div
          class="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
          <div class="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
            <img src="https://readymadeui.com/images/sunglass5.webp" alt="sunglass3"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800">Black Glass Wear</h3>
            <div class="flex items-center justify-between mt-6">
              <div
                class="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <h4 class="text-lg text-gray-800 font-bold">$16</h4>
            </div>
          </div>
        </div>

        <div
          class="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
          <div class="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
            <img src="https://readymadeui.com/images/sunglass3.webp" alt="sunglass4"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800">Round Glass</h3>
            <div class="flex items-center justify-between mt-6">
              <div
                class="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <h4 class="text-lg text-gray-800 font-bold">$14</h4>
            </div>
          </div>
        </div>

        <div
          class="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
          <div class="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
            <img src="https://readymadeui.com/images/sunglass7.webp" alt="sunglass5"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800">White Lens Glass</h3>
            <div class="flex items-center justify-between mt-6">
              <div
                class="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <h4 class="text-lg text-gray-800 font-bold">$8</h4>
            </div>
          </div>
        </div>

        <div
          class="bg-white border overflow-hidden rounded-2xl cursor-pointer hover:border-blue-600 transition-all relative">
          <div class="bg-gray-50 p-4 h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 rounded-b-2xl">
            <img src="https://readymadeui.com/images/sunglass6.webp" alt="sunglass6"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-800">Black Glass</h3>
            <div class="flex items-center justify-between mt-6">
              <div
                class="w-10 h-10  bg-gray-100 flex items-center justify-center rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <h4 class="text-lg text-gray-800 font-bold">$11.5</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
        `,
      },
      {
        id: 9,
        image: "/products-block.dark-9.png",
        demoUrl: "/demos/productGrid-9",
        code: `
<div class="font-[sans-serif] p-4 mx-auto lg:max-w-5xl md:max-w-3xl max-w-lg">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-12">Laptops</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all relative">
          <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
            <img src="https://readymadeui.com/images/laptop2.webp" alt="laptop1"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <hr class="border-2 mb-6" />
            <div>
              <h3 class="text-base text-gray-800">HP Polycarbonate Laptop 15S, AMD, 15.6-IInch (39.6 Cm)</h3>
              <h4 class="text-xl text-gray-800 font-bold mt-4">$600</h4>
            </div>

            <div class="flex space-x-1.5 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p class="text-base text-gray-800 !ml-2">50</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all relative">
          <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
            <img src="https://readymadeui.com/images/laptop3.webp" alt="laptop2"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <hr class="border-2 mb-6" />
            <div>
              <h3 class="text-base text-gray-800">ASUS Vivobook 15, Intel Core i3-1220P 12th Gen</h3>
              <h4 class="text-xl text-gray-800 font-bold mt-4">$550</h4>
            </div>

            <div class="flex space-x-1.5 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p class="text-base text-gray-800 !ml-2">70</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all relative">
          <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
            <img src="https://readymadeui.com/images/laptop1.webp" alt="laptop3"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <hr class="border-2 mb-6" />
            <div>
              <h3 class="text-base text-gray-800">Lenovo V15 Intel Celeron N4500 15.6" (39.62 cm)</h3>
              <h4 class="text-xl text-gray-800 font-bold mt-4">$570</h4>
            </div>

            <div class="flex space-x-1.5 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p class="text-base text-gray-800 !ml-2">30</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all relative">
          <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
            <img src="https://readymadeui.com/images/laptop4.webp" alt="laptop4"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <hr class="border-2 mb-6" />
            <div>
              <h3 class="text-base text-gray-800">Acer One 14 AMD Ryzen 3 (8GB RAM/256GB SSD/AMD)</h3>
              <h4 class="text-xl text-gray-800 font-bold mt-4">$520</h4>
            </div>

            <div class="flex space-x-1.5 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p class="text-base text-gray-800 !ml-2">55</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all relative">
          <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
            <img src="https://readymadeui.com/images/laptop5.webp" alt="laptop5"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <hr class="border-2 mb-6" />
            <div>
              <h3 class="text-base text-gray-800">Dell 15 Laptop, 8GB/ 1TB+256GB SSD/15.6</h3>
              <h4 class="text-xl text-gray-800 font-bold mt-4">$570</h4>
            </div>

            <div class="flex space-x-1.5 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p class="text-base text-gray-800 !ml-2">65</p>
            </div>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-all relative">
          <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
            <img src="https://readymadeui.com/images/laptop6.webp" alt="laptop5"
              class="h-full w-full object-contain" />
          </div>

          <div class="p-6">
            <hr class="border-2 mb-6" />
            <div>
              <h3 class="text-base text-gray-800">Samsung 15 Laptop, 8GB/ 1TB+256GB SSD/15.6</h3>
              <h4 class="text-xl text-gray-800 font-bold mt-4">$770</h4>
            </div>

            <div class="flex space-x-1.5 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <p class="text-base text-gray-800 !ml-2">85</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        `,
      },
      {
        id: 10,
        image: "/products-block.dark-10.png",
        demoUrl: "/demos/productGrid-10",
        code: `
<div class="font-sans p-4 mx-auto lg:max-w-6xl md:max-w-4xl">
      <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-16">Top Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">French Connection Timex</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$95.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch2.webp" alt="product4"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">Classic Bluetooth</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$60.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch3.webp" alt="product6"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">Smart Watch</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$110.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch4.webp" alt="product2"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">Amazfit GTR</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$85.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch5.webp" alt="product3"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">Michael Kors Lexington</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$77.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch6.webp" alt="product5"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">Garmin Venu</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$90.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch7.webp" alt="product7"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">Fitbit Sense</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$50.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

        <div class="bg-white overflow-hidden cursor-pointer">
          <div class="w-full h-[150px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/watch8.webp" alt="product8"
              class="h-full w-full object-contain" />
          </div>

          <div class="mt-6 text-center">
            <h3 class="text-lg font-bold text-gray-800">Fossil Gen</h3>
            <h4 class="text-lg text-blue-600 font-bold mt-3">$35.00</h4>
          </div>

          <div class="flex justify-center space-x-1 mt-3">
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
            <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
        `,
      },
      {
        id: 11,
        image: "/products-block.dark-11.png",
        demoUrl: "/demos/productGrid-11",
        code: `
<div class="font-sans bg-white py-4 mx-auto lg:max-w-7xl md:max-w-4xl">
        <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-16">Feature Products</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:justify-center gap-y-8 gap-x-6">

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">French Connection</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$95.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch2.webp" alt="product2"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Classic Bluetooth</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$78.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch3.webp" alt="product3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Kors Lexington</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$68.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch4.webp" alt="product4"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Smart Watch</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$105.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch5.webp" alt="product5"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Alarm Clock Watch</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$30.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch6.webp" alt="product6"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Wall Clock</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$40.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch7.webp" alt="product7"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Classic Watch</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$60.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch8.webp" alt="product8"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">French Watch</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$80.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">French Connection</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$95.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch2.webp" alt="product2"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Classic Bluetooth</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$78.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch3.webp" alt="product3"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Kors Lexington</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$68.00</h4>
            </div>
          </div>

          <div class="flex gap-6 overflow-hidden cursor-pointer">
            <div class="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
              <img src="https://readymadeui.com/images/watch4.webp" alt="product4"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-base font-bold text-gray-800">Smart Watch</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$105.00</h4>
            </div>
          </div>

        </div>
      </div>
        `,
      },
      {
        id: 12,
        image: "/products-block.dark-12.png",
        demoUrl: "/demos/productGrid-12",
        code: `
<div class="font-sans py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-sm:max-w-md">
      <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Products</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-12">

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/sunglass7.webp" alt="product1"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">White Sun Glass</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$35.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product14.webp" alt="product2"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">Echo Elegance</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$20.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">Acer One 14 AMD</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$400.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/coffee2.webp" alt="product4"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">Irish Cream Dream</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$11.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/coffee7.webp" alt="product5"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">Mocha Madness</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$10.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/sunglass6.webp" alt="product6"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">Black Sun Glass</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$70.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/product12.webp" alt="product7"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">Urban Sneakers</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$20.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative z-50 hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all">
          <div class="w-full h-[300px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="https://readymadeui.com/images/laptop2.webp" alt="product8"
              class="h-full w-full object-contain" />
          </div>

          <div class="absolute mx-auto left-0 right-0 -bottom-80 group-hover:bottom-2 bg-white w-11/12 p-3 rounded-lg transition-all duration-300">
            <div class="text-center">
              <h3 class="text-base font-bold text-gray-800">ASUS Vivobook 15</h3>
              <h4 class="text-lg text-blue-600 font-bold mt-2">$450.00</h4>
            </div>

            <div class="flex justify-center space-x-1 mt-4">
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#facc15]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
        `,
      },
      {
        id: 13,
        image: "/products-block.dark-13.png",
        demoUrl: "/demos/productGrid-13",
        code: `
<div class="font-sans bg-gray-50 px-4 py-8">
      <div class="mx-auto lg:max-w-6xl md:max-w-4xl">
        <h2 class="text-4xl font-extrabold text-gray-800 text-center mb-12">Top Products</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch1.webp" alt="product1"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">French Timex</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$95.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Echo Elegance</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$20.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Acer One 14 AMD</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$400.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch4.webp" alt="product4"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Irish Cream Dream</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$11.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/coffee7.webp" alt="product5"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Luxury desk clock</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$90.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch7.webp" alt="product6"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Smart Watch</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$110.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch8.webp" alt="product7"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Creative Wall Clock</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$50.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/laptop2.webp" alt="product8"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">ASUS Vivobook 15</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$450.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch3.webp" alt="product1"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">French Timex</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$95.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/product14.webp" alt="product2"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Echo Elegance</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$20.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/laptop4.webp" alt="product3"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Acer One 14 AMD</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$400.00</h4>
            </div>
          </div>

          <div class="bg-white p-3 cursor-pointer shadow-sm rounded-md hover:scale-[1.03] transition-all">
            <div class="w-full h-[130px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src="https://readymadeui.com/images/watch5.webp" alt="product4"
                class="h-full w-5/6 mx-auto block object-contain" />
            </div>
            <div class="text-center mt-4">
              <h3 class="text-sm font-bold text-gray-800">Irish Cream Dream</h3>
              <h4 class="text-base text-blue-600 font-bold mt-2">$11.00</h4>
            </div>
          </div>

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
  {
    id: 1,
    icon: "",
    category: "Modals",
    items: [
      {
        id: 1,
        image: "/model-block.dark-1.png",
        demoUrl: "/demos/model-1",
        code: `
        <div
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <div class="flex items-center pb-3 border-b border-gray-300">
                    <h3 class="text-gray-800 text-xl font-bold flex-1">Modal Title</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591">
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div class="my-6">
                    <p class="text-gray-600 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                        at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                        at fermentum dui. Maecenas.</p>
                    <p class="text-gray-600 text-sm leading-relaxed mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                        at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                        at fermentum dui. Maecenas.</p>
                    <p class="text-gray-600 text-sm leading-relaxed mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                        at fermentum dui. Maecenas Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu,
                        at fermentum dui. Maecenas.</p>
                </div>

                <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
                    <button type="button"
                        class="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Close</button>
                    <button type="button"
                        class="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Save</button>
                </div>
            </div>
        </div>
        `
      },
      {
        id: 2,
        image: "/model-block.dark-2.png",
        demoUrl: "/demos/model-2",
        code: `
       <div class="fixed inset-0 p-4 flex flex-wrap justify-end items-end w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <div class="flex items-center pb-3 border-b border-gray-300">
            <h3 class="text-gray-800 text-xl font-bold flex-1">
              Modal Title
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
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

          <div class="my-6">
            <p class="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at
              fermentum dui. Maecenas.
            </p>
          </div>

          <div class="border-t border-gray-300 pt-6 flex justify-end gap-4">
            <button
              type="button"
              class="px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="button"
              class="px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 3,
        image: "/model-block.dark-3.png",
        demoUrl: "/demos/model-3",
        code: `
          <div
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                <div class="flex items-center pb-3 border-b border-gray-200">
                    <div class="flex-1">
                        <h3 class="text-gray-800 text-xl font-bold">Upload File</h3>
                        <p class="text-gray-600 text-xs mt-1">Upload file to this project</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591">
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <div class="rounded-lg border-2 border-gray-200 border-dashed mt-6">
                    <div class="p-4 min-h-[180px] flex flex-col items-center justify-center text-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 mb-4 fill-gray-600 inline-block" viewBox="0 0 32 32">
                            <path
                                d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                                data-original="#000000" />
                            <path
                                d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                                data-original="#000000" />
                        </svg>

                        <h4 class="text-sm text-gray-600">Drag & Drop or <label for="chooseFile" class="text-blue-600 cursor-pointer">Choose file</label> to upload</h4>
                        <input type="file" id="chooseFile" class="hidden" />
                    </div>
                </div>

                <div class="flex flex-col bg-gray-50 p-4 rounded-lg mt-4">
                    <div class="flex">
                        <p class="text-xs text-gray-600 flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-5 mr-2 fill-current inline-block">
                                <path d="m433.798 106.268-96.423-91.222C327.119 5.343 313.695 0 299.577 0H116C85.673 0 61 24.673 61 55v402c0 30.327 24.673 55 55 55h280c30.327 0 55-24.673 55-55V146.222c0-15.049-6.27-29.612-17.202-39.954zM404.661 120H330c-2.757 0-5-2.243-5-5V44.636zM396 482H116c-13.785 0-25-11.215-25-25V55c0-13.785 11.215-25 25-25h179v85c0 19.299 15.701 35 35 35h91v307c0 13.785-11.215 25-25 25z" data-original="#000000" />
                                <path d="M363 200H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm0 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h220c8.284 0 15-6.716 15-15s-6.716-15-15-15zm-147.28 80H143c-8.284 0-15 6.716-15 15s6.716 15 15 15h72.72c8.284 0 15-6.716 15-15s-6.716-15-15-15z" data-original="#000000" />
                            </svg>
                            document.file <span class="ml-2">1.5 mb</span>
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div class="bg-gray-300 rounded-full w-full h-2 my-2">
                        <div class="w-1/3 h-full rounded-full bg-blue-600 flex items-center relative">
                            <span class="absolute text-xs right-0 bg-white w-2 h-2 rounded-full"></span>
                        </div>
                    </div>

                    <p class="text-xs text-gray-600 flex-1">35% done</p>
                </div>

                <div class="border-t border-gray-200 pt-6 flex justify-between gap-4 mt-6">
                    <button type="button"
                        class="w-full px-4 py-2 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200">Cancel</button>
                    <button type="button"
                        class="w-full px-4 py-2 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700 active:bg-blue-600">Import</button>
                </div>
            </div>
        </div>
        `
      },
      {
        id: 4,
        image: "/model-block.dark-4.png",
        demoUrl: "/demos/model-4",
        code: `
       <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
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

          <div class="my-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-14 fill-red-500 inline"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
            <h4 class="text-gray-800 text-base font-semibold mt-4">
              Are you sure you want to delete it?
            </h4>

            <div class="text-center space-x-4 mt-8">
              <button
                type="button"
                class="px-4 py-2 rounded-lg text-gray-800 text-sm bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="button"
                class="px-4 py-2 rounded-lg text-white text-sm bg-red-600 hover:bg-red-700 active:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 5,
        image: "/model-block.dark-5.png",
        demoUrl: "/demos/model-5",
        code: `
       <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
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

          <div class="my-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-14 fill-red-500 inline"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              />
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              />
            </svg>
            <h4 class="text-gray-800 text-lg font-semibold mt-4">
              Are you sure you want to delete it?
            </h4>
            <p class="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas
            </p>
          </div>

          <div class="flex flex-col space-y-2">
            <button
              type="button"
              class="px-4 py-2 rounded-lg text-white text-sm tracking-wide bg-red-500 hover:bg-red-600 active:bg-red-500"
            >
              Delete
            </button>
            <button
              type="button"
              class="px-4 py-2 rounded-lg text-gray-800 text-sm tracking-wide bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 6,
        image: "/model-block.dark-6.png",
        demoUrl: "/demos/model-6",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-3xl px-8 py-6 relative">
          <div class="flex items-start">
            <div class="flex-1">
              <h3 class="text-gray-800 text-2xl font-bold">Members</h3>
              <p class="text-gray-500 text-sm mt-1">
                Manage and control who has access to this workspace.
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
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

          <div class="flex flex-wrap gap-4 mt-6">
            <div class="flex flex-1 px-4 py-2.5 rounded-lg border border-gray-300 focus-within:border-blue-600 min-w-[220px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                class="fill-gray-400 mr-4"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
              <input
                type="email"
                placeholder="Search by name or user id"
                class="w-full outline-none bg-transparent text-gray-500 text-sm"
              />
            </div>

            <button
              type="button"
              class="px-5 py-2.5 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"
            >
              Invite
            </button>
          </div>

          <div class="mt-6 divide-y">
            <div class="flex flex-wrap items-center gap-4 py-3 cursor-pointer">
              <img
                src="https://readymadeui.com/team-1.webp"
                class="w-11 h-11 rounded-full"
                alt="image"
              />
              <div>
                <p class="text-sm text-gray-800 font-bold">John Doe</p>
                <p class="text-xs text-gray-500 mt-0.5">
                  johndoe23@gmail.com
                </p>
              </div>
              <p class="text-xs text-gray-500 mt-0.5 ml-auto">Owner</p>
            </div>

            <div class="flex flex-wrap items-center gap-4 py-3 cursor-pointer">
              <img
                src="https://readymadeui.com/team-2.webp"
                class="w-11 h-11 rounded-full"
                alt="image"
              />
              <div>
                <p class="text-sm text-gray-800 font-bold">Mark cena</p>
                <p class="text-xs text-gray-500 mt-0.5">
                  mark025@gmail.com
                </p>
              </div>
              <p class="text-xs text-gray-500 mt-0.5 ml-auto">Member</p>
            </div>
            <div class="flex flex-wrap items-center gap-4 py-3 cursor-pointer">
              <img
                src="https://readymadeui.com/team-3.webp"
                class="w-11 h-11 rounded-full"
                alt="image"
              />
              <div>
                <p class="text-sm text-gray-800 font-bold">Sophia</p>
                <p class="text-xs text-gray-500 mt-0.5">
                  sophia23@gmail.com
                </p>
              </div>
              <p class="text-xs text-gray-500 mt-0.5 ml-auto">Member</p>
            </div>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 7,
        image: "/model-block.dark-7.png",
        demoUrl: "/demos/model-7",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-md bg-white shadow-lg rounded-xl p-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
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

          <div class="my-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-14 fill-red-500 inline"
              viewBox="0 0 286.054 286.054"
            >
              <path
                fill="#e2574c"
                d="M143.027 0C64.04 0 0 64.04 0 143.027c0 78.996 64.04 143.027 143.027 143.027 78.996 0 143.027-64.022 143.027-143.027C286.054 64.04 222.022 0 143.027 0zm0 259.236c-64.183 0-116.209-52.026-116.209-116.209S78.844 26.818 143.027 26.818s116.209 52.026 116.209 116.209-52.026 116.209-116.209 116.209zm.009-196.51c-10.244 0-17.995 5.346-17.995 13.981v79.201c0 8.644 7.75 13.972 17.995 13.972 9.994 0 17.995-5.551 17.995-13.972V76.707c-.001-8.43-8.001-13.981-17.995-13.981zm0 124.997c-9.842 0-17.852 8.01-17.852 17.86 0 9.833 8.01 17.843 17.852 17.843s17.843-8.01 17.843-17.843c-.001-9.851-8.001-17.86-17.843-17.86z"
                data-original="#e2574c"
              />
            </svg>

            <h4 class="text-lg text-gray-800 font-semibold mt-6">
              Your account will be deleted permanently!
            </h4>
            <p class="text-sm text-gray-500 mt-2">
              Are you sure to proceed?
            </p>
          </div>

          <div class="flex max-sm:flex-col gap-4">
            <button
              type="button"
              class="px-5 py-2.5 rounded-lg w-full tracking-wide text-gray-800 text-sm border-none outline-none bg-gray-200 hover:bg-gray-300"
            >
              I am not sure
            </button>
            <button
              type="button"
              class="px-5 py-2.5 rounded-lg w-full tracking-wide text-white text-sm border-none outline-none bg-red-500 hover:bg-red-600"
            >
              Remove my account
            </button>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 8,
        image: "/model-block.dark-8.png",
        demoUrl: "/demos/model-8",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
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

          <div class="my-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-14 shrink-0 fill-green-500 inline"
              viewBox="0 0 512 512"
            >
              <path
                d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
                data-original="#000000"
              />
              <path
                d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
                data-original="#000000"
              />
            </svg>
            <h4 class="text-xl text-gray-800 font-semibold mt-4">
              Successfully accepted!
            </h4>
            <p class="text-sm text-gray-500 leading-relaxed mt-4">
              Et leo, enim in non sed quis sed. Auctor natoque auctor risus amet
              quis mauris. Interdum et nisi, pellentesque id lectus. Ut bibendum
              pellentesque arcu luctus sapien.
            </p>
          </div>

          <button
            type="button"
            class="px-5 py-2.5 w-full rounded-lg text-white text-sm border-none outline-none bg-gray-800 hover:bg-gray-700"
          >
            Got it
          </button>
        </div>
      </div>
        `
      },
      {
        id: 9,
        image: "/model-block.dark-9.png",
        demoUrl: "/demos/model-9",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 relative">
          <div>
            <h4 class="text-xl text-gray-800 font-semibold">
              Sure you want to accept?
            </h4>
            <p class="text-sm text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor auctor arcu, at fermentum dui. Maecenas
            </p>
          </div>

          <div class="flex gap-4 max-sm:flex-col mt-8">
            <button
              type="button"
              class="px-5 py-2.5 rounded-lg text-gray-800 text-sm tracking-wide border-none outline-none bg-gray-200 hover:bg-gray-300"
            >
              No, cancel
            </button>
            <button
              type="button"
              class="px-5 py-2.5 rounded-lg text-white text-sm tracking-wide border-none outline-none bg-[#333] hover:bg-[#222]"
            >
              Yes, confirm
            </button>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 10,
        image: "/model-block.dark-10.png",
        demoUrl: "/demos/model-10",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        class
        <div class="w-full max-w-lg bg-white shadow-lg rounded-md p-8 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-800 hover:fill-red-500 float-right"
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
          <div class="my-8 text-center">
            <h4 class="text-2xl text-gray-800 font-bold">
              Subscribe to our Newsletter
            </h4>
            <p class="text-sm text-gray-500 mt-2">
              Join thousands getting emails in their inbox.
            </p>
            <input
              type="email"
              placeholder="Enter Email"
              class="px-4 py-2.5 mt-6 bg-[#f0f1f2] text-gray-800 w-full text-sm focus:bg-transparent outline-blue-600 rounded-md"
            />
          </div>
          <button
            type="button"
            class="px-5 py-2.5 w-full rounded-md text-white text-sm outline-none bg-blue-600 hover:bg-blue-700"
          >
            Yeah, thanks!
          </button>
        </div>
      </div>
        `
      },
      {
        id: 11,
        image: "/model-block.dark-11.png",
        demoUrl: "/demos/model-11",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 relative">
          <div class="text-center">
            <div class="bg-gray-200 w-16 h-16 rounded-full p-5 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-full fill-blue-600 inline"
                viewBox="0 0 371.263 371.263"
              >
                <path
                  d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>

            <h4 class="text-lg text-gray-800 font-semibold mt-4">
              Do you want to get notification?
            </h4>
          </div>

          <div class="flex space-x-4 mt-8">
            <button
              type="button"
              class="px-5 py-2.5 rounded-full w-full text-gray-800 text-sm border-none outline-none bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="button"
              class="px-5 py-2.5 rounded-full w-full text-white text-sm border-none outline-none bg-blue-600 hover:bg-blue-700"
            >
              Allow
            </button>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 12,
        image: "/model-block.dark-12.png",
        demoUrl: "/demos/model-12",
        code: `
      <div
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right" viewBox="0 0 320.591 320.591">
                    <path
                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                        data-original="#000000"></path>
                    <path
                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                        data-original="#000000"></path>
                </svg>

                <div class="my-8 text-center">
                    <h4 class="text-3xl text-gray-800 font-extrabold">Sign In</h4>
                    <p class="text-sm text-gray-500 mt-4">Login to your account to continue the process</p>
                </div>

                <form class="space-y-4">
                    <div class="relative flex items-center">
                        <input type="email" placeholder="Enter Email"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-4"
                            viewBox="0 0 682.667 682.667">
                            <defs>
                                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                    data-original="#000000"></path>
                                <path
                                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                    data-original="#000000"></path>
                            </g>
                        </svg>
                    </div>

                    <div class="relative flex items-center">
                        <input type="password" placeholder="Enter Password"
                            class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg" />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb"
                            class="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                            <path
                                d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                                data-original="#000000"></path>
                        </svg>
                    </div>

                    <div class="flex">
                        <input type="checkbox" class="w-4" />
                        <label class="text-sm ml-4 text-gray-500">Remember me</label>
                    </div>

                    <button type="button"
                        class="px-5 py-2.5 !mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg tracking-wide">Sign
                        in</button>
                </form>

                <a href="javascript:void(0)" class="text-sm text-blue-600 text-center mt-4 block hover:underline">Forgot Your
                    Password?</a>

                <hr class="my-8 border-gray-300" />

                <p class="text-sm text-center text-gray-500">Don't Have a Account? <a href="javascript:void(0)"
                    class="text-sm text-blue-600 hover:underline">Sign Up</a></p>
            </div>
        </div>
        `
      },
      {
        id: 13,
        image: "/model-block.dark-13.png",
        demoUrl: "/demos/model-13",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-3xl p-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
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

          <h4 class="text-base font-bold text-gray-800 mt-6">3 Items</h4>

          <div class="space-y-4 mt-6">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/product_img_2.webp"
                  class="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md"
                  alt="image"
                />
                <div class="ml-4">
                  <p class="text-sm text-gray-800">Black T-Shirt</p>
                  <p class="text-gray-500 text-xs mt-1">1 Item</p>
                </div>
              </div>

              <div class="flex items-center">
                <span class="text-base font-bold text-gray-800 mr-4">
                  $59.50
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[18px] fill-red-500 inline cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/product_img_1.webp"
                  class="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md"
                  alt="image"
                />
                <div class="ml-4">
                  <p class="text-sm text-gray-800">Light Gray T-Shirt</p>
                  <p class="text-gray-500 text-xs mt-1">1 Item</p>
                </div>
              </div>

              <div class="flex items-center">
                <span class="text-base font-bold text-gray-800 mr-4">
                  $60.99
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[18px] fill-red-500 inline cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center">
                <img
                  src="https://readymadeui.com/product_img_2.webp"
                  class="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md"
                  alt="image"
                />
                <div class="ml-4">
                  <p class="text-sm text-gray-800">Black T-Shirt</p>
                  <p class="text-gray-500 text-xs mt-1">1 Item</p>
                </div>
              </div>

              <div class="flex items-center">
                <span class="text-base font-bold text-gray-800 mr-4">
                  $50.00
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-[18px] fill-red-500 inline cursor-pointer"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div class="flex mt-6">
            <span class="text-base font-bold text-gray-800 flex-1">
              Total
            </span>
            <span class="text-base font-bold text-gray-800">$170.00</span>
          </div>

          <div class="flex max-sm:flex-col gap-4 mt-6">
            <button
              type="button"
              class="text-sm px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md tracking-wide"
            >
              Continue shopping
            </button>
            <button
              type="button"
              class="text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 14,
        image: "/model-block.dark-14.png",
        demoUrl: "/demos/model-14",
        code: `
      <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right"
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

          <div class="my-8 text-center">
            <h4 class="text-3xl text-gray-800 font-extrabold">Register</h4>
            <p class="text-sm text-gray-500 mt-4">
              Create an account with us
            </p>
          </div>

          <form class="space-y-4">
            <div class="relative flex items-center">
              <input
                type="email"
                placeholder="Enter Email"
                class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute right-4"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g
                  clip-path="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="40"
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </div>

            <div class="relative flex items-center">
              <input
                type="password"
                placeholder="Enter Password"
                class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>

            <div class="relative flex items-center">
              <input
                type="password"
                placeholder="Confirm Password"
                class="px-4 py-3 bg-white text-gray-800 w-full text-sm border border-gray-300 focus:border-blue-600 outline-none rounded-lg"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>

            <div class="flex">
              <input type="checkbox" class="w-4" />
              <label class="text-sm ml-4 text-gray-500">
                I have read and accept the{" "}
                <a
                  href="javascript:void(0)"
                  class="text-sm text-blue-600 hover:underline"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div class="!mt-8 space-y-4">
              <button
                type="button"
                class="px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg tracking-wide"
              >
                Create an account
              </button>

              <button
                type="button"
                class="px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm rounded-lg tracking-wide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#fff"
                  class="inline mr-4"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#fbbd00"
                    d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                    data-original="#fbbd00"
                  />
                  <path
                    fill="#0f9d58"
                    d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                    data-original="#0f9d58"
                  />
                  <path
                    fill="#31aa52"
                    d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                    data-original="#31aa52"
                  />
                  <path
                    fill="#3c79e6"
                    d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                    data-original="#3c79e6"
                  />
                  <path
                    fill="#cf2d48"
                    d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                    data-original="#cf2d48"
                  />
                  <path
                    fill="#eb4132"
                    d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                    data-original="#eb4132"
                  />
                </svg>
                Continue with Google
              </button>
            </div>
          </form>

          <hr class="my-8 border-gray-300" />

          <p class="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <a
              href="javascript:void(0)"
              class="text-sm text-blue-600 hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
        `
      },
      {
        id: 15,
        image: "/model-block.dark-15.png",
        demoUrl: "/demos/model-15",
        code: `
      <div class="fixed inset-0 px-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative mx-auto text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-20 h-20 fill-green-500 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
            viewBox="0 0 60 60"
          >
            <circle cx="30" cy="30" r="29" data-original="#5edd60" />
            <path
              fill="#fff"
              d="m24.262 42.07-6.8-6.642a1.534 1.534 0 0 1 0-2.2l2.255-2.2a1.621 1.621 0 0 1 2.256 0l4.048 3.957 11.353-17.26a1.617 1.617 0 0 1 2.2-.468l2.684 1.686a1.537 1.537 0 0 1 .479 2.154L29.294 41.541a3.3 3.3 0 0 1-5.032.529z"
              data-original="#ffffff"
            />
          </svg>

          <div class="mt-12">
            <h3 class="text-gray-800 text-2xl font-bold flex-1">
              Awesome!
            </h3>
            <p class="text-sm text-gray-600 mt-3">
              Your booking has been confirmed. Check your email for details,
              including your reservation number.
            </p>

            <button
              type="button"
              class="px-6 py-2.5 mt-8 w-full rounded-md text-white text-sm font-semibold tracking-wide border-none outline-none bg-green-500 hover:bg-green-600"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 16,
        image: "/model-block.dark-16.png",
        demoUrl: "/demos/model-16",
        code: `
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 cursor-pointer float-right fill-gray-400 hover:fill-red-500"
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

          <div className="mt-4 p-4">
            <div className="text-center">
              <h3 className="text-2xl font-semibold flex-1 text-gray-800">
                How many stars would you like to give us?
              </h3>
              <p className="text-sm mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui.
              </p>
            </div>

            <div className="flex justify-center space-x-2 mt-4">
              <svg
                className="w-6 cursor-pointer fill-blue-600 hover:fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-6 cursor-pointer fill-blue-600 hover:fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-6 cursor-pointer fill-blue-600 hover:fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-6 cursor-pointer fill-[#CED5D8] hover:fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                className="w-6 cursor-pointer fill-[#CED5D8] hover:fill-blue-600"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>

            <div className="mt-8 space-y-4">
              <button
                type="button"
                className="text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-sm w-full bg-transparent hover:underline text-blue-600 tracking-wide"
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 17,
        image: "/model-block.dark-17.png",
        demoUrl: "/demos/model-17",
        code: `
       <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        class
        <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8 relative">
          <div class="flex items-center pb-3 border-b border-gray-300">
            <h3 class="text-xl font-bold flex-1 text-gray-800">Share Modal</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
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

          <div class="my-8">
            <h6 class="text-base text-gray-800">Share this link via</h6>

            <div class="flex flex-wrap gap-4 mt-4">
              <button
                type="button"
                class="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#fff"
                  viewBox="0 0 155.139 155.139"
                >
                  <path
                    d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"
                    data-original="#010002"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#03a9f4] hover:bg-[#03a1f4] active:bg-[#03a9f4]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                    data-original="#03a9f4"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#0077b5] hover:bg-[#0055b5] active:bg-[#0077b5]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 0 0 2.882 0z"
                    data-original="#0077b5"
                  />
                </svg>
              </button>
              <button
                type="button"
                class="w-10 h-10 inline-flex items-center justify-center rounded-full border-none outline-none bg-[#ea0065] hover:bg-[#ea0065d6] active:bg-[#ea0065]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  fill="#fff"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0"
                    data-original="#000000"
                  />
                  <path
                    d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div>
            <h6 class="text-base text-gray-800">Or copy link</h6>
            <div class="w-full rounded-lg overflow-hidden border border-gray-300 flex items-center mt-4">
              <p class="text-sm text-gray-500 flex-1 ml-4">
                https://readymadeui.com/
              </p>
              <button class="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm text-white">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
        `
      },
      {
        id: 18,
        image: "/model-block.dark-18.png",
        demoUrl: "/demos/model-18",
        code: `
       <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
          <div class="flex items-center">
            <h3 class="text-blue-600 text-xl font-bold flex-1">
              Add New Product
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
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

          <form class="space-y-4 mt-8">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Name of the product
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Descriptions
              </label>
              <textarea
                placeholder="Write about the product"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
                rows="3"
              ></textarea>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Quantity</label>
              <input
                type="number"
                placeholder="Enter quantity"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Selling price
              </label>
              <input
                type="number"
                placeholder="Enter price"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Category</label>
              <input
                type="number"
                placeholder="Enter product category"
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
              />
            </div>

            <div class="flex justify-end gap-4 !mt-8">
              <button
                type="button"
                class="px-6 py-3 rounded-lg text-gray-800 text-sm border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                class="px-6 py-3 rounded-lg text-white text-sm border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
        `
      },
      {
        id: 19,
        image: "/model-block.dark-19.png",
        demoUrl: "/demos/model-19",
        code: `
       <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
          <div class="flex items-start border-b border-gray-300 pb-4">
            <div class="flex-1">
              <h3 class="text-gray-800 text-xl font-bold">Order Preview</h3>
              <p class="text-gray-600 text-sm mt-1">
                Provides a detailed summary of your order.
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
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

          <div class="my-8">
            <ul class="text-gray-800 space-y-4">
              <li class="flex flex-wrap gap-4 text-sm">
                Discount <span class="ml-auto font-bold">$0.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Shipping <span class="ml-auto font-bold">$2.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Tax <span class="ml-auto font-bold">$4.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm">
                Subtotal <span class="ml-auto font-bold">$48.00</span>
              </li>
              <li class="flex flex-wrap gap-4 text-sm font-bold">
                Total <span class="ml-auto">$52.00</span>
              </li>
            </ul>
          </div>

          <div class="flex max-sm:flex-col items-center gap-4 mt-8">
            <button
              type="button"
              class="text-sm px-4 py-2.5 w-full tracking-wide bg-transparent hover:bg-gray-50 text-gray-800 border border-gray-300 rounded-lg max-sm:order-1"
            >
              Cancel
            </button>
            <button
              type="button"
              class="text-sm px-4 py-2.5 w-full tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
        `
      },
    ]
  },
  {
    id: 6,
    icon: "",
    category: "Product-View",
    items: [
      {
        id: 1,
        image: "/productView-block.dark-1.png",
        demoUrl: "/demos/product-view-1",
        code: `
    div class="font-sans">
        <div class="p-4 lg:max-w-5xl max-w-lg mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
            <div class="w-full lg:sticky top-0 sm:flex gap-2">
              <div class="sm:space-y-3 w-16 max-sm:w-12 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                <img
                  src="https://readymadeui.com/images/product1.webp"
                  alt="Product1"
                  class="w-full cursor-pointer rounded-md outline"
                />
                <img
                  src="https://readymadeui.com/images/product6.webp"
                  alt="Product2"
                  class="w-full cursor-pointer rounded-md"
                />
                <img
                  src="https://readymadeui.com/images/product7.webp"
                  alt="Product3"
                  class="w-full cursor-pointer rounded-md"
                />
                <img
                  src="https://readymadeui.com/images/product3.webp"
                  alt="Product4"
                  class="w-full cursor-pointer rounded-md"
                />
              </div>
              <img
                src="https://readymadeui.com/images/product2.webp"
                alt="Product"
                class="w-4/5 rounded-md object-cover"
              />
            </div>

            <div>
              <h2 class="text-2xl font-bold text-gray-800">
                Adjective Attire | T-shirt
              </h2>
              <div class="flex flex-wrap gap-4 mt-4">
                <p class="text-gray-800 text-xl font-bold">$12</p>
                <p class="text-gray-400 text-xl">
                  <del>$16</del>{" "}
                  <span class="text-sm ml-1.5">Tax included</span>
                </p>
              </div>

              <div class="flex space-x-2 mt-4">
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-blue-600"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">Sizes</h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border-2 hover:border-blue-600 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    XL
                  </button>
                </div>
              </div>

              <button
                type="button"
                class="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-md"
              >
                Add to cart
              </button>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">
                  About the item
                </h3>
                <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                  <li>
                    A gray t-shirt is a wardrobe essential because it is so
                    versatile.
                  </li>
                  <li>
                    Available in a wide range of sizes, from extra small to
                    extra large, and even in tall and petite sizes.
                  </li>
                  <li>
                    This is easy to care for. They can usually be machine-washed
                    and dried on low heat.
                  </li>
                  <li>
                    You can add your own designs, paintings, or embroidery to
                    make it your own.
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">Reviews(10)</h3>
                <div class="space-y-3 mt-4">
                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">5.0</p>
                    <svg
                      class="w-5 fill-blue-600 ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                      <div class="w-2/3 h-full rounded-md bg-blue-600"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">4.0</p>
                    <svg
                      class="w-5 fill-blue-600 ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                      <div class="w-1/3 h-full rounded-md bg-blue-600"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">3.0</p>
                    <svg
                      class="w-5 fill-blue-600 ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                      <div class="w-1/6 h-full rounded-md bg-blue-600"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">2.0</p>
                    <svg
                      class="w-5 fill-blue-600 ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                      <div class="w-1/12 h-full rounded-md bg-blue-600"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                  </div>

                  <div class="flex items-center">
                    <p class="text-sm text-gray-800 font-bold">1.0</p>
                    <svg
                      class="w-5 fill-blue-600 ml-1.5"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div class="bg-gray-300 rounded-md w-full h-2 ml-3">
                      <div class="w-[6%] h-full rounded-md bg-blue-600"></div>
                    </div>
                    <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                  </div>
                </div>

                <button
                  type="button"
                  class="w-full mt-8 px-6 py-2.5 border border-blue-600 bg-transparent text-gray-800 text-sm font-semibold rounded-md"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 2,
        image: "/productView-block.dark-2.png",
        demoUrl: "/demos/product-view-2",
        code: `
       <div class="w-full bg-white">
       <div class="font-sans">
            <div class="p-4 lg:max-w-7xl max-w-xl max-lg:mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div class="min-h-[500px] lg:col-span-3 bg-gradient-to-tr  from-[#F8C794] via-[#FFE0B5] to-[#FFF2D7] rounded-lg w-full lg:sticky top-0 text-center p-6">
                        <img src="https://readymadeui.com/images/coffee8.webp" alt="Product" class="w-3/5 rounded object-cover mx-auto py-6" />

                        <hr class="border-white border my-6" />

                        <div class="flex flex-wrap gap-x-4 gap-y-6 justify-center mx-auto">
                            <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee6.webp" alt="Product1" class="w-full h-full cursor-pointer" />
                            </div>
                            <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee3.webp" alt="Product1" class="w-full h-full cursor-pointer" />
                            </div>
                            <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee4.webp" alt="Product1" class="w-full h-full cursor-pointer" />
                            </div>
                            <div class="w-20 h-20 max-lg:w-16 max-lg:h-16 bg-[#fff2c9] p-3 rounded-lg">
                                <img src="https://readymadeui.com/images/coffee5.webp" alt="Product1" class="w-full h-full cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-2">
                        <h2 class="text-2xl font-bold text-gray-800">Espresso Elegante | Coffee</h2>
                        <div class="flex flex-wrap gap-4 mt-4">
                            <p class="text-gray-800 text-xl font-bold">$12</p>
                            <p class="text-gray-400 text-xl"><del>$16</del> <span class="text-sm ml-1">Tax included</span></p>
                        </div>

                        <div class="flex space-x-2 mt-4">
                            <svg class="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg class="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>

                        <div class="mt-8">
                            <h3 class="text-xl font-bold text-gray-800">About the coffee</h3>
                            <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>A cup of coffee is a beverage essential because of its timeless appeal</li>
                                <li>Easy to prepare. It can be brewed using various methods, from drip machines to manual pour-overs.</li>
                                <li>Available in various sizes, from a standard espresso shot to a large Americano, catering to different preferences.</li>
                                <li>You can customize your coffee by adding cream, sugar, or flavorings to suit your taste preferences.</li>
                            </ul>
                        </div>

                        <button type="button" class="w-full mt-8 px-6 py-3 bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold rounded-md">Add to cart</button>

                        <div class="mt-8">
                            <h3 class="text-xl font-bold text-gray-800">Reviews(10)</h3>
                            <div class="space-y-3 mt-4">
                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">5.0</p>
                                    <svg class="w-5 fill-orange-400 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-2/3 h-full rounded bg-orange-400"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                                </div>

                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">4.0</p>
                                    <svg class="w-5 fill-orange-400 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-1/3 h-full rounded bg-orange-400"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                                </div>

                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">3.0</p>
                                    <svg class="w-5 fill-orange-400 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-1/6 h-full rounded bg-orange-400"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                                </div>

                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">2.0</p>
                                    <svg class="w-5 fill-orange-400 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-1/12 h-full rounded bg-orange-400"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                                </div>

                                <div class="flex items-center">
                                    <p class="text-sm text-gray-800 font-bold">1.0</p>
                                    <svg class="w-5 fill-orange-400 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <div class="bg-gray-300 rounded w-full h-2 ml-3">
                                        <div class="w-[6%] h-full rounded bg-orange-400"></div>
                                    </div>
                                    <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                                </div>
                            </div>

                            <div class="flex items-start mt-8">
                                <img src="https://readymadeui.com/team-2.webp" class="w-12 h-12 rounded-full border-2 border-white" />
                                <div class="ml-3">
                                    <h4 class="text-sm font-bold">John Doe</h4>
                                    <div class="flex space-x-1 mt-1">
                                        <svg class="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-orange-400" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p class="text-xs !ml-2 font-semibold">2 mins ago</p>
                                    </div>
                                    <p class="text-xs mt-4">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                </div>
                            </div>
                            <button type="button" class="w-full mt-8 px-4 py-2.5 bg-transparent border border-orange-400 text-gray-800 font-semibold rounded-lg">Read all reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
`
      },
      {
        id: 3,
        image: "/productView-block.dark-3.png",
        demoUrl: "/demos/product-view-3",
        code: `
 <div class="w-full bg-white">
       <div class="font-sans">
            <div class="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
                <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
                    <div class="w-full lg:sticky top-0 text-center">
                        <div class="lg:h-[560px]">
                            <img src="https://readymadeui.com/images/product6.webp" alt="Product" class="lg:w-11/12 w-full h-full rounded-md object-cover object-top" />
                        </div>

                        <div class="flex flex-wrap gap-4 justify-center mx-auto mt-4">
                            <img src="https://readymadeui.com/images/product6.webp" alt="Product1" class="w-16 cursor-pointer rounded-md outline" />
                            <img src="https://readymadeui.com/images/product8.webp" alt="Product2" class="w-16 cursor-pointer rounded-md" />
                            <img src="https://readymadeui.com/images/product5.webp" alt="Product3" class="w-16 cursor-pointer rounded-md" />
                            <img src="https://readymadeui.com/images/product7.webp" alt="Product4" class="w-16 cursor-pointer rounded-md" />
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-wrap items-start gap-4">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-800">Adjective Attire | T-shirt</h2>
                                <p class="text-sm text-gray-500 mt-2">Well-Versed Commerce</p>
                            </div>

                            <div class="ml-auto flex flex-wrap gap-4">
                                <button type="button" class="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" class="mr-1" viewBox="0 0 64 64">
                                        <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                    </svg>
                                    100
                                </button>
                                <button type="button" class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12px" fill="currentColor" viewBox="0 0 512 512">
                                        <path d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0" data-original="#000000" />
                                        <path d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0" data-original="#000000" />
                                        <path d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0" data-original="#000000" />
                                        <path d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0" data-original="#000000" />
                                        <path d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0" data-original="#000000" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <hr class="my-8" />

                        <div class="flex flex-wrap gap-4 items-start">
                            <div>
                                <p class="text-gray-800 text-4xl font-bold">$30</p>
                                <p class="text-gray-500 text-sm mt-2"><del>$42</del> <span class="text-sm ml-1">Tax included</span></p>
                            </div>

                            <div class="flex flex-wrap gap-4 ml-auto">
                                <button type="button" class="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center">
                                    <svg class="w-3 mr-1" fill="currentColor" viewBox="0 0 14 13"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    4.8
                                </button>
                                <button type="button" class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-3 mr-1" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z" data-original="#000000" />
                                        <path d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z" data-original="#000000" />
                                        <path d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z" data-original="#000000" />
                                    </svg>
                                    87 Reviews
                                </button>
                            </div>
                        </div>

                        <hr class="my-8" />

                        <div>
                            <h3 class="text-xl font-bold text-gray-800">Choose a Size</h3>
                            <div class="flex flex-wrap gap-4 mt-4">
                                <button type="button" class="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0">SM</button>
                                <button type="button" class="w-10 h-10 border hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0">MD</button>
                                <button type="button" class="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0">LG</button>
                                <button type="button" class="w-10 h-10 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0">XL</button>
                            </div>
                        </div>

                        <hr class="my-8" />

                        <div>
                            <h3 class="text-xl font-bold text-gray-800">Choose a Color</h3>
                            <div class="flex flex-wrap gap-4 mt-4">
                                <button type="button" class="w-10 h-10 bg-black border border-white hover:border-gray-800 rounded-md shrink-0"></button>
                                <button type="button" class="w-10 h-10 bg-gray-400 border border-white hover:border-gray-800 rounded-md shrink-0"></button>
                                <button type="button" class="w-10 h-10 bg-orange-400 border border-white hover:border-gray-800 rounded-md shrink-0"></button>
                                <button type="button" class="w-10 h-10 bg-red-400 border border-white hover:border-gray-800 rounded-md shrink-0"></button>
                            </div>
                        </div>

                        <hr class="my-8" />

                        <div class="flex flex-wrap gap-4">
                            <button type="button" class="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-md">Buy now</button>
                            <button type="button" class="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div class="mt-20 max-w-4xl">
                    <ul class="flex border-b">
                        <li
                            class="text-gray-800 font-semibold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                            Description</li>
                        <li class="text-gray-500 font-semibold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">Reviews</li>
                    </ul>

                    <div class="mt-8">
                        <h3 class="text-xl font-bold text-gray-800">Product Description</h3>
                        <p class="text-sm text-gray-500 mt-4">Elevate your casual style with our premium men's t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, making it perfect for everyday wear. Its classic crew neck and short sleeves offer a timeless look.</p>
                    </div>

                    <ul class="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-500">
                        <li>A gray t-shirt is a wardrobe essential because it is so versatile.</li>
                        <li>Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.</li>
                        <li>This is easy to care for. They can usually be machine-washed and dried on low heat.</li>
                        <li>You can add your own designs, paintings, or embroidery to make it your own.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
`
      },
      {
        id: 4,
        image: "/productView-block.dark-4.png",
        demoUrl: "/demos/product-view-4",
        code: `
       <div class="font-sans bg-gray-700">
        <div class="p-4 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div class="bg-gray-800 px-4 py-12 rounded-xl">
                <img
                  src="https://readymadeui.com/images/coffee2.webp"
                  alt="Product"
                  class="w-9/12 rounded object-cover mx-auto"
                />
              </div>

              <div class="mt-4 flex flex-wrap justify-center gap-4 mx-auto">
                <div class="w-[90px] h-20 flex items-cemter justify-center bg-gray-800 rounded-xl p-4 cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/coffee3.webp"
                    alt="Product2"
                    class="w-full object-contain"
                  />
                </div>
                <div class="w-[90px] h-20 flex items-cemter justify-center bg-gray-800 rounded-xl p-4 cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/coffee4.webp"
                    alt="Product2"
                    class="w-full object-contain"
                  />
                </div>
                <div class="w-[90px] h-20 flex items-cemter justify-center bg-gray-800 rounded-xl p-4 cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/coffee5.webp"
                    alt="Product2"
                    class="w-full object-contain"
                  />
                </div>
                <div class="w-[90px] h-20 flex items-cemter justify-center bg-gray-800 rounded-xl p-4 cursor-pointer">
                  <img
                    src="https://readymadeui.com/images/coffee6.webp"
                    alt="Product2"
                    class="w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div class="lg:col-span-2">
              <h2 class="text-3xl font-semibold text-white">
                Espresso Elegante | Coffee
              </h2>

              <div class="flex space-x-2 mt-4">
                <svg
                  class="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-[18px] fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-[18px] fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 class="text-white text-base">500 Reviews</h4>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <p class="text-white text-4xl font-semibold">$12</p>
                <p class="text-gray-400 text-base">
                  <del>$16</del>
                  <span class="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-yellow-300 hover:bg-yellow-400 text-black text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border border-yellow-300 bg-transparent text-yellow-300 text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-semibold text-white">
                  About the coffee
                </h3>
                <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-white">
                  <li>
                    A cup of coffee is a beverage essential because of its
                    timeless appeal
                  </li>
                  <li>
                    Easy to prepare. It can be brewed using various methods,
                    from drip machines to manual pour-overs.
                  </li>
                  <li>
                    Available in various sizes, from a standard espresso shot to
                    a large Americano, catering to different preferences.
                  </li>
                  <li>
                    You can customize your coffee by adding cream, sugar, or
                    flavorings to suit your taste preferences.
                  </li>
                </ul>
              </div>

              <div class="mt-8">
                <ul class="flex">
                  <li class="text-white font-semibold text-sm bg-gray-800 py-3 px-8 border-b-2 border-yellow-300 cursor-pointer transition-all">
                    Reviews
                  </li>
                  <li class="text-white font-semibold text-sm py-3 px-8 cursor-pointer">
                    Sellter
                  </li>
                </ul>

                <div class="mt-8">
                  <h3 class="text-xl font-semibold text-white">
                    Reviews(10)
                  </h3>

                  <div class="space-y-3 mt-4">
                    <div class="flex items-center">
                      <p class="text-sm text-white font-semibold">5.0</p>
                      <svg
                        class="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div class="bg-gray-400 rounded w-full h-2 ml-3">
                        <div class="w-2/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p class="text-sm text-white font-semibold ml-3">
                        66%
                      </p>
                    </div>

                    <div class="flex items-center">
                      <p class="text-sm text-white font-semibold">4.0</p>
                      <svg
                        class="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div class="bg-gray-400 rounded w-full h-2 ml-3">
                        <div class="w-1/3 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p class="text-sm text-white font-semibold ml-3">
                        33%
                      </p>
                    </div>

                    <div class="flex items-center">
                      <p class="text-sm text-white font-semibold">3.0</p>
                      <svg
                        class="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div class="bg-gray-400 rounded w-full h-2 ml-3">
                        <div class="w-1/6 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p class="text-sm text-white font-semibold ml-3">
                        16%
                      </p>
                    </div>

                    <div class="flex items-center">
                      <p class="text-sm text-white font-semibold">2.0</p>
                      <svg
                        class="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div class="bg-gray-400 rounded w-full h-2 ml-3">
                        <div class="w-1/12 h-full rounded bg-yellow-300"></div>
                      </div>
                      <p class="text-sm text-white font-semibold ml-3">
                        8%
                      </p>
                    </div>

                    <div class="flex items-center">
                      <p class="text-sm text-white font-semibold">1.0</p>
                      <svg
                        class="w-5 fill-yellow-300 ml-1"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <div class="bg-gray-400 rounded w-full h-2 ml-3">
                        <div class="w-[6%] h-full rounded bg-yellow-300"></div>
                      </div>
                      <p class="text-sm text-white font-semibold ml-3">
                        6%
                      </p>
                    </div>
                  </div>
                </div>

                <div class="flex items-start mt-8">
                  <img
                    src="https://readymadeui.com/team-2.webp"
                    class="w-12 h-12 rounded-full border-2 border-white"
                  />

                  <div class="ml-3">
                    <h4 class="text-sm font-semibold text-white">
                      John Doe
                    </h4>
                    <div class="flex space-x-1 mt-1">
                      <svg
                        class="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-yellow-300"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <svg
                        class="w-4 fill-[#CED5D8]"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      <p class="text-xs !ml-2 font-semibold text-white">
                        2 mins ago
                      </p>
                    </div>
                    <p class="text-xs mt-4 text-white">
                      The service was amazing. I never had to wait that long for
                      my food. The staff was friendly and attentive, and the
                      delivery was impressively prompt.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  class="w-full mt-8 px-4 py-2.5 bg-transparent border border-yellow-300 text-yellow-300 font-semibold rounded"
                >
                  Read all reviews
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 5,
        image: "/productView-block.dark-5.png",
        demoUrl: "/demos/product-view-5",
        code: `
 <div className="w-full bg-white">
        <div className="font-sans bg-white">
          <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                  <img
                    src="https://readymadeui.com/images/laptop5.webp"
                    alt="Product"
                    className="w-3/4 rounded object-cover mx-auto"
                  />
                  <button type="button" className="absolute top-4 right-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      fill="#ccc"
                      className="mr-1 hover:fill-[#333]"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                  <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/laptop2.webp"
                      alt="Product2"
                      className="w-full"
                    />
                  </div>
                  <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/laptop3.webp"
                      alt="Product2"
                      className="w-full"
                    />
                  </div>
                  <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/laptop4.webp"
                      alt="Product2"
                      className="w-full"
                    />
                  </div>
                  <div className="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/laptop5.webp"
                      alt="Product2"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <h2 className="text-2xl font-extrabold text-gray-800">
                  Acer Aspire Pro 12 | Laptop
                </h2>

                <div className="flex space-x-2 mt-4">
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <h4 className="text-gray-800 text-base">500 Reviews</h4>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <p className="text-gray-800 text-3xl font-bold">$1200</p>
                  <p className="text-gray-400 text-base">
                    <del>$1500</del>{" "}
                    <span className="text-sm ml-1">Tax included</span>
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-800">
                    Choose a Color
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <button
                      type="button"
                      className="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                    ></button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-gray-300 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                    ></button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-gray-100 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                    ></button>
                    <button
                      type="button"
                      className="w-10 h-10 bg-blue-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0 transition-all"
                    ></button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <button
                    type="button"
                    className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded"
                  >
                    Buy now
                  </button>
                  <button
                    type="button"
                    className="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
              <h3 className="text-xl font-bold text-gray-800">
                Product information
              </h3>
              <ul className="mt-4 space-y-6 text-gray-800">
                <li className="text-sm">
                  TYPE <span className="ml-4 float-right">LAPTOP</span>
                </li>
                <li className="text-sm">
                  RAM <span className="ml-4 float-right">16 BG</span>
                </li>
                <li className="text-sm">
                  SSD <span className="ml-4 float-right">1000 BG</span>
                </li>
                <li className="text-sm">
                  PROCESSOR TYPE{" "}
                  <span className="ml-4 float-right">INTEL CORE I7-12700H</span>
                </li>
                <li className="text-sm">
                  PROCESSOR SPEED{" "}
                  <span className="ml-4 float-right">2.3 - 4.7 GHz</span>
                </li>
                <li className="text-sm">
                  DISPLAY SIZE INCH{" "}
                  <span className="ml-4 float-right">16.0</span>
                </li>
                <li className="text-sm">
                  DISPLAY SIZE SM{" "}
                  <span className="ml-4 float-right">40.64 cm</span>
                </li>
                <li className="text-sm">
                  DISPLAY TYPE{" "}
                  <span className="ml-4 float-right">
                    OLED, TOUCHSCREEN, 120 Hz
                  </span>
                </li>
                <li className="text-sm">
                  DISPLAY RESOLUTION{" "}
                  <span className="ml-4 float-right">2880x1620</span>
                </li>
              </ul>
            </div>

            <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
              <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
              <div className="grid md:grid-cols-2 gap-12 mt-4">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">5.0</p>
                    <svg
                      className="w-5 fill-blue-600 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-2/3 h-full rounded bg-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">4.0</p>
                    <svg
                      className="w-5 fill-blue-600 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/3 h-full rounded bg-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">3.0</p>
                    <svg
                      className="w-5 fill-blue-600 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/6 h-full rounded bg-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">2.0</p>
                    <svg
                      className="w-5 fill-blue-600 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-1/12 h-full rounded bg-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                  </div>

                  <div className="flex items-center">
                    <p className="text-sm text-gray-800 font-bold">1.0</p>
                    <svg
                      className="w-5 fill-blue-600 ml-1"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <div className="bg-gray-400 rounded w-full h-2 ml-3">
                      <div className="w-[6%] h-full rounded bg-blue-600"></div>
                    </div>
                    <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-start">
                    <img
                      src="https://readymadeui.com/team-2.webp"
                      className="w-12 h-12 rounded-full border-2 border-white"
                    />
                    <div className="ml-3">
                      <h4 className="text-sm font-bold text-gray-800">
                        John Doe
                      </h4>
                      <div className="flex space-x-1 mt-1">
                        <svg
                          className="w-4 fill-blue-600"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-blue-600"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-blue-600"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-[#CED5D8]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg
                          className="w-4 fill-[#CED5D8]"
                          viewBox="0 0 14 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <p className="text-xs !ml-2 font-semibold text-gray-800">
                          2 mins ago
                        </p>
                      </div>
                      <p className="text-sm mt-4 text-gray-800">
                        Lorem ipsum dolor sit amet, consectetur adipisci elit,
                        sed eiusmod tempor incidunt ut labore et dolore magna
                        aliqua.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-gray-800 font-bold rounded"
                  >
                    Read all reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 6,
        image: "/productView-block.dark-6.png",
        demoUrl: "/demos/product-view-6",
        code: `
      <div class="w-full bg-white">
        <div class="font-sans">
          <div class="grid items-start grid-cols-1 md:grid-cols-2 p-4 gap-12 max-w-6xl mx-auto">
            <div class="grid grid-cols-2 md:sticky top-0 gap-3">
              <div>
                <img
                  src="https://readymadeui.com/images/product6.webp"
                  alt="Product"
                  class="w-full h-full object-cover object-top rounded-md"
                />
              </div>
              <div>
                <img
                  src="https://readymadeui.com/images/product8.webp"
                  alt="Product"
                  class="w-full h-full object-cover object-top rounded-md"
                />
              </div>
              <div>
                <img
                  src="https://readymadeui.com/images/product5.webp"
                  alt="Product"
                  class="w-full h-full object-cover object-top rounded-md"
                />
              </div>
              <div>
                <img
                  src="https://readymadeui.com/images/product7.webp"
                  alt="Product"
                  class="w-full h-full object-cover object-top rounded-md"
                />
              </div>
            </div>

            <div class="max-lg:max-w-2xl">
              <div>
                <h2 class="text-2xl font-extrabold text-gray-800">
                  Adjective Attire | T-shirt
                </h2>
                <p class="text-sm text-gray-500 mt-2">
                  Well-Versed Commerce
                </p>
              </div>

              <div class="flex space-x-1 mt-4">
                <svg
                  class="w-5 fill-orange-500"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-orange-500"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-orange-500"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-orange-500"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <button
                  type="button"
                  class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center !ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                      data-original="#000000"
                    />
                    <path
                      d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                      data-original="#000000"
                    />
                  </svg>
                  87 Reviews
                </button>
              </div>

              <div class="mt-8">
                <p class="text-gray-800 text-4xl font-bold">$30</p>
                <p class="text-gray-500 text-sm mt-2">
                  <del>$42</del>{" "}
                  <span class="text-sm ml-1">Tax included</span>
                </p>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div class="flex flex-wrap gap-2 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 bg-gray-800 border border-orange-500 hover:border-orange-500 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-gray-400 border border-white hover:border-orange-500 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-orange-400 border border-white hover:border-orange-500 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-red-400 border border-white hover:border-orange-500 rounded-full shrink-0"
                  ></button>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">
                  Choose a Size
                </h3>
                <div class="flex flex-wrap gap-2 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-orange-500 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-orange-500 border-orange-500 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-orange-500 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-orange-500 font-semibold text-gray-800 text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    XL
                  </button>
                </div>
              </div>

              <div class="mt-8 space-y-4 max-w-xs">
                <button
                  type="button"
                  class="w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-md"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="w-full px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-md"
                >
                  Add to cart
                </button>
              </div>

              <div class="mt-8">
                <div>
                  <h3 class="text-xl font-bold text-gray-800">
                    Product Description
                  </h3>
                  <p class="text-sm text-gray-500 mt-4">
                   Elevate your casual style with our premium men's t-shirt.
                    Crafted for comfort and designed with a modern fit, this
                    versatile shirt is an essential addition to your wardrobe.
                    The soft and breathable fabric ensures all- day comfort,
      making it perfect for everyday wear.Its classic crew neck
                    and short sleeves offer a timeless look.
                  </p>
                </div>

                <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-500">
                  <li>
                    A t-shirt is a wardrobe essential because it is so
                    versatile.
                  </li>
                  <li>
                    Available in a wide range of sizes, from extra small to
                    extra large, and even in tall and petite sizes.
                  </li>
                  <li>
                    This is easy to care for. They can usually be machine-washed
                    and dried on low heat.
                  </li>
                  <li>
                    You can add your own designs, paintings, or embroidery to
                    make it your own.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 7,
        image: "/productView-block.dark-7.png",
        demoUrl: "/demos/product-view-7",
        code: `
      <div class="w-full bg-white">
        <div class="font-sans p-8 tracking-wide  max-lg:max-w-2xl mx-auto">
          <div>
            <h2 class="text-2xl font-extrabold text-gray-800">
              Dark blue sneakers with white laces
            </h2>
            <p class="text-sm text-gray-600 mt-2">Well-Versed Commerce</p>
          </div>

          <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
            <div>
              <div class="flex gap-4 text-center">
                <div class="bg-gray-100 p-4 flex items-center sm:h-[380px] rounded">
                  <img
                    src="https://readymadeui.com/images/product14.webp"
                    alt="Product"
                    class="w-full max-h-full object-contain object-top"
                  />
                </div>

                <div class="space-y-4">
                  <div class="bg-gray-100 p-4 flex items-center rounded sm:h-[182px]">
                    <img
                      src="https://readymadeui.com/images/product12.webp"
                      alt="Product"
                      class="w-full max-h-full object-contain object-top"
                    />
                  </div>

                  <div class="bg-gray-100 p-4 flex items-center rounded sm:h-[182px]">
                    <img
                      src="https://readymadeui.com/images/product9.webp"
                      alt="Product"
                      class="w-full max-h-full object-contain object-top"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <ul class="flex border-b">
                  <li class="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-gray-800 cursor-pointer transition-all">
                    Description
                  </li>
                  <li class="text-gray-600 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                    Reviews
                  </li>
                </ul>

                <div class="mt-8">
                  <h3 class="text-lg font-bold text-gray-800">
                    Product Description
                  </h3>
                  <p class="text-sm text-gray-600 mt-4">
                    Step up your footwear game with our premium men's shoes.
                    Designed for comfort and crafted with a contemporary
                    aesthetic, these versatile shoes are a must-have addition to
                    your wardrobe. The supple and breathable materials ensure
                    all-day comfort, making them perfect for everyday wear.
                  </p>
                </div>

                <ul class="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                  <li>
                    A pair of gray shoes is a wardrobe essential due to its
                    versatility.
                  </li>
                  <li>
                    Available in a wide range of sizes, from extra small to
                    extra large, and even in tall and petite sizes.
                  </li>
                  <li>
                    Easy to maintain, they can be machine-washed and dried on
                    low heat.
                  </li>
                  <li>
                    Personalize them with your own designs, patterns, or
                    embellishments to make them uniquely yours.
                  </li>
                </ul>
              </div>
            </div>

            <div class="max-w-xl">
              <p class="text-gray-800 text-3xl font-bold">$30</p>
              <div class="flex space-x-1 mt-4">
                <svg
                  class="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-gray-800"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>

                <button
                  type="button"
                  class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded flex items-center !ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                      data-original="#000000"
                    />
                    <path
                      d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                      data-original="#000000"
                    />
                  </svg>
                  87 Reviews
                </button>
              </div>

              <hr class="my-8" />

              <div>
                <h3 class="text-lg font-bold text-gray-800">
                  Choose a Size
                </h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    class="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    class="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    class="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    class="w-12 h-12 border-2 hover:border-gray-800 font-semibold text-sm rounded-full flex items-center justify-center shrink-0"
                  >
                    XL
                  </button>
                </div>
              </div>

              <hr class="my-8" />

              <div class="flex flex-wrap gap-4">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 8,
        image: "/productView-block.dark-8.png",
        demoUrl: "/demos/product-view-8",
        code: `
      <div class="w-full bg-white">
        <div class="font-sans p-8 tracking-wide max-lg:max-w-2xl mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
            <div class="space-y-4 text-center lg:sticky top-8">
              <div class="bg-gray-100 p-4 flex items-center sm:h-[380px] rounded-lg">
                <img
                  src="https://readymadeui.com/images/product14.webp"
                  alt="Product"
                  class="w-full max-h-full object-contain object-top"
                />
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gray-100 p-4 flex items-center rounded-lg sm:h-[182px]">
                  <img
                    src="https://readymadeui.com/images/product12.webp"
                    alt="Product"
                    class="w-full max-h-full object-contain object-top"
                  />
                </div>

                <div class="bg-gray-100 p-4 flex items-center rounded-lg sm:h-[182px]">
                  <img
                    src="https://readymadeui.com/images/product9.webp"
                    alt="Product"
                    class="w-full max-h-full object-contain object-top"
                  />
                </div>
              </div>
            </div>

            <div class="max-w-xl">
              <div>
                <h2 class="text-2xl font-extrabold text-gray-800">
                  Dark blue sneakers with white laces
                </h2>
                <p class="text-sm text-gray-600 mt-2">
                  Well-Versed Commerce
                </p>
              </div>

              <div class="flex space-x-1 mt-4">
                <svg
                  class="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-yellow-400"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  class="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>

                <button
                  type="button"
                  class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-lg flex items-center !ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-3 mr-1"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path
                      d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                      data-original="#000000"
                    />
                    <path
                      d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                      data-original="#000000"
                    />
                    <path
                      d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                      data-original="#000000"
                    />
                  </svg>
                  87 Reviews
                </button>
              </div>

              <div class="mt-4">
                <h3 class="text-gray-800 text-4xl font-bold">$30</h3>
              </div>

              <div class="mt-8">
                <h3 class="text-xl font-bold text-gray-800">
                  Choose a Size
                </h3>
                <div class="flex flex-wrap gap-4 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
                  >
                    SM
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-yellow-400 border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
                  >
                    MD
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
                  >
                    LG
                  </button>
                  <button
                    type="button"
                    class="w-10 h-10 border hover:border-yellow-400 font-semibold text-sm rounded-lg flex items-center justify-center shrink-0"
                  >
                    XL
                  </button>
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-white text-sm font-semibold rounded-lg"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border border-yellow-400 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded-lg"
                >
                  Add to cart
                </button>
              </div>

              <div class="mt-8">
                <ul class="flex border-b">
                  <li class="text-gray-800 font-bold text-sm bg-gray-100 py-3 px-8 border-b-2 border-yellow-400 cursor-pointer transition-all">
                    Description
                  </li>
                  <li class="text-gray-600 font-bold text-sm hover:bg-gray-100 py-3 px-8 cursor-pointer transition-all">
                    Reviews
                  </li>
                </ul>

                <div class="mt-8">
                  <h3 class="text-lg font-bold text-gray-800">
                    Product Description
                  </h3>
                  <p class="text-sm text-gray-600 mt-4">
                   Step up your footwear game with our premium men's shoes.
                    Designed for comfort and crafted with a contemporary
                    aesthetic, these versatile shoes are a must- have addition to
                    your wardrobe.The supple and breathable materials ensure
                    all - day comfort, making them perfect for everyday wear.
                  </p>
                </div>

                <ul class="space-y-3 list-disc mt-6 pl-4 text-sm text-gray-600">
                  <li>
                    A pair of gray shoes is a wardrobe essential due to its
                    versatility.
                  </li>
                  <li>
                    Available in a wide range of sizes, from extra small to
                    extra large, and even in tall and petite sizes.
                  </li>
                  <li>
                    Easy to maintain, they can be machine-washed and dried on
                    low heat.
                  </li>
                  <li>
                    Personalize them with your own designs, patterns, or
                    embellishments to make them uniquely yours.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 9,
        image: "/productView-block.dark-9.png",
        demoUrl: "/demos/product-view-9",
        code: `
       <div class="w-full bg-white">
        <div class="font-sans tracking-wide p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">
            <div class="lg:col-span-3 text-center">
              <div class="lg:h-[450px] p-4 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                <img
                  src="https://readymadeui.com/images/sunglass7.webp"
                  alt="Product"
                  class="lg:w-11/12 w-full h-full rounded object-contain object-top"
                />
              </div>

              <div class="flex flex-wrap gap-4 mx-auto mt-4">
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                  <img
                    src="https://readymadeui.com/images/sunglass1.webp"
                    alt="Product2"
                    class="w-20 h-16 object-contain"
                  />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                  <img
                    src="https://readymadeui.com/images/sunglass2.webp"
                    alt="Product3"
                    class="w-20 h-16 object-contain"
                  />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                  <img
                    src="https://readymadeui.com/images/sunglass3.webp"
                    alt="Product4"
                    class="w-20 h-16 object-contain"
                  />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                  <img
                    src="https://readymadeui.com/images/sunglass5.webp"
                    alt="Product5"
                    class="w-20 h-16 object-contain"
                  />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                  <img
                    src="https://readymadeui.com/images/sunglass6.webp"
                    alt="Product6"
                    class="w-20 h-16 object-contain"
                  />
                </div>
                <div class="cursor-pointer p-1 relative before:absolute before:inset-0 before:bg-black before:opacity-20 before:rounded">
                  <img
                    src="https://readymadeui.com/images/sunglass7.webp"
                    alt="Product7"
                    class="w-20 h-16 object-contain"
                  />
                </div>
              </div>
            </div>

            <div class="lg:col-span-2">
              <div class="flex flex-wrap items-start gap-4">
                <div>
                  <h2 class="text-2xl font-extrabold text-gray-800">
                    White Lens Glass
                  </h2>

                  <div class="flex space-x-1 mt-4">
                    <svg
                      class="w-5 fill-orange-500"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-5 fill-orange-500"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-5 fill-orange-500"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-5 fill-orange-500"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                    <svg
                      class="w-5 fill-[#CED5D8]"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  </div>
                </div>

                <div class="ml-auto flex flex-wrap gap-4">
                  <button
                    type="button"
                    class="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="currentColor"
                      class="mr-1"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                        data-original="#000000"
                      ></path>
                    </svg>
                    100
                  </button>
                  <button
                    type="button"
                    class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12px"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0"
                        data-original="#000000"
                      />
                      <path
                        d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <hr class="my-6" />

              <div>
                <h3 class="text-xl font-bold text-gray-800">Price</h3>
                <p class="text-gray-800 text-4xl font-bold mt-4">$130</p>
              </div>

              <hr class="my-6" />

              <div>
                <h3 class="text-xl font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div class="flex flex-wrap gap-2 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-gray-400 border-2 border-white hover:border-gray-800 rounded shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-orange-500 border-2 border-white hover:border-gray-800 rounded shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-red-400 border-2 border-white hover:border-gray-800 rounded shrink-0"
                  ></button>
                </div>
              </div>

              <hr class="my-6" />

              <div>
                <h3 class="text-xl font-bold text-gray-800">Quantity</h3>

                <div class="flex divide-x border w-max mt-4 rounded overflow-hidden">
                  <button
                    type="button"
                    class="bg-gray-100 w-12 h-10 font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-transparent w-12 h-10 font-semibold text-gray-800 text-lg"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="bg-gray-800 text-white w-12 h-10 font-semibold"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <hr class="my-6" />

              <div class="flex flex-wrap gap-4">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border border-orange-500 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div class="mt-6 max-w-2xl">
            <h3 class="text-xl font-bold text-gray-800">
              Product Features
            </h3>

            <ul class="grid sm:grid-cols-2 gap-3 mt-4">
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-orange-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                UV Protection
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-orange-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Stylish Design
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-orange-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Lightweight Frame
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-orange-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Scratch-Resistant Lenses
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-orange-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Polarized Lenses
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-orange-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Comfortable Fit
              </li>
            </ul>

            <div class="mt-6">
              <h3 class="text-xl font-bold text-gray-800">
                Product Description
              </h3>
              <p class="text-sm text-gray-600 mt-4">
                Step up your style game with our premium white lens sunglasses.
                Crafted for both fashion and function, these sunglasses offer UV
                protection, a stylish design, and a lightweight frame. The
                scratch-resistant and polarized lenses ensure durability and
                clarity, while the comfortable fit makes them ideal for all-day
                wear. Elevate your look with these must-have accessories for any
                occasion.
              </p>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 10,
        image: "/productView-block.dark-10.png",
        demoUrl: "/demos/product-view-10",
        code: `
      <div class="w-full bg-white">
        <div class="font-sans tracking-wide max-md:mx-auto">
          <div class="bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900 md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2">
            <div class="lg:col-span-3 h-full p-8">
              <div class="relative h-full flex items-center justify-center lg:min-h-[580px]">
                <img
                  src="https://readymadeui.com/images/watch6.webp"
                  alt="Product"
                  class="lg:w-3/5 w-3/4 h-full object-contain max-lg:p-8"
                />

                <div class="flex space-x-4 items-end absolute right-0 max-md:right-4 md:bottom-4 bottom-0">
                  <div class="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 fill-[#333] inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div class="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 fill-[#fff] inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-2 bg-gray-100 py-6 px-8 h-full">
              <div>
                <h2 class="text-2xl font-bold text-gray-800">
                  Smart Watch Timex
                </h2>

                <div class="flex space-x-1 mt-2">
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-bold text-gray-800">Price</h3>
                <p class="text-gray-800 text-3xl font-bold mt-4">$130</p>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div class="flex flex-wrap gap-2 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-bold text-gray-800">Quantity</h3>
                <div class="flex divide-x border w-max mt-4 rounded overflow-hidden">
                  <button
                    type="button"
                    class="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border border-gray-800 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded"
                >
                  Add to cart
                </button>
              </div>

              <div class="flex flex-wrap items-center text-sm text-gray-800 mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="fill-current w-6 mr-3"
                  viewBox="0 0 48 48"
                >
                  <path d="M15.5 33.3h19.1v2H15.5z" data-original="#000000" />
                  <path
                    d="M45.2 35.3H43v-2h2.2c.4 0 .8-.4.8-.8v-9.1c0-.4-.3-.6-.5-.7l-3.2-1.3c-.3-.2-.8-.5-1.1-1l-6.5-10c-.1-.2-.4-.3-.7-.3H2.8c-.4 0-.8.4-.8.8v21.6c0 .4.4.8.8.8h3.9v2H2.8C1.3 35.3 0 34 0 32.5V10.9c0-1.5 1.3-2.8 2.8-2.8h31.3c1 0 1.9.5 2.4 1.3l6.5 10 .4.4 2.9 1.2c1.1.5 1.7 1.4 1.7 2.5v9.1c0 1.4-1.3 2.7-2.8 2.7z"
                    data-original="#000000"
                  />
                  <path
                    d="M26.5 21H3.9v-9.4h22.6zM5.9 19h18.6v-5.4H5.9zm32.9 2H27.9v-9.4h6.3zm-8.9-2h5.7L33 13.6h-3.1zm-19 20.9c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6zm27.9 9.2c-3.1 0-5.6-2.5-5.6-5.6s2.5-5.6 5.6-5.6 5.6 2.5 5.6 5.6-2.5 5.6-5.6 5.6zm0-9.2c-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6-1.6-3.6-3.6-3.6z"
                    data-original="#000000"
                  />
                </svg>
                Free delivery on order $100
              </div>
            </div>
          </div>

          <div class="mt-8 max-w-2xl px-6">
            <h3 class="text-lg font-bold text-gray-800">
              Smartwatch Features
            </h3>

            <ul class="grid sm:grid-cols-2 gap-3 mt-4">
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Fitness Tracking
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Heart Rate Monitoring
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Sleep Tracking
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Waterproof Design
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Notifications
              </li>
              <li class="flex items-center text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  class="mr-4 bg-green-500 fill-white rounded-full p-[3px]"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  />
                </svg>
                Touchscreen Interface
              </li>
            </ul>

            <div class="mt-8">
              <h3 class="text-lg font-bold text-gray-800">
                Product Description
              </h3>
              <p class="text-sm text-gray-600 mt-4">
                Enhance your daily routine with our advanced smartwatch.
                Featuring fitness tracking capabilities, heart rate monitoring,
                sleep tracking, and a waterproof design, this smartwatch is
                designed to keep up with your active lifestyle. Receive
                notifications and stay connected with its touchscreen interface,
                offering convenience at your fingertips. Upgrade to a smarter
                way of living with this essential accessory.
              </p>
            </div>
          </div>
        </div>
      </div>
`
      },
      {
        id: 11,
        image: "/productView-block.dark-11.png",
        demoUrl: "/demos/product-view-11",
        code: `
      <div class="w-full bg-white">
        <div class="font-sans tracking-wide max-md:mx-auto">
          <div class="bg-gradient-to-r from-gray-600 via-gray-900 to-gray-900 md:min-h-[600px] grid items-start grid-cols-1 lg:grid-cols-5 md:grid-cols-2">
            <div class="lg:col-span-3 h-full p-8">
              <div class="relative h-full flex items-center justify-center lg:min-h-[580px]">
                <img
                  src="https://readymadeui.com/images/watch6.webp"
                  alt="Product"
                  class="lg:w-3/5 w-3/4 h-full object-contain max-lg:p-8"
                />

                <div class="flex space-x-4 items-end absolute right-0 max-md:right-4 md:bottom-4 bottom-0">
                  <div class="bg-white w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 fill-[#333] inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                  <div class="bg-[#333] w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4 fill-[#fff] inline"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                        clip-rule="evenodd"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-2 bg-gray-100 py-6 px-8 h-full">
              <div>
                <h2 class="text-2xl font-bold text-gray-800">
                  Smart Watch Timex
                </h2>

                <div class="flex space-x-1 mt-2">
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-gray-800"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-4 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-bold text-gray-800">Price</h3>
                <p class="text-gray-800 text-3xl font-bold mt-4">$130</p>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-bold text-gray-800">
                  Choose a Color
                </h3>
                <div class="flex flex-wrap gap-2 mt-4">
                  <button
                    type="button"
                    class="w-10 h-10 bg-black border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-gray-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-orange-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                  <button
                    type="button"
                    class="w-10 h-10 bg-red-400 border-2 border-white hover:border-gray-800 rounded-full shrink-0"
                  ></button>
                </div>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-bold text-gray-800">Quantity</h3>
                <div class="flex divide-x border w-max mt-4 rounded overflow-hidden">
                  <button
                    type="button"
                    class="bg-gray-100 w-10 h-9 font-semibold flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    class="bg-transparent w-10 h-9 font-semibold flex items-center justify-center text-gray-800 text-lg"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    class="bg-gray-800 text-white w-10 h-9 font-semibold flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
      <div class="w-full bg-white">
        <div class="font-sans tracking-wide max-w-7xl mx-auto">
          <div class="bg-white md:min-h-[600px] grid items-start grid-cols-1 md:grid-cols-2 gap-8">
            <div class="h-full">
              <div class="p-4 relative h-full flex items-center justify-center">
                <img
                  src="https://readymadeui.com/images/laptop2.webp"
                  alt="Product"
                  class="lg:w-4/5 w-full h-full rounded-xl object-contain"
                />

                <div class="flex items-center justify-center gap-3 absolute md:bottom-6 bottom-0 left-0 right-0 mx-auto">
                  <div class="w-3.5 h-3.5 shrink-0 rounded-full bg-gray-300 cursor-pointer"></div>
                  <div class="w-3.5 h-3.5 shrink-0 rounded-full bg-blue-600 cursor-pointer"></div>
                  <div class="w-3.5 h-3.5 shrink-0 rounded-full bg-gray-300 cursor-pointer"></div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-gray-600 via-gray-600 to-gray-700 py-6 px-8 h-full">
              <div>
                <h2 class="text-3xl font-semibold text-white">
                  Acer Aspire Pro 12
                </h2>
                <p class="text-sm text-gray-400 mt-2">
                  Well-Versed Commerce
                </p>
              </div>

              <div class="flex flex-wrap gap-4 justify-between mt-8">
                <h3 class="text-white text-4xl">$730</h3>

                <div class="flex space-x-2">
                  <svg
                    class="w-5 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-5 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-5 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-5 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    class="w-5 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>

              <div>
                <ul class="grid grid-cols-3 mt-8">
                  <li class="text-white text-base w-full py-3.5 px-2 text-center border-b-2 border-white cursor-pointer">
                    Description
                  </li>
                  <li class="text-gray-300 text-base w-full py-3.5 px-2 text-center border-b-2 border-gray-400 cursor-pointer">
                    Details
                  </li>
                  <li class="text-gray-300 text-base w-full py-3.5 px-2 text-center border-b-2 border-gray-400 cursor-pointer">
                    Reviews
                  </li>
                </ul>
                <p class="text-gray-300 mt-4 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed
                  eiusmod tempor incidunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div class="mt-8">
                <h3 class="text-lg font-semibold text-white">Quantity</h3>

                <div class="flex mt-4 rounded-full overflow-hidden bg-gray-800 py-2.5 px-4 w-32">
                  <button
                    type="button"
                    class="bg-transparent w-full text-white font-semibold flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 124 124"
                    >
                      <path
                        d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                  <span class="bg-transparent w-full px-4 font-semibold flex items-center justify-center text-white text-base">
                    1
                  </span>
                  <button
                    type="button"
                    class="bg-transparent w-full text-white font-semibold flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 fill-current inline"
                      viewBox="0 0 42 42"
                    >
                      <path
                        d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3.5 bg-gray-800 hover:bg-gray-900 text-white text-base rounded"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3.5 border border-gray-800 bg-transparent text-white text-base rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
`
      },
    ]
  }
];

export default componentsData;



