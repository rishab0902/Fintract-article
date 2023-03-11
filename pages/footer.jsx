import React from "react";
import Image from "next/image";
function footer() {
  return (
    <footer aria-label="Site Footer" className="bg-black">
      <div className="max-w-screen-xl px-10 py-16 mx-auto space-y-3 sm:px-6 lg:space-y-10 lg:px-8">
        {/* <div className="grid grid-cols-2 gap-1 lg:grid-cols-2"> */}
        <div>
          <div className="text-teal-600">
            <Image
              src="/1.png"
              alt="Picture of the author"
              width={100}
              height={100}
            />
          </div>
          <h1 className=" bg-clip-text text-3xl font-bold text-white sm:text-3xl">
            Fintract Global
          </h1>
          <p className="max-w-xs mt-4 text-gray-500">
            At Fintract Global Ltd, we combine a cutting edge tech stack with
            exceptional talent from Europe, Asia and America to lead change in
            how financial entities work. Headquartered in London, Fintract
            Global develops cutting edge fintech and regtech products.
          </p>
          <ul className="flex gap-6 mt-8">
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
                <Image
                  src="/Group 89.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <Image
                  src="/Group 88.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>
                <Image
                  src="/Group 87.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </a>
            </li>
            <li>
              <a
                href="/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">LinkedIN</span>
                <Image
                  src="/Group 90.png"
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </a>
            </li>
          </ul>
        </div>

        <div>
          <nav aria-label="Footer Navigation - Legal" className="mt-6">
            <ul className="space-y-4 text-sm">
              <li>
                <div class="flex items-center relative p-4 w-full bg-black rounded-lg overflow-hidden shadow hover:shadow-md">
                  <div class="w-12 h-12  ">
                    <Image
                      src="/Group 91.png"
                      alt="Picture of the author"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div class="ml-3">
                    <p class="font-medium text-white">Address</p>
                    <p class="text-xs text-white mt-2">
                      Registered Office: London Office Address 71-75, Sheldon
                      Street, Covent Garden London, WC2h 9JQ
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex items-center relative p-4 w-full bg-black rounded-lg overflow-hidden shadow hover:shadow-md">
                  <div class="w-12 h-12  ">
                    <Image
                      src="/Group 92.png"
                      alt="Picture of the author"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div class="ml-3">
                    <p class="font-medium text-white">Phone</p>
                    <p class="text-xs text-white mt-2">+44-2037373227</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex items-center relative p-4 w-full bg-black rounded-lg overflow-hidden shadow hover:shadow-md">
                  <div class="w-12 h-12  ">
                    <Image
                      src="/Group 93.png"
                      alt="Picture of the author"
                      width={70}
                      height={70}
                    />
                  </div>
                  <div class="ml-3">
                    <p class="font-medium text-white">Email</p>
                    <p class="text-xs text-white mt-2">
                      contact@fintract.co.uk
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        {/* </div> */}
        <p className="text-xs text-gray-500 text-center max-w-4xl mx-auto my-1">
          Fintract Global takes your privacy very seriously. We may process your
          personal information for carefully considered and specific purposes
          which are in our interests and enable us to enhance the services we
          provide, but which we believe also benefit our customers. View our
          Privacy Policy to learn more about these interests and when we may
          process your information in this way.
        </p>
        <p className="text-xs text-gray-500 text-center   mx-auto mt-0">
          © 2022. Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default footer;
