import { useState } from "react";
import Image from "next/image";
import Dropdown from "../pages/dropdown";
export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <section
        className="bg-gray-900 text-white "
        style={{ backgroundImage: `url("/Group 54.png")` }}
      >
        <nav className="w-full bg-white-100 shadow">
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
                className="px-4 py-3 text-white bg-black  shadow "
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

        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              Our aim is to help accelerate client growth, strengthen their
              market base and amplify the volume of transactions through our
              qualityfocused products.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
