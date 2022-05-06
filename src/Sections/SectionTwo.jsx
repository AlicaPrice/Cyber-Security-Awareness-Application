import React from "react";

function SectionTwo() {
  return (
    <div className="bg-slate-500">
      <div className="pt-24 pb-12 md:pt-40 md:pb-20">
        <div className="text-center pb-12 md:pb-16">
          <h1 className="text-5xl md:text-6xl text-white font-extrabold leading-tighter tracking-tighter mb-4">
            Here is why you should care.
          </h1>
          <div className="max-w-3xl mx-auto">
            <p
              className="text-xl text-white mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="100"
            >
              You wouldn't leave your house key in the door, nor would you leave
              your house door wide open - this should be no different from your
              online privacy.{" "}
            </p>
            <p
              className="text-xl text-white mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Most people will keep their private information on their devices.
              If you are not protecting yourself online, this information can be
              lost, stolen or tampered with in manys.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;