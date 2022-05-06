import React, { useState, useRef } from "react";
import Fade from "../Utilities/Transitions";

function Vocabulary() {

  /* Stating which tab to start on, as
  well as defining tabs */
  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  return (
    <section className="relative">
      {/*Intro*/}
      <div className=" bg-slate-300 relative px-6 sm:px-6 max-w-3xl mx-auto">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 bg-slate-200 mb-4">
              Improve your personal security online
            </h1>
            <p className="text-xl text-gray-600">
              As cyber threats increase, it's more important than ever to be
              cyber security aware. One of the best ways to stay safe online is
              to understand the terminology used by cyber security
              professionals. In this glossary, we will define some of the most
              common cyber security jargon terms. Knowing these terms will help
              you increase your cyber security knowledge and protect yourself
              from online attacks.
            </p>
            <br></br>{" "}
          </div>
          <div />
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/*Heading*/}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-5 md:mt-5"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className=" h3 mb-2 bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300">
                  Glossary
                </h3>
                <p className="text-xl text-gray-600">
                  {" "}
                  Click any of the tabs below to learn more!
                </p>
              </div>
              {/* Navigation -  If a tab is selected, it will show as 'highlighted'*/}
              <div className="mb-8 md:mb-0">
                {/*IP Address*/}
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 1
                      ? "bg-white shadow-md  hover:shadow-lg"
                      : "bg-slate-200  border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(1);
                  }}
                >
                  <div>
                    <div className="font-bold text-justify leading-tight tracking-tight">
                      IP Address
                    </div>
                  </div>
                </a>
                {/*VPNs*/}
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 2
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(2);
                  }}
                >
                  <div>
                    <div className="font-bold text-centre leading-snug tracking-tight mb-1">
                      Virtual Private Networks (VPN)
                    </div>
                  </div>
                </a>
                {/*Social Engineering*/}
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 3
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(3);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Social Engineering
                    </div>
                  </div>
                </a>
                {/*Phishing*/}
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 4
                      ? "bg-white shadow-md border-gray-100 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(4);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Phishing
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 5
                      ? "bg-white shadow-md border-gray-100 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(5);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Cyber Security
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 6
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(6);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Data Breach
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 7
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(7);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Ransomware
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 8
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(8);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Two-Factor Authentication
                    </div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-3 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== 9
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-slate-200 border-white"
                  }`}
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(9);
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      Malware
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/*Glossary Items*/}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center">
                {/*IP Address*/}
                <Fade
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col"> </div>
                  <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                    IP Address
                  </span>
                  <p className="text-xl text-justify text-gray-600">
                    A unique numerical label assigned to each device connected
                    to a computer network.
                  </p>
                </Fade>
                {/*VPNs*/}
                <Fade
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100k">
                      Virtual Private Networks (VPN)
                    </span>
                    <p className="text-xl text-gray-600 text-justify">
                      A Virtual Private Network, a service that encrypts
                      internet traffic and routes it through a secure tunnel to
                      protect sensitive data.
                    </p>
                  </div>
                </Fade>
                {/*Social Engineering*/}
                <Fade
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                      <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                        Social Engineering
                      </span>
                      <p className="text-xl text-justify text-gray-600">
                        A type of attack that relies on human interaction to
                        trick victims into revealing sensitive information or
                        performing actions that could compromise security.{" "}
                      </p>
                    </div>
                  </div>
                </Fade>
                {/*Phishing*/}
                <Fade
                  show={tab === 4}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                      Phishing
                    </span>
                    <p className="text-xl text-gray-600">
                      A type of cyber attack that uses fraudulent emails or
                      websites to trick victims into revealing sensitive
                      information, such as passwords or credit card numbers.
                    </p>
                  </div>
                </Fade>
                {/*Cyber Security*/}
                <Fade
                  show={tab === 5}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                      Cyber Security
                    </span>
                    <p className="text-xl text-gray-600">
                      The practice of protecting electronic information from
                      unauthorized access or theft.
                    </p>
                  </div>
                </Fade>
                {/*Data Breach*/}
                <Fade
                  show={tab === 6}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                      Data Breach
                    </span>
                    <p className="text-xl text-gray-600">
                      A security incident in which sensitive, protected, or
                      confidential data is accessed and/or disclosed without
                      authorization.
                    </p>
                  </div>
                </Fade>
                {/*Ransomware*/}
                <Fade
                  show={tab === 7}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                      Ransomware
                    </span>
                    <p className="text-xl text-gray-600">
                      A type of malware that encrypts a victim's files and
                      demands a ransom be paid in order to decrypt them.
                    </p>
                  </div>
                </Fade>
                {/*Two-Factor Authentication*/}
                <Fade
                  show={tab === 8}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                      Two-Factor Authentication
                    </span>
                    <p className="text-xl text-gray-600">
                      An extra layer of security that requires users to provide
                      two pieces of information in order to log in, such as a
                      password and a one-time code generated by a mobile app.
                    </p>
                  </div>
                </Fade>
                {/*Malware*/}
                <Fade
                  show={tab === 9}
                  appear={true}
                  className="w-full"
                  select="transition ease-in-out duration-700 transform order-first"
                  selecting="opacity-0 translate-y-16"
                  selected="opacity-100 translate-y-0"
                  selectedFin="transition ease-in-out duration-300 transform absolute"
                  leaving="opacity-100 translate-y-0"
                  leavingFin="opacity-0 -translate-y-20"
                >
                  <div className="relative inline-flex flex-col">
                    <span className="h1 mb-4 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-100">
                      Malware
                    </span>
                    <p className="text-xl text-gray-600">
                      Short for "malicious software," malware is any type of
                      code that is designed to cause damage to a computer system
                      or steal personal information.
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vocabulary;