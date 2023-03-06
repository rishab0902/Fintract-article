import { useState } from "react";
import Image from "next/image";
import Dropdown from "../pages/dropdown";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav className="w-full bg-black shadow">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block ">
                <a href="javascript:void(0)">
                  <Image
                    src="/1.png"
                    alt="Picture of the author"
                    width={70}
                    height={70}
                  />
                </a>

                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "block" : "hidden"
                }`}
              >
                <ul className="  space-y-3 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-white hover:text-indigo-200">
                    <a href="javascript:void(0)">
                      <Dropdown
                        index="1"
                        Options="More"
                        Option1="Help"
                        Option2="Term & C"
                        Option3="Our Vision"
                      />
                    </a>
                  </li>
                  <li className="text-white hover:text-indigo-200 ">
                    <a href="javascript:void(0)">
                      <Dropdown
                        index="2"
                        Options="Our Products"
                        Option1="BANK TRANSACTIOSNS"
                        Option2="D2C PAYMENTS"
                        Option3="B2B PAYMENTS"
                      />
                    </a>
                  </li>
                </ul>

                <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                  <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                  />

                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-white bg-blue-600 rounded-md shadow hover:bg-gray-800"
                  >
                    Sign in
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                  >
                    Sign up
                  </a>
                  <Dropdown
                    index="3"
                    Options="Contact Us"
                    Option1="By email"
                    Option2="By Phone"
                    Option3="Visit our office"
                  />
                </div>
              </div>
            </div>
            <div className="hidden space-x-2 md:inline-block basis-9/25 justify-self-end">
              <div className="inline-block">
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-700 border border-gray-300 rounded-full bg-black focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                  placeholder="Search"
                  required=""
                />
              </div>

              <a
                href="javascript:void(0)"
                className="px-4 py-3 text-black bg-white  shadow "
              >
                Log in
              </a>
              <a
                href="javascript:void(0)"
                className="px-4 py-3 text-white bg-blue-500  shadow "
              >
                Sign up
              </a>
              <Dropdown
                index="3"
                Options="Contact Us"
                Option1="By email"
                Option2="By phone"
                Option3="Visit our office"
              />
            </div>
          </div>
        </nav>
        {/* hero section */}

        <section
          className="bg-white border rounded-[80px] w-[80vw] h-[40vh] mx-auto mt-10 flex items-center"
          style={{
            backgroundImage: `url("/Group 57.png")`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `cover`,
          }}
        >
          <div class="mx-auto max-w-3xl text-center">
            <p class="mx-auto  text-7xl  font-bold sm:leading-relaxed text-white-900">
              Articles
            </p>
            <p class="mx-auto  text-xl  font-medium sm:leading-relaxed text-white-900">
              The Latest Information on the trends in Fintech
            </p>
          </div>
        </section>
        <div className="flex items-center bg-gray-100 rounded-full w-80 md:w-auto md:max-w-sm mx-auto mt-neg-50 p-4 drop-shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
          >
            <path
              fill="black"
              d="M502.4 475.4L370.1 343.1c29.4-35.7 47.1-81.1 47.1-130.2C417.2 96.9 320.3 0 208.6 0S0 96.9 0 216.9s96.9 216.9 216.9 216.9c49.1 0 94.5-17.7 130.2-47.1l132.3 132.3c7.8 7.8 20.5 7.8 28.3 0l22.6-22.6c7.8-7.8 7.8-20.5 0-28.3zM216.9 384C126.2 384 54 311.8 54 216.9S126.2 49.7 216.9 49.7s162.9 72.2 162.9 167.1c0 94.9-72.2 167.1-162.9 167.1z"
            />
          </svg>
          <input
            className="bg-gray-100 flex-grow px-2 border-white text-sm text-gray-700"
            type="text"
            placeholder="Search Articles"
          />
        </div>
      </header>
    </>
  );
}
