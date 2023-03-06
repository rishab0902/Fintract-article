/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
function card() {
  return (
    <section className="bg-white px-12 text-black">
      <div className="flex flex-col sm:flex-row items-center my-4 px-6 py-4 bg-white rounded-lg shadow-md">
        <div className="w-full mb-4 sm:mb-0">
          <img
            className="w-full h-full object-fit rounded-md"
            style={{ maxHeight: "400px", maxWidth: "500px" }}
            src="./pexels-alesia-kozik-6780789 1.png"
            alt="Placeholder image"
          ></img>
        </div>
        <div className="w-full sm:w-1/2 sm:pl-8">
          <h3 className="text-lg font-semibold text-black mb-2">
            Will Blockchains Bring the Winds of Change Post COVID?
          </h3>
          <p className="text-gray-700 mb-4">
            Since the beginning of the Coronavirus pandemic, banks everywhere
            have been facing new challenges. Interest margins and income fees
            are under pressure to change, NPAs are imminent as the corporate
            sector fights for survival, and the need ...
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Read More
          </button>
        </div>
      </div>
      {/* Technology starts */}

      <div className="w-100 mx-auto">
        <div className="flex items-center">
          <hr className="border-t border-black flex-grow"></hr>
          <h6 className="text-4xl font-bold text-black mx-4">Technology</h6>
          <hr className="border-t border-black flex-grow"></hr>
        </div>
      </div>

      <div className="container ">
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-3 pt-20 pb-10 lg:pt-40 lg:pb-20 "
          style={{ cursor: "auto" }}
        >
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-brett-jordan-5444435 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                App Stores Are The Latest Target Of Antitrust Investigations
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Since the beginning of the Coronavirus pandemic, banks
                everywhere have been facing new challenges. Interest margins and
                income fees are under pressure to change, NPAs are imminent as
                the corporate sector fights for survival, and the need ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./Basics-of-creating-an-AI-chatbot-2 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">Chatbots in Banking</h5>
              <p className="text-sm leading-6 text-back mb-5">
                What is Chatbot? The word Chatbot is a combination of "chat" and
                "robot", which can be easily summarized into chatting with a
                robot. The robot works on the machine learning algorithm which
                is a part of the artificial ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-nastyasensei-335393 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                The World of Open Finance
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Open finance throws light on the possibility to transform the
                way consumers and businesses use financial services. Let’s
                define it for you first. 'Open Finance' is the term used to
                describe the extension of Open Banking ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-nappy-936137 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                Applications of Business Intelligence In Finance
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                “Sisense, a leading analytics platform for business diagnostic
                recently announced the results of it's Survey ‘BI & Analytics
                Report 2020: Special COVID-19 Edition’ which offers an increased
                clarity ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-energepiccom-2988232 2.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                The Future Of Open Banking
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Open Banking is a secure technology, which consists of an API
                (Application Programming Interface) that allows consumers and
                SME (Small Medium Enterprises) to safely share their
                transactional data ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-pavel-danilyuk-8000545.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                COVID-19 - The Demand For Innovation In Product Development
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Steve Jobs rightly said, “You can’t just ask customers what they
                want and then try to give that to them. By the time you get it
                built, they'll want something new.” Product creation has never
                been ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-sora-shimazaki-5668859 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                Business Consulting In The Age of Digital Disruption
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Over the past few years, the world of consulting has been
                transformed by the digital evolution. A paradigm shift has taken
                place in the industry, opening the door to a digital future.
                Business Consulting, in the modern day...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-thisisengineering-3861958 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                Technology: A Ray of Hope for Banking Sector
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                The transition from a traditional economy to a modern complex
                economy occurred with the world-altering invention of banks.
                Although the idea of lending was existent before the advent of
                banks, banking facilities provided it with a proper framework
                ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-andrea-piacquadio-3768126 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                How Fintechs are Revolutionising Student Debt
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                The evolution of technology has drastically transformed the
                society. It has become an integral part of our lives by playing
                a significant role in the day to day activities ranging...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-alex-knight-2599244 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                The Impact of AI on Businesses in the Post-COVID19 World
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Adaptation is one characteristic which has helped humans surpass
                global shocks efficiently. In today's day and time, our newest
                adaptation is Artificial Intelligence. Historically, economic
                breakdowns have brought about moments of truth which have
                altered...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img className="rounded-t-lg" src="./blockchain 1.png" alt="" />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                Will Blockchains Bring the Winds of Change Post COVID?
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Since the beginning of the Coronavirus pandemic, banks
                everywhere have been facing new challenges. Interest margins and
                income fees are under pressure to change, NPAs are imminent as
                the corporate sector fights for survival, and the need ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./535f7505ffe26acb5fb6f407c0275e23_XL 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                Online Banking Frauds and Challenges Faced by Businesses
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                Banks are the engines that run the operations of the financial
                sector, monetary markets and the growth of an economy. The
                innovation in technology has assisted this sector in building a
                stronger relationship ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./fintech_1649842840 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">Fintech trends in 2021</h5>
              <p className="text-sm leading-6 text-back mb-5">
                Since the last global financial crisis, investments in Fintech
                have been growing. The expansion of the sector ...
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
          <div className="block max-w-sm rounded-lg bg-white ">
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img
                className="rounded-t-lg"
                src="./pexels-meo-724994 1.png"
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="text-lg font-bold mb-2">
                Consumer data rights : A double edge sword
              </h5>
              <p className="text-sm leading-6 text-back mb-5">
                The advent of open banking has meant that customers consent to
                third party providers (TTP) accessing their account information
                or to them carrying out payments on their behalf. The Open
                banking’s sharing of data model has been applied also to....
              </p>
              <button
                type="button"
                className="inline-block rounded bg-blue-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                style={{ display: "block", margin: "auto" }}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default card;
