import React from "react";

function Hero(){
  return (
    <div className=" bg-slate-200 max-w-4xl mx-auto px-2 sm:px-8">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="text-center pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          >
            <em>How much do you know about&nbsp;&nbsp;</em>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
              Cyber Security
            </span>
            <em>?</em>
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-gray-600 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              In today's digital age, it's important to be aware of the dangers
              that come with being connected to the internet. Cybercriminals are
              constantly finding new ways to exploit vulnerabilities and steal
              sensitive information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;